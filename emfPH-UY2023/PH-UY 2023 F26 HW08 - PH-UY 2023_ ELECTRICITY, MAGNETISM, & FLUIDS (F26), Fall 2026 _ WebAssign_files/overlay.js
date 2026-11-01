if (!window.mathTypeOverlay) {
    window.mathTypeOverlay = (() => {
        const OVERLAY_ID = "mathtype-overlay";
        const OVERLAY_FOOTPRINT_ID = "mathtype-overlay-footprint";
        const BUTTON_CLASS = "mathtype-overlay-trigger";
        const DEFAULT_WIDTH = 120;
        const DEFAULT_HEIGHT = 36;
        const MAX_INLINE_WIDTH = 510;
        const BUTTON_WIDTH = 36;
        const PREVIEW_LEFT_INSET = 8;
        const BUTTON_GAP = 4;
        const WRAPPED_INLINE_HEIGHT_PADDING = 10;
        const WRAPPED_PREVIEW_HEIGHT_PADDING = 14;
        const TAB_OVERFLOW_TOLERANCE = 2;
        const TAB_SCROLL_BUTTON_RESERVE = 36;
        const SHOW_MORE_CLASS = "mathtype-overlay-showmore";
        const state = {
            activeBoxId: null,
            activeEditorType: null,
            lastFocusedElement: null,
            showMoreButtonToCollapse: null,
            syncTimers: {},
            previewTimers: {},
            previewVersions: {},
        };

        function getEditorDiv(boxId) {
            return document.getElementById(`editable-math-${boxId}`);
        }

        function getAnswerField(boxId) {
            return document.getElementById(boxId);
        }

        function getEditorType(boxId) {
            const editorDiv = getEditorDiv(boxId);
            return editorDiv ? editorDiv.dataset.type : null;
        }

        function getHiddenWrapper(editorType) {
            if (window.ensureMathTypeStagingHost) {
                return window.ensureMathTypeStagingHost(editorType);
            }
            return null;
        }

        function getOverlay() {
            return document.getElementById(OVERLAY_ID);
        }

        function getOverlayFootprint() {
            return document.getElementById(OVERLAY_FOOTPRINT_ID);
        }

        function getOverlayFootprintContainer(boxId) {
            const editorDiv = boxId ? getEditorDiv(boxId) : null;
            const form = editorDiv ? editorDiv.closest("form") : null;
            const pavContainer = editorDiv ? editorDiv.closest('[id^="pavQuestion"]') : null;
            const isPavForm = Boolean(form && pavContainer);
            return isPavForm ? form : document.body;
        }

        function ensureOverlayFootprint(boxId) {
            let footprint = getOverlayFootprint();
            const container = getOverlayFootprintContainer(boxId);
            if (footprint) {
                if (footprint.parentNode !== container) {
                    container.appendChild(footprint);
                }
                return footprint;
            }

            footprint = document.createElement("div");
            footprint.id = OVERLAY_FOOTPRINT_ID;
            footprint.className = "mathtype-overlay-footprint";
            footprint.setAttribute("aria-hidden", "true");
            container.appendChild(footprint);
            return footprint;
        }

        function syncOverlayFootprint() {
            const overlay = getOverlay();
            const footprint = ensureOverlayFootprint(state.activeBoxId);
            const shell = overlay ? overlay.querySelector(".mathtype-overlay-shell") : null;
            const isOpen = overlay && overlay.classList.contains("is-open") && shell;

            if (!isOpen) {
                footprint.style.height = "0";
                footprint.setAttribute("hidden", "hidden");
                return;
            }

            const shellHeight = Math.ceil(shell.getBoundingClientRect().height || 0);
            footprint.style.height = `${shellHeight + 48}px`;
            footprint.removeAttribute("hidden");
        }

        function ensureOverlay() {
            let overlay = getOverlay();
            if (overlay) {
                return overlay;
            }

            overlay = document.createElement("section");
            overlay.id = OVERLAY_ID;
            overlay.className = "mathtype-overlay";
            overlay.setAttribute("aria-hidden", "true");
            overlay.setAttribute("role", "dialog");
            overlay.setAttribute("aria-modal", "true");
            overlay.setAttribute("aria-labelledby", "mathtype-overlay-title");
            overlay.innerHTML = `
                <div class="mathtype-overlay-shell" tabindex="-1">
                    <div class="mathtype-overlay-header">
                        <span id="mathtype-overlay-title" class="mathtype-overlay-title">Math Pad</span>
                        <div class="mathtype-overlay-actions">
                            <button type="button" class="mathtype-overlay-action mathtype-overlay-action-close" aria-label="Close math pad"></button>
                        </div>
                    </div>
                    <div class="mathtype-overlay-body" aria-describedby="mathtype-overlay-help">
                        <div class="mathtype-overlay-context" aria-hidden="true"></div>
                        <div class="mathtype-overlay-editor"></div>
                    </div>
                    <div class="mathtype-overlay-footer">
                        <a id="mathtype-overlay-help" href="https://help.cengage.com/webassign/student_guide/?t=t_s_answering_calcpad" target="_new">HELP</a>
                    </div>
                </div>
            `;

            overlay.addEventListener("click", (event) => {
                event.stopPropagation();
            });

            const closeButton = overlay.querySelector(".mathtype-overlay-action-close");
            const snapshotOverlayValue = () => {
                if (state.activeBoxId) {
                    syncAnswerValue(state.activeBoxId);
                }
            };
            closeButton.addEventListener("focus", snapshotOverlayValue);
            closeButton.addEventListener("pointerdown", snapshotOverlayValue);
            closeButton.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (closeButton.dataset.enterClosePending === "true") {
                    delete closeButton.dataset.enterClosePending;
                    return;
                }
                snapshotOverlayValue();
                close();
            });
            closeButton.addEventListener("keydown", (event) => {
                if (event.key !== "Enter") {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                snapshotOverlayValue();
                closeButton.dataset.enterClosePending = "true";
            });
            closeButton.addEventListener("keyup", (event) => {
                if (event.key !== "Enter" || closeButton.dataset.enterClosePending !== "true") {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                delete closeButton.dataset.enterClosePending;
                snapshotOverlayValue();
                close();
            });

            // Capture phase: Escape has to close an open "Show more" popup before it can close the pad
            overlay.addEventListener("keydown", handleShowMoreEscape, true);
            overlay.addEventListener("keydown", handleOverlayKeydown);

            ensureOverlayFootprint();
            document.body.appendChild(overlay);
            return overlay;
        }

        function getFocusableElements() {
            const overlay = getOverlay();
            if (!overlay) {
                return [];
            }

            const focusable = Array.from(
                overlay.querySelectorAll(
                    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter((element) => !element.hasAttribute("hidden"));

            const editorFocusElement = getMathTypeFocusElement(getOverlayEditorHost());
            if (editorFocusElement && !focusable.includes(editorFocusElement)) {
                focusable.unshift(editorFocusElement);
            }

            return focusable;
        }

        function handleOverlayKeydown(event) {
            if (!isOverlayActive()) {
                return;
            }

            if (event.key === "Escape") {
                event.preventDefault();
                close();
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const focusable = getFocusableElements();
            if (!focusable.length) {
                event.preventDefault();
                return;
            }

            const activeElement = document.activeElement;
            const firstElement = focusable[0];
            const lastElement = focusable[focusable.length - 1];

            if (event.shiftKey) {
                if (activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
                return;
            }

            if (activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }

        function getOverlayEditorHost() {
            const overlay = ensureOverlay();
            return overlay.querySelector(".mathtype-overlay-editor");
        }

        function getOverlayContext() {
            const overlay = ensureOverlay();
            return overlay.querySelector(".mathtype-overlay-context");
        }

        function resetOverlayContext() {
            const overlay = getOverlay();
            const contextNode = getOverlayContext();
            const overlayBody = overlay ? overlay.querySelector(".mathtype-overlay-body") : null;
            if (!contextNode || !overlayBody) {
                return;
            }

            overlayBody.insertBefore(contextNode, getOverlayEditorHost());
        }

        function placeOverlayContext(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            const contextNode = getOverlayContext();
            if (!editorRoot || !contextNode) {
                return;
            }

            const formulaDisplayWrapper = editorRoot.querySelector(".wrs_formulaDisplayWrapper");
            if (formulaDisplayWrapper && formulaDisplayWrapper.parentNode) {
                formulaDisplayWrapper.parentNode.insertBefore(contextNode, formulaDisplayWrapper);
                return;
            }

            const focusElementContainer = editorRoot.querySelector(".wrs_focusElementContainer");
            if (focusElementContainer && focusElementContainer.parentNode) {
                focusElementContainer.parentNode.insertBefore(contextNode, focusElementContainer);
                return;
            }

            const editorContainer = editorRoot.querySelector(".wrs_editorContainer");
            if (editorContainer && editorContainer.parentNode) {
                editorContainer.parentNode.insertBefore(contextNode, editorContainer);
                return;
            }

            editorRoot.appendChild(contextNode);
        }

        function getOverlayTabList(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            if (!editorRoot) {
                return null;
            }

            return editorRoot.querySelector(".wrs_header[role=\"tablist\"]") || editorRoot.querySelector("[role=\"tablist\"]");
        }

        // Every pad type has its own toolbar, so each one needs its own pair of buttons with their handlers
        function createTabScrollButton(direction) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `mathtype-overlay-tabscroll-button mathtype-overlay-tabscroll-button-${direction}`;
            button.setAttribute("aria-label", `Scroll tabs ${direction}`);
            button.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                scrollTabScroller(null, direction);
            });
            return button;
        }

        function ensureOverlayTabScroller(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            const tabList = getOverlayTabList(editorRoot);
            if (!editorRoot || !tabList || !tabList.parentNode) {
                return null;
            }

            let scroller = editorRoot.querySelector(".mathtype-overlay-tabscroll");
            if (scroller && scroller.contains(tabList)) {
                return scroller;
            }

            let tabStrip = editorRoot.querySelector(".mathtype-overlay-tabstrip");
            if (!tabStrip) {
                tabStrip = document.createElement("div");
                tabStrip.className = "mathtype-overlay-tabstrip";
            }

            const scrollLeftButton = getOverlayTabScrollButton(editorRoot, "left") || createTabScrollButton("left");
            const scrollRightButton = getOverlayTabScrollButton(editorRoot, "right") || createTabScrollButton("right");

            scroller = document.createElement("div");
            scroller.className = "mathtype-overlay-tabscroll";
            scroller.tabIndex = -1;
            scroller.addEventListener("scroll", () => syncOverlayTabScrollerState());
            tabList.parentNode.insertBefore(tabStrip, tabList);
            tabStrip.appendChild(scrollLeftButton);
            tabStrip.appendChild(scroller);
            tabStrip.appendChild(scrollRightButton);
            scroller.appendChild(tabList);
            return scroller;
        }

        function getOverlayTabScrollButton(rootElement, direction) {
            const editorRoot = rootElement || getOverlayEditorHost();
            if (!editorRoot) {
                return null;
            }

            return editorRoot.querySelector(
                direction === "left"
                    ? ".mathtype-overlay-tabscroll-button-left"
                    : ".mathtype-overlay-tabscroll-button-right"
            );
        }

        function syncOverlayTabScrollerState(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            const tabScroller = ensureOverlayTabScroller(editorRoot);
            if (!editorRoot || !tabScroller) {
                return;
            }

            const maxScrollLeft = Math.max(0, tabScroller.scrollWidth - tabScroller.clientWidth);
            const scrollLeft = Math.ceil(tabScroller.scrollLeft);
            const hasOverflowLeft = scrollLeft > TAB_OVERFLOW_TOLERANCE;
            const hasOverflowRight = maxScrollLeft - scrollLeft > TAB_OVERFLOW_TOLERANCE;
            const leftButton = getOverlayTabScrollButton(editorRoot, "left");
            const rightButton = getOverlayTabScrollButton(editorRoot, "right");
            const focusedButton = [leftButton, rightButton].find((button) => button && button === document.activeElement);

            if (leftButton) {
                leftButton.disabled = !hasOverflowLeft;
                leftButton.hidden = !hasOverflowLeft;
            }

            if (rightButton) {
                rightButton.disabled = !hasOverflowRight;
                rightButton.hidden = !hasOverflowRight;
            }

            // A button that scrolled the tabs to the end disappears; keep the focus on the remaining one
            if (focusedButton && focusedButton.hidden) {
                const otherButton = focusedButton === leftButton ? rightButton : leftButton;
                if (otherButton && !otherButton.hidden) {
                    otherButton.focus();
                }
            }
        }

        function scrollTabScroller(rootElement, direction) {
            const editorRoot = rootElement || getOverlayEditorHost();
            const tabList = getOverlayTabList(editorRoot);
            const tabScroller = ensureOverlayTabScroller(editorRoot);
            if (!editorRoot || !tabList || !tabScroller) {
                return;
            }

            // The contextual tab is hidden and has no position, so it must not be picked as a scroll target
            const tabs = Array.from(tabList.querySelectorAll('button[role="tab"], .wrs_textTab'))
                .filter((tab) => tab.style.display !== "none");
            if (!tabs.length) {
                return;
            }

            // The scroll buttons lie over the ends of the tab list, so a tab under a button counts as hidden
            const edgePadding = TAB_SCROLL_BUTTON_RESERVE;
            const maxScrollLeft = Math.max(0, tabScroller.scrollWidth - tabScroller.clientWidth);
            const scrollerLeft = tabScroller.scrollLeft;
            const scrollerRight = scrollerLeft + tabScroller.clientWidth;
            let targetScrollLeft = scrollerLeft;

            if (direction === "left") {
                const previousHiddenTab = [...tabs].reverse().find((tab) => {
                    const tabLeft = tab.offsetLeft - tabList.offsetLeft;
                    return tabLeft < scrollerLeft + edgePadding - TAB_OVERFLOW_TOLERANCE;
                });

                if (previousHiddenTab) {
                    const tabLeft = previousHiddenTab.offsetLeft - tabList.offsetLeft;
                    targetScrollLeft = Math.max(0, tabLeft - edgePadding);
                } else {
                    targetScrollLeft = Math.max(0, scrollerLeft - (tabScroller.clientWidth * 0.8));
                }
            } else {
                const nextHiddenTab = tabs.find((tab) => {
                    const tabRight = (tab.offsetLeft - tabList.offsetLeft) + tab.offsetWidth;
                    return tabRight > scrollerRight - edgePadding + TAB_OVERFLOW_TOLERANCE;
                });

                if (nextHiddenTab) {
                    const tabRight = (nextHiddenTab.offsetLeft - tabList.offsetLeft) + nextHiddenTab.offsetWidth;
                    targetScrollLeft = Math.min(maxScrollLeft, tabRight - tabScroller.clientWidth + edgePadding);
                } else {
                    targetScrollLeft = Math.min(maxScrollLeft, scrollerLeft + (tabScroller.clientWidth * 0.8));
                }
            }

            tabScroller.scrollLeft = Math.round(targetScrollLeft);
            syncOverlayTabScrollerState(editorRoot);
        }

        function scrollActiveTabIntoView(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            const tabList = getOverlayTabList(editorRoot);
            const tabScroller = ensureOverlayTabScroller(editorRoot);
            if (!editorRoot || !tabList || !tabScroller) {
                return;
            }

            const activeTab = editorRoot.querySelector(
                '.wrs_textTab.wrs_selected, button[role="tab"].wrs_selected, button[role="tab"][aria-selected="true"]'
            );

            if (!activeTab) {
                return;
            }

            const edgePadding = TAB_SCROLL_BUTTON_RESERVE;
            const scrollerLeft = tabScroller.scrollLeft;
            const scrollerRight = scrollerLeft + tabScroller.clientWidth;
            const tabLeft = activeTab.offsetLeft - tabList.offsetLeft;
            const tabRight = tabLeft + activeTab.offsetWidth;
            const maxScrollLeft = Math.max(0, tabScroller.scrollWidth - tabScroller.clientWidth);

            if (tabLeft < scrollerLeft + edgePadding) {
                tabScroller.scrollLeft = Math.max(0, tabLeft - edgePadding);
            } else if (tabRight > scrollerRight - edgePadding) {
                tabScroller.scrollLeft = Math.min(maxScrollLeft, tabRight - tabScroller.clientWidth + edgePadding);
            }

            syncOverlayTabScrollerState(editorRoot);
        }

        function syncOverlayTabFocus(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            if (!editorRoot) {
                return;
            }

            const tabs = Array.from(editorRoot.querySelectorAll('button[role="tab"], .wrs_textTab'));
            if (!tabs.length) {
                return;
            }

            const selectedTab = tabs.find((tab) =>
                tab.classList.contains("wrs_selected") || tab.getAttribute("aria-selected") === "true"
            ) || tabs[0];

            tabs.forEach((tab) => {
                tab.tabIndex = tab === selectedTab ? 0 : -1;
            });

            scrollActiveTabIntoView(editorRoot);
        }

        function hideContextualTabs(rootElement) {
            const editorRoot = rootElement || getOverlayEditorHost();
            if (!editorRoot) {
                return;
            }

            const tabs = Array.from(editorRoot.querySelectorAll('button[role="tab"], .wrs_textTab'));
            let hiddenSelectedTab = null;

            tabs.forEach((tab) => {
                if (!tab.classList.contains("wrs_context")) {
                    return;
                }

                if (tab.classList.contains("wrs_selected") || tab.getAttribute("aria-selected") === "true") {
                    hiddenSelectedTab = tab;
                }

                tab.style.display = "none";
                tab.tabIndex = -1;
                tab.setAttribute("aria-hidden", "true");

                const controlsId = tab.getAttribute("aria-controls");
                const controlledPanel = controlsId ? editorRoot.querySelector(`#${controlsId}`) : null;
                if (controlledPanel) {
                    controlledPanel.style.display = "none";
                    controlledPanel.setAttribute("aria-hidden", "true");
                }
            });

            if (hiddenSelectedTab) {
                const fallbackTab = tabs.find((tab) => tab.style.display !== "none");
                if (fallbackTab && typeof fallbackTab.click === "function") {
                    fallbackTab.click();
                }
            }
        }

        function getExpandedShowMoreButton() {
            return getOverlayEditorHost().querySelector(`.${SHOW_MORE_CLASS}[aria-expanded="true"]`);
        }

        // Turns the 7px-wide WIRIS expand arrows into "Show more" buttons under their sections.
        // The buttons stay the WIRIS ones, so the popup, its placement and the keyboard handling are still WIRIS's.
        function decorateShowMoreButtons(editorRoot) {
            // The chemistry pad uses the stock WIRIS toolbar, whose sections are too narrow for a text button
            const isSupported = state.activeEditorType !== "mt_chem";

            // Every pad type is shown in the same host, and the popup is styled through this class
            editorRoot.classList.toggle("mathtype-overlay-showmore-enabled", isSupported);
            if (!isSupported) {
                return;
            }

            Array.from(editorRoot.querySelectorAll(".wrs_toolbar .wrs_expandButton")).forEach((button) => {
                button.parentElement.classList.add("mathtype-overlay-showmore-panel");
                button.classList.add(SHOW_MORE_CLASS);
                button.removeAttribute("title");
                button.textContent = "Show more";
            });
        }

        function collapseShowMore(button) {
            // WIRIS has no API for this: it closes the popup and refocuses the button on mousedown
            button.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
            state.showMoreButtonToCollapse = null;
        }

        function handleShowMoreEscape(event) {
            const expandedButton = event.key === "Escape" ? getExpandedShowMoreButton() : null;
            if (!expandedButton) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            collapseShowMore(expandedButton);
        }

        // WIRIS closes the popup on mousedown and reopens it on the click that follows,
        // so that click has to be dropped for the button to work as a toggle
        function bindShowMoreToggle(rootElement) {
            if (rootElement.dataset.webassignShowMoreBound === "true") {
                return;
            }

            rootElement.addEventListener("mousedown", (event) => {
                state.showMoreButtonToCollapse = event.target.closest(`.${SHOW_MORE_CLASS}[aria-expanded="true"]`);
            }, true);
            rootElement.addEventListener("keydown", () => {
                state.showMoreButtonToCollapse = null;
            }, true);
            rootElement.addEventListener("click", (event) => {
                if (state.showMoreButtonToCollapse && event.target === state.showMoreButtonToCollapse) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                state.showMoreButtonToCollapse = null;
            }, true);

            rootElement.dataset.webassignShowMoreBound = "true";
        }

        function copyPreviewContext(editorDiv, staging) {
            if (!editorDiv || !staging) {
                return;
            }

            const computed = window.getComputedStyle(editorDiv);
            staging.style.font = computed.font;
            staging.style.fontSize = computed.fontSize;
            staging.style.fontFamily = computed.fontFamily;
            staging.style.fontWeight = computed.fontWeight;
            staging.style.lineHeight = computed.lineHeight;
            staging.style.letterSpacing = computed.letterSpacing;
            staging.style.whiteSpace = computed.whiteSpace;
            staging.style.wordBreak = computed.wordBreak;
        }

        function getPreviewStaging(boxId, editorDiv) {
            const stagingId = `mathtype-preview-staging-${boxId}`;
            let staging = document.getElementById(stagingId);
            if (staging) {
                copyPreviewContext(editorDiv, staging);
                return staging;
            }

            staging = document.createElement("div");
            staging.id = stagingId;
            staging.className = "mathtype-preview-staging";
            copyPreviewContext(editorDiv, staging);
            document.body.appendChild(staging);
            return staging;
        }

        function getOverlayTrigger(boxId) {
            const editorDiv = getEditorDiv(boxId);
            const wrapper = editorDiv ? editorDiv.parentElement : null;
            return wrapper ? wrapper.querySelector(`.${BUTTON_CLASS}[data-boxid="${boxId}"]`) : null;
        }

        function ensureInlineUI(boxId) {
            const editorDiv = getEditorDiv(boxId);
            if (!editorDiv) {
                return {};
            }

            const isDisabled = editorDiv.classList.contains("mtDisabled") || editorDiv.hasAttribute("disabled");

            let button = getOverlayTrigger(boxId);
            if (!button) {
                const wrapper = editorDiv.parentElement;
                if (!wrapper) {
                    return { editorDiv };
                }
                button = document.createElement("button");
                button.className = BUTTON_CLASS;
                button.dataset.boxid = boxId;
                wrapper.appendChild(button);
            }

            button.type = "button";
            button.classList.add(BUTTON_CLASS);
            button.setAttribute("aria-label", "Open full math pad");
            button.setAttribute("aria-haspopup", "dialog");
            button.setAttribute("aria-controls", OVERLAY_ID);
            button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") || "false");
            button.dataset.boxid = boxId;
            button.disabled = isDisabled;
            button.setAttribute("aria-disabled", isDisabled ? "true" : "false");

            if (!button.querySelector(".mathtype-overlay-trigger-icon")) {
                button.innerHTML = "<span class=\"mathtype-overlay-trigger-icon\" aria-hidden=\"true\"></span>";
            }

            if (button.dataset.overlayTriggerBound !== "true") {
                button.addEventListener("click", (event) => {
                    if (button.disabled) {
                        event.preventDefault();
                        event.stopPropagation();
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    open(boxId);
                });
                button.dataset.overlayTriggerBound = "true";
            }

            editorDiv.dataset.overlayBoxId = boxId;
            return { editorDiv, button };
        }

        function isTriggerElement(node) {
            return Boolean(node && node.closest && node.closest(`.${BUTTON_CLASS}`));
        }

        function isOverlayActive() {
            return Boolean(state.activeBoxId);
        }

        function contains(node) {
            const overlay = getOverlay();
            return Boolean(overlay && overlay.classList.contains("is-open") && node && overlay.contains(node));
        }

        function isInlineEditorOpen(boxId) {
            const editorDiv = getEditorDiv(boxId);
            return Boolean(editorDiv && editorDiv.classList.contains("mtOpen"));
        }

        function doesBoxOwnLiveEditor(boxId) {
            if (!boxId) {
                return false;
            }

            if (state.activeBoxId) {
                return state.activeBoxId === boxId;
            }

            return isInlineEditorOpen(boxId);
        }

        function getCurrentMathML(boxId) {
            const editorType = getEditorType(boxId);
            if (!editorType) {
                return "";
            }

            if (doesBoxOwnLiveEditor(boxId)) {
                const liveMathML = window.mathTypeEditor[editorType].getMathML();
                return liveMathML && liveMathML !== window.mathTypeEditor.MATHTYPE_DEFAULT
                    ? liveMathML
                    : "";
            }

            const answerField = getAnswerField(boxId);
            return answerField ? answerField.value : "";
        }

        function syncAnswerValue(boxId) {
            const answerField = getAnswerField(boxId);
            if (!answerField) {
                return "";
            }

            const mathML = getCurrentMathML(boxId);
            if (mathML) {
                answerField.value = mathML;
            }
            else {
                answerField.value = "";
            }
   
            warnInvalidMathTypeCharacters(boxId);
            
            return answerField.value;
        }

        function getInlineButtonReserve(editorDiv) {
            if (!editorDiv) {
                return BUTTON_WIDTH;
            }

            const button = editorDiv.querySelector(`.${BUTTON_CLASS}`);
            if (!button) {
                return BUTTON_WIDTH;
            }

            const buttonStyle = window.getComputedStyle(button);
            const rightOffset = parseFloat(buttonStyle.right) || 0;
            return Math.ceil(button.getBoundingClientRect().width + rightOffset + BUTTON_GAP);
        }

        function getRenderedMathNode(answerNode) {
            if (!answerNode) {
                return null;
            }

            return answerNode.querySelector(".mjx-chtml")
                || answerNode.querySelector(".MathJax")
                || answerNode.querySelector("svg")
                || answerNode.firstElementChild
                || answerNode;
        }

        function getLiveInlineMetrics(editorDiv) {
            if (!editorDiv) {
                return null;
            }

            const candidates = [
                editorDiv.querySelector(".wrs_focusElement"),
                editorDiv.querySelector(".wrs_focusElementContainer"),
                editorDiv.querySelector(".wrs_formulaDisplay"),
                editorDiv.querySelector(".wrs_editor"),
            ].filter(Boolean);

            if (!candidates.length) {
                return null;
            }

            const overflowNode = editorDiv.querySelector(".wrs_formulaDisplay")
                || editorDiv.querySelector(".wrs_focusElementContainer")
                || candidates[0];

            let contentWidth = 0;
            let contentHeight = 0;
            let viewportWidth = 0;
            let viewportHeight = 0;

            candidates.forEach((node) => {
                contentWidth = Math.max(contentWidth, Math.ceil(node.scrollWidth || 0), Math.ceil(node.getBoundingClientRect().width || 0));
                contentHeight = Math.max(contentHeight, Math.ceil(node.scrollHeight || 0), Math.ceil(node.getBoundingClientRect().height || 0));
                viewportWidth = Math.max(viewportWidth, Math.ceil(node.clientWidth || 0));
                viewportHeight = Math.max(viewportHeight, Math.ceil(node.clientHeight || 0));
            });

            return {
                contentHeight,
                overflowHeight: Math.max(
                    0,
                    Math.ceil((overflowNode.scrollHeight || 0) - (overflowNode.clientHeight || 0))
                ),
                viewportWidth,
                viewportHeight,
            };
        }

        function queuePreview(boxId, options = {}) {
            clearTimeout(state.previewTimers[boxId]);
            state.previewTimers[boxId] = setTimeout(() => {
                renderPreview(boxId, options);
            }, 100);
        }

        function renderPreviewWhenMathJaxReady(boxId, options = {}) {
            if (typeof MathJax !== "undefined" && MathJax.Hub) {
                MathJax.Hub.Queue(() => {
                    renderPreview(boxId, options);
                });
                return;
            }

            clearTimeout(state.previewTimers[boxId]);
            state.previewTimers[boxId] = setTimeout(() => {
                renderPreviewWhenMathJaxReady(boxId, options);
            }, 25);
        }

        function renderPreview(boxId, options = {}) {
            const { editorDiv, button } = ensureInlineUI(boxId);
            const answerField = getAnswerField(boxId);
            if (!editorDiv || !answerField) {
                return;
            }

            const preservedWidth = options.preserveWidth ? Math.ceil(options.preserveWidth) : 0;

            const previewVersion = (state.previewVersions[boxId] || 0) + 1;
            state.previewVersions[boxId] = previewVersion;
            const staging = getPreviewStaging(boxId, editorDiv);
            staging.className = "mathtype-preview-staging";
            staging.style.width = "auto";
            staging.style.maxWidth = "none";
            staging.style.display = "inline-block";

            const answermathml = (window.mathTypeEditor)? window.mathTypeEditor.cleanMathMLForMathJax(answerField.value) : answerField.value;
            staging.innerHTML = `<span class="mtAnswer">${answermathml || ""}</span>`;

            const applyMeasuredPreview = () => {
                if (state.previewVersions[boxId] !== previewVersion) {
                    return;
                }

                const isInlineEditorOpen = editorDiv.classList.contains("mtOpen");

                const answerNode = staging.querySelector(".mtAnswer");
                const renderedNode = getRenderedMathNode(answerNode);
                const measuredWidth = renderedNode ? Math.ceil(renderedNode.getBoundingClientRect().width) : 0;
                let measuredHeight = 0;
                if (answerNode) {
                    const range = document.createRange();
                    range.selectNodeContents(answerNode);
                    const rangeRect = range.getBoundingClientRect();
                    measuredHeight = Math.max(
                        Math.ceil(answerNode.scrollHeight || 0) + 8,
                        Math.ceil(answerNode.getBoundingClientRect().height || 0) + 8,
                        Math.ceil(rangeRect.height || 0) + 8
                    );
                }
                const buttonReserve = getInlineButtonReserve(editorDiv);
                const width = Math.min(
                    MAX_INLINE_WIDTH,
                    Math.max(DEFAULT_WIDTH, measuredWidth + PREVIEW_LEFT_INSET + buttonReserve)
                );

                const height = Math.max(
                    DEFAULT_HEIGHT,
                    measuredHeight + WRAPPED_PREVIEW_HEIGHT_PADDING
                );
                const appliedWidth = Math.max(width, preservedWidth);
                const appliedHeight = height;
                if (options.resize !== false && !isInlineEditorOpen) {
                    editorDiv.style.width = `${appliedWidth}px`;
                    editorDiv.style.height = `${appliedHeight}px`;
                    editorDiv.style.minHeight = `${appliedHeight}px`;
                }

                if (options.updateVisible !== false && !isInlineEditorOpen) {
                    const renderVersion = String(previewVersion);
                    editorDiv.dataset.mathtypeRenderVersion = renderVersion;
                    editorDiv.classList.add("mathtype-rendering");
                    editorDiv.innerHTML = `<span class="mtAnswer">${answermathml || ""}</span>`;
                    reparseMathJaxForMathtypeAnswer(editorDiv.id, "Typeset", () => {
                        if (editorDiv.dataset.mathtypeRenderVersion !== renderVersion) {
                            return;
                        }
                        normalizeMathTypePreviewAccessibility(editorDiv);
                        editorDiv.classList.remove("mathtype-rendering");
                        delete editorDiv.dataset.mathtypeRenderVersion;
                    });
                }
            };

            reparseMathJaxForMathtypeAnswer(staging.id, "Typeset", () => {
                if (state.previewVersions[boxId] !== previewVersion) {
                    return;
                }

                const answerNode = staging.querySelector(".mtAnswer");
                const renderedNode = getRenderedMathNode(answerNode);
                const naturalWidth = renderedNode ? Math.ceil(renderedNode.getBoundingClientRect().width) + PREVIEW_LEFT_INSET : 0;
                const buttonReserve = getInlineButtonReserve(editorDiv);
                const maxContentWidth = Math.max(DEFAULT_WIDTH, MAX_INLINE_WIDTH - buttonReserve);


                if (naturalWidth > maxContentWidth) {
                    staging.style.width = `${maxContentWidth}px`;
                    staging.style.maxWidth = `${maxContentWidth}px`;
                    reparseMathJaxForMathtypeAnswer(staging.id, "Typeset", applyMeasuredPreview);
                    return;
                }

                applyMeasuredPreview();
            });
        }

        function adjustInlineBox(boxId, source = "unknown") {
            const { editorDiv } = ensureInlineUI(boxId);
            const editorType = getEditorType(boxId);
            if (!editorDiv || !editorType) {
                return;
            }

            let width = DEFAULT_WIDTH;
            let height = DEFAULT_HEIGHT;

            try {
                const mathML = getCurrentMathML(boxId);
                if (mathML && mathML !== window.mathTypeEditor.MATHTYPE_DEFAULT) {
                    const buttonReserve = getInlineButtonReserve(editorDiv);
                    const preferredWidth = Math.ceil(window.mathTypeEditor[editorType].getPreferredWidth()) + buttonReserve;
                    const preferredHeight = Math.ceil(window.mathTypeEditor[editorType].getPreferredHeight());
                    const liveMetrics = getLiveInlineMetrics(editorDiv);
                    width = Math.min(
                        MAX_INLINE_WIDTH,
                        Math.max(
                            DEFAULT_WIDTH,
                            preferredWidth
                        )
                    );
                    height = Math.max(DEFAULT_HEIGHT, preferredHeight);

                    if (
                        source !== "stabilized-open"
                        && liveMetrics
                        && liveMetrics.contentHeight > liveMetrics.viewportHeight + 1
                    ) {
                        height = Math.max(
                            height,
                            preferredHeight + liveMetrics.overflowHeight + WRAPPED_INLINE_HEIGHT_PADDING
                        );
                    }
                }
            }
            catch (error) {
                width = DEFAULT_WIDTH;
                height = DEFAULT_HEIGHT;
            }

            editorDiv.style.width = `${width}px`;
            editorDiv.style.height = `${height}px`;
            editorDiv.style.minHeight = `${height}px`;
        }

        function lockInlineBox(boxId) {
            const editorDiv = getEditorDiv(boxId);
            if (!editorDiv) {
                return;
            }

            const rect = editorDiv.getBoundingClientRect();
            if (rect.width) {
                editorDiv.style.width = `${Math.ceil(rect.width)}px`;
            }
            if (rect.height) {
                editorDiv.style.height = `${Math.ceil(rect.height)}px`;
                editorDiv.style.minHeight = `${Math.ceil(rect.height)}px`;
            }
        }

        function clearViewportOverrides(rootElement) {
            if (!rootElement) {
                return;
            }

            if (rootElement.id && rootElement.id.indexOf("editable-math-") === 0) {
                return;
            }

            rootElement.style.width = "";
            rootElement.style.maxWidth = "";
            rootElement.style.minWidth = "";
            rootElement.style.height = "";
            rootElement.style.maxHeight = "";
            rootElement.style.minHeight = "";
        }

        function scheduleSync(boxId, options = {}) {
            clearTimeout(state.syncTimers[boxId]);
            state.syncTimers[boxId] = setTimeout(() => {
                syncAnswerValue(boxId);
                if (options.renderPreview) {
                    queuePreview(boxId, {
                        resize: options.resizePreview,
                        updateVisible: options.updateVisiblePreview,
                    });
                }
                
                if (options.adjustInline) {
                    adjustInlineBox(boxId, options.source || `scheduleSync:${options.mode || "inline"}`);
                }
            }, 0);
        }

        function bindLiveSync(boxId, rootElement, options = {}) {
            const focusElement = getMathTypeFocusElement(rootElement);
            if (!focusElement) {
                return;
            }

            const bindingKey = `${boxId}-${options.mode || "inline"}`;
            if (focusElement.dataset.webassignMirrorBinding === bindingKey) {
                return;
            }

            if (focusElement.__webassignMirrorHandlers) {
                Object.entries(focusElement.__webassignMirrorHandlers).forEach(([eventName, handler]) => {
                    focusElement.removeEventListener(eventName, handler);
                });
            }

            const syncHandler = (eventType = "unknown") => {
                scheduleSync(boxId, {
                    source: `sync:${options.mode || "inline"}:${eventType}`,
                    renderPreview: options.renderPreview,
                    resizePreview: options.resizePreview,
                    updateVisiblePreview: options.updateVisiblePreview,
                    adjustInline: options.adjustInline,
                    mode: options.mode,
                });
            };

            const mirrorHandlers = {};
            ["input", "keyup", "paste"].forEach((eventName) => {
                const handler = () => syncHandler(eventName);
                mirrorHandlers[eventName] = handler;
                focusElement.addEventListener(eventName, handler);
            });

            //Handle clicks
            if (rootElement.__webassignClickSyncHandler) {
                rootElement.removeEventListener("click", rootElement.__webassignClickSyncHandler);
            }

            //Watch for button presses and also resize if clicking a button
            const clickSyncHandler = (event) => {
                const clickArea = event.target.closest(".wrs_button");
                if (!clickArea || !rootElement.contains(clickArea)) {
                    return;
                }
                setTimeout(syncHandler, 0);
            };
            rootElement.addEventListener("click", clickSyncHandler);

            attachMathTypeAutoFormatListeners(boxId, rootElement);
            focusElement.__webassignMirrorHandlers = mirrorHandlers;
            focusElement.dataset.webassignMirrorBinding = bindingKey;
            rootElement.__webassignClickSyncHandler = clickSyncHandler;
        }

        function initializeBox(boxId) {
            ensureInlineUI(boxId);
            renderPreviewWhenMathJaxReady(boxId);
        }

        function resetSharedEditor(editorType, hostElement) {
            return new Promise((resolve) => {
                if (!editorType) {
                    resolve();
                    return;
                }

                if (hostElement) {
                    clearViewportOverrides(hostElement);
                    window.mathTypeEditor[editorType].insertInto(hostElement);
                }

                window.mathTypeEditor[editorType].setToolbarHidden(false);
                setMathTypeValue(editorType, window.mathTypeEditor.MATHTYPE_DEFAULT, resolve);
            });
        }

        async function open(boxId) {
            if (state.activeBoxId && state.activeBoxId !== boxId) {
                await close({ restoreFocus: false });
            }

            const activeInlineMathType = document.querySelector(".mathtype.mtOpen");
            if (activeInlineMathType && typeof destroyMathTypeEditor === "function") {
                await new Promise((resolve) => {
                    destroyMathTypeEditor(activeInlineMathType.dataset.boxid, resolve);
                });
            }

            const overlay = ensureOverlay();
            const overlayEditorHost = getOverlayEditorHost();
            const editorType = getEditorType(boxId);
            const { editorDiv, button } = ensureInlineUI(boxId);
            if (!overlayEditorHost || !editorType || !editorDiv) {
                return;
            }

            const currentValue = syncAnswerValue(boxId) || window.mathTypeEditor.MATHTYPE_DEFAULT;
            state.lastFocusedElement = button || document.activeElement;

            overlay.dataset.boxid = boxId;
            overlay.classList.add("is-open");
            overlay.setAttribute("aria-hidden", "false");
            syncOverlayFootprint();
            if (button) {
                button.setAttribute("aria-expanded", "true");
            }

            editorDiv.classList.remove("mtOpen");
            editorDiv.classList.add("mtClosed");
            renderPreview(boxId);

            state.activeBoxId = boxId;
            state.activeEditorType = editorType;

            setMathTypeValue(editorType, currentValue, () => {
                overlayEditorHost.innerHTML = "";
                window.mathTypeEditor[editorType].insertInto(overlayEditorHost);
                clearViewportOverrides(overlayEditorHost);
                window.mathTypeEditor[editorType].setToolbarHidden(false);
                placeOverlayContext(overlayEditorHost);
                bindLiveSync(boxId, overlayEditorHost, {
                    mode: "overlay",
                    renderPreview: true,
                    resizePreview: true,
                    updateVisiblePreview: true,
                    adjustInline: false,
                });
                hideContextualTabs(overlayEditorHost);
                decorateShowMoreButtons(overlayEditorHost);
                bindShowMoreToggle(overlayEditorHost);
                syncOverlayTabFocus(overlayEditorHost);
                if (overlayEditorHost.dataset.webassignTabSyncBound !== "true") {
                    const syncTabFocus = () => {
                        hideContextualTabs(overlayEditorHost);
                        // WIRIS builds its toolbar asynchronously and may still replace the panels after the pad has opened
                        decorateShowMoreButtons(overlayEditorHost);
                        setTimeout(() => syncOverlayTabFocus(overlayEditorHost), 0);
                    };
                    overlayEditorHost.addEventListener("click", syncTabFocus);
                    overlayEditorHost.addEventListener("keyup", syncTabFocus);
                    overlayEditorHost.dataset.webassignTabSyncBound = "true";
                }
                syncOverlayTabScrollerState(overlayEditorHost);

                const shell = overlay.querySelector(".mathtype-overlay-shell");
                const focusElement = getMathTypeFocusElement(overlayEditorHost);
                if (focusElement) {
                    focusElement.focus();
                } else if (shell) {
                    shell.focus();
                }

                requestAnimationFrame(syncOverlayFootprint);
            });
        }

        async function close(options = {}) {
            const shouldRestoreFocus = options.restoreFocus !== false;
            if (!state.activeBoxId || !state.activeEditorType) {
                return;
            }

            const boxId = state.activeBoxId;
            const editorType = state.activeEditorType;
            const overlay = getOverlay();
            const overlayEditorHost = getOverlayEditorHost();
            const trigger = getOverlayTrigger(boxId);
            const expandedShowMore = getExpandedShowMoreButton();

            if (expandedShowMore) {
                collapseShowMore(expandedShowMore);
            }

            syncAnswerValue(boxId);
            renderPreview(boxId);
            resetOverlayContext();

            if (overlayEditorHost) {
                const extraDiv = getHiddenWrapper(editorType);
                await resetSharedEditor(editorType, extraDiv || overlayEditorHost);
                overlayEditorHost.innerHTML = "";
            }

            if (overlay) {
                overlay.classList.remove("is-open");
                overlay.setAttribute("aria-hidden", "true");
            }
            syncOverlayFootprint();
            if (trigger) {
                trigger.setAttribute("aria-expanded", "false");
            }

            state.activeBoxId = null;
            state.activeEditorType = null;
            if (shouldRestoreFocus) {
                if (state.lastFocusedElement && state.lastFocusedElement.focus) {
                    state.lastFocusedElement.focus();
                } else if (trigger) {
                    trigger.focus();
                }
            }
            state.lastFocusedElement = null;
        }

        return {
            adjustInlineBox,
            bindLiveSync,
            clearViewportOverrides,
            close,
            contains,
            ensureInlineUI,
            initializeBox,
            isActive: isOverlayActive,
            isTriggerElement,
            hideContextualTabs,
            lockInlineBox,
            open,
            queuePreview,
            renderPreview,
            syncAnswerValue,
        };
    })();
}
