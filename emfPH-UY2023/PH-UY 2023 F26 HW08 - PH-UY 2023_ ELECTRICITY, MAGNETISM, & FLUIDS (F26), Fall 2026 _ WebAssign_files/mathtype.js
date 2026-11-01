if(!window.mathTypeEditor) {
    function getClosedMathTypeBox(element) {
        const candidate = element instanceof Element
            ? element.closest('[id^="editable-math-"].mathtype.mtClosed')
            : null;

        return candidate
            && candidate.id
            && !candidate.classList.contains("mtDisabled")
            && candidate.dataset.boxid
            ? candidate
            : null;
    }

    window.mathTypeEditor = {
        MATHTYPE_DEFAULT: '<math xmlns="http://www.w3.org/1998/Math/MathML"/>',
        // If you update the allowlist, please also update %mathtype_lookup in 
        // clump/question_service/lib/QuestionService/Model/Pad.pm 
        MATHTYPE_ALLOWLIST: [
            'xA0', // space
            'x2009', // space
            'xB7', // middot
            'x22C5', // *
            'x2260', //  !=
            'x2264', // <=
            'x2265', // >=
            'xF7', // ÷
            'x2229', //  intersect 
            'x2205', //  empty
            'x222A', // union
            'x221E', //  infinity 
            'x3C0', // pi
            'xB0', // deg 
            'x210F', // hbar
            'x2130', // scriptE
            'x2113', // scriptL
            'x1D5F6', // unitvector(i)
            'x1D5F7', // unitvector(j)
            'x1D5F8', // unitvector(k)
            'x2192', // right arrow
            'x21C0', // right harpoon above
            'x21CC', // equilibrium arrow
            'x2190', // reverse arrow

            //Greek
            'x3B1', // alpha
            'x3B2', // beta
            'x3B3', // gamma
            'x3B4', // delta
            'x3B5', // epsilon
            'x3B6', // zeta
            'x3B7', // eta
            'x3B8', // theta
            'x3B9', // iota
            'x3BA', // kappa
            'x3BB', // lambda
            'x3BC', // mu
            'x3BD', // nu
            'x3BE', // xi
            'x3BF', // omicron
            'x3C1', // rho
            'x3C3', // sigma
            'x3C4', // tau
            'x3C5', // upsilon
            'x3C6', // phi
            'x3D5', // phi
            'x3C7', // chi
            'x3C8', // psi
            'x3C9', // omega
            'x391', // Alpha
            'x392', // Beta
            'x393', // Gamma
            'x394', // Delta
            'x395', // Epsilon
            'x396', // Zeta
            'x397', // Eta
            'x398', // Theta
            'x399', // Iota
            'x39A', // Kappa
            'x39B', // Lambda
            'x39C', // Mu
            'x39D', // Nu
            'x39E', // Xi
            'x39F', // Omicron
            'x3A0', // Pi
            'x3A1', // Rho
            'x3A3', // Sigma
            'x3A4', // Tau
            'x3A5', // Upsilon
            'x3A6', // Phi
            'x3A7', // Chi
            'x3A8', // Psi
            'x3A9', // Omega

            'x2206', // Increment/Delta
            'xB5', // Micro Sign/mu
            'x2211', // N-Ary Summation/Sigma
        ],
        cleanMathMLForMathJax: function(mathml) {
            //Function to prepare the mathml syntax for mathjax
            //avoiding syntax errors that cause mathjax to fail to parse

            // Mathjax does not like an empty square root followed by a line break
            // Regex looks for empty root followed by linebreak followed by an element that is NOT the end of the mathml,
            // if found inserts a space into the mathjax display between the square root and the linebreak
            mathml = mathml.replace(/(<msqrt\/>)(<mspace linebreak="newline"\/>)(?!\s*<\/math>)/g, "$1<mo>&#xA0;</mo>$2");
            return mathml;
        }
    };

    window.ensureMathTypeStagingHost = window.ensureMathTypeStagingHost || function(editorType) {
        const hostId = `mathtype-staging-${editorType}`;
        let host = document.getElementById(hostId);

        if (!host) {
            host = document.createElement("div");
            host.id = hostId;
            host.setAttribute("aria-hidden", "true");
            host.style.position = "absolute";
            host.style.left = "-99999px";
            host.style.top = "0";
            host.style.width = "1px";
            host.style.height = "1px";
            host.style.overflow = "hidden";
            document.body.appendChild(host);
        }

        return host;
    };

    function checkForInvalidMathTypeCharacters(mathML) {
        // Remove allowlisted characters before checking for html codes in the student response
        window.mathTypeEditor.MATHTYPE_ALLOWLIST.forEach(function(item) {
            const removeRegex = new RegExp(`&#${item};`, 'g');
            mathML = mathML.replace(removeRegex, '');
        });

        const hexCharsRegex = new RegExp('&#[^;]+;', 'g');
        const disallowedCharsRegex = new RegExp('\\$', 'g');
        const matches1 =  mathML.match(hexCharsRegex);
        const matches2 =  mathML.match(disallowedCharsRegex);
        if ((matches1 === null) && (matches2 === null)) {
            return 0;
        } else {
            const count1 = (matches1 === null) ? 0 : matches1.length;
            const count2 = (matches2 === null) ? 0 : matches2.length;
            return count1 + count2;
        }
    }


    function warnInvalidMathTypeCharacters(boxId) {
        let answerValueDiv = document.getElementById(boxId);
        let warning = document.getElementById(`mathtype-${boxId}-warning-wrapper`);
        let mathML = answerValueDiv.value;

        if (mathML != "" && mathML != window.mathTypeEditor.MATHTYPE_DEFAULT) {
            //If the student enters an invalid character, send a warning.
            const invalidCharacters = checkForInvalidMathTypeCharacters(mathML);
            if(invalidCharacters) {
                let span = document.createElement('span');
                span.className =  "mathtype-warning";

                let caution = document.createElement('img');
                caution.src = "/static/img/common/caution.svg";
                const cautionStyles = {
                    height: '25px',
                    width: '25px',
                    marginTop: '7.5px',
                    marginRight: '10px',
                    marginLeft: '10px',
                    float: 'left',
                };
                Object.assign(caution.style, cautionStyles);

                const characters = invalidCharacters == 1 ? "character" : "characters";
                let textSpan = document.createElement('span');
                textSpan.style.float = 'left';

                let bold = document.createElement('h3');
                bold.textContent = "Your answer includes " + invalidCharacters + " " + characters + " that can't be graded. "
                bold.style.margin = "0px";

                let p1 = document.createElement('span');
                p1.textContent = "Delete your recent changes and use the pad tools to finish your answer. ";

                let manualLink = document.createElement('a');
                manualLink.href = "https://help.cengage.com/webassign/student_guide/?t=unsupported_pad_chars";
                manualLink.target = "_new";
                manualLink.alt = "More information about unsupported characters";
                manualLink.textContent = "More information";
                p1.appendChild(manualLink);

                textSpan.append(bold);
                textSpan.append(p1);

                span.append(caution);
                span.append(textSpan);

                if(warning.childNodes.length > 0) {
                    warning.replaceChildren(span);
                }
                else {
                    warning.append(span);
                }
                return;
            } else {
                warning.textContent = "";
            }
        }
        else { warning.textContent = "" }
    }

    //Set listener to open/close MathType
    //We only want to add these once
    document.addEventListener("click", (event) => {
        checkForAndSaveNewMathTypeAnswer(() => {checkForMathTypeFocus(event.target)})
    });
    document.addEventListener("keyup", (e) => {
        checkForAndSaveNewMathTypeAnswer(() => {
            if( e.keyCode == 9 ) {
                checkForMathTypeFocus(document.activeElement, { openClosedEditor: false })
            }
        });
    });
    document.addEventListener("keydown", (event) => {
        if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
        }

        const currentFocus = event.target && event.target.nodeType === Node.TEXT_NODE ? event.target.parentElement : event.target;
        const isActivationKey = event.key === " " || event.key === "Spacebar" || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13;
        const closedMathTypeBox = getClosedMathTypeBox(currentFocus);
        if (!closedMathTypeBox || !isActivationKey) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        checkForMathTypeFocus(closedMathTypeBox);
    }, true);

    // Clicks inside an iframe do not propagate to document click handlers.
    // Use the window blur event to detect loss of focus and close MathType
    window.addEventListener("blur", () => {
        checkForAndDestroyMathTypeEditor(document.activeElement, () => {});
    });
}

function saveMathTypeClosedAccessibilityState(editorDiv) {
    if (!editorDiv.dataset.closedTabindex) {
        editorDiv.dataset.closedTabindex = editorDiv.getAttribute("tabindex") || "0";
    }
    if (!editorDiv.dataset.closedRole) {
        editorDiv.dataset.closedRole = editorDiv.getAttribute("role") || "button";
    }
    if (editorDiv.hasAttribute("aria-describedby")) {
        editorDiv.dataset.closedAriaDescribedby = editorDiv.getAttribute("aria-describedby");
    } else {
        delete editorDiv.dataset.closedAriaDescribedby;
    }
}

function setMathTypeOpenAccessibilityState(editorDiv) {
    saveMathTypeClosedAccessibilityState(editorDiv);
    editorDiv.setAttribute("tabindex", "-1");
    editorDiv.removeAttribute("role");
    editorDiv.removeAttribute("aria-expanded");
    editorDiv.removeAttribute("aria-describedby");
}

function setMathTypeClosedAccessibilityState(editorDiv) {
    editorDiv.setAttribute("tabindex", editorDiv.dataset.closedTabindex || "0");
    editorDiv.setAttribute("role", editorDiv.dataset.closedRole || "button");
    editorDiv.setAttribute("aria-expanded", "false");
    if (editorDiv.dataset.closedAriaDescribedby) {
        editorDiv.setAttribute("aria-describedby", editorDiv.dataset.closedAriaDescribedby);
    } else {
        editorDiv.removeAttribute("aria-describedby");
    }
}

async function setMathTypeValue(editorType, value, callback) {
    await new Promise((resolve) => {
        window.mathTypeEditor[editorType].setMathMLWithCallback(value, resolve);
    });
    callback();
}

function getActiveInlineMathTypeEditor() {
    return document.querySelector(".mathtype.mtOpen");
}

async function checkForAndSaveNewMathTypeAnswer(callback) {
    await new Promise (async (resolve) => {
        const currentFocus = document.activeElement;
        if (window.mathTypeOverlay && window.mathTypeOverlay.isActive()) {
            if (window.mathTypeOverlay.contains(currentFocus)) {
                window.mathTypeOverlay.syncAnswerValue(document.getElementById("mathtype-overlay").dataset.boxid);
                window.mathTypeOverlay.queuePreview(document.getElementById("mathtype-overlay").dataset.boxid);
            }
        } else {
            const activeMathType = getActiveInlineMathTypeEditor();
            if( activeMathType ) {
            if( activeMathType.contains(currentFocus) ) {
                //User clicked within the active mathtype box,
                //save the new answer
                const boxId = activeMathType.dataset.boxid;
                const id = "editable-math-" + boxId;
                const editorDiv = document.getElementById(id);
                const editorType = editorDiv.dataset.type;
                let answerValue = document.getElementById(boxId);
                const mathML = window.mathTypeEditor[editorType].getMathML();

                if( mathML ) {
                    answerValue.value = mathML;
                }
                // Also check to see if there are any invalid characters
                warnInvalidMathTypeCharacters(boxId);
            } else {
                // The user clicked anywhere outside the current active box
                // Nothing to immediately save, but student work will be saved again as part of the destroy
                // move on to resolve();
            }
        }
            else {
                // No active MathType editor, immediately move on to resolve()
            }
        }
        resolve();
    });
    callback();
}
function checkForMathTypeFocus(target, options = {}) {
    const currentFocus = target && target.nodeType === Node.TEXT_NODE ? target.parentElement : (target || document.activeElement);
    if (!(currentFocus instanceof Element)) {
        return;
    }

    const shouldOpenClosedEditor = options.openClosedEditor !== false;
    const className = typeof currentFocus.className === "string" ? currentFocus.className : "";
    if (window.mathTypeOverlay) {
        if (window.mathTypeOverlay.isTriggerElement(currentFocus) || window.mathTypeOverlay.contains(currentFocus)) {
            return;
        }
    }
    checkForAndDestroyMathTypeEditor(currentFocus, () => {
        if (!shouldOpenClosedEditor) {
            return;
        }

        if( currentFocus.id.match("editable-math-") 
            && className.match("mathtype") && currentFocus.dataset.boxid
            && !className.match("mtDisabled")
        ) {
            //User clicked within an enabled mathtype box (save time from processing the loop below)
            createMathTypeEditor(currentFocus.dataset.boxid);
        } else {
            //Check if user clicked within an element within a mathtype box
            const mathTypeBoxes = document.getElementsByClassName('mathtype');
            for (let i = 0; i < mathTypeBoxes.length; i++) { 
                if(mathTypeBoxes[i].contains(currentFocus)) {
                    //Current focus is within one of the mathtype boxes. This is the last box needed to be checked
                    if( mathTypeBoxes[i].dataset.boxid
                        && !mathTypeBoxes[i].className.match("mtDisabled")
                    ) {
                        //User clicked within an enabled math type box
                        createMathTypeEditor(mathTypeBoxes[i].dataset.boxid);
                    }
                    break;
                }
            }
        }
    });
}

async function checkForAndDestroyMathTypeEditor(currentFocus, callback) {
    await new Promise (async (resolve) => {
        if (window.mathTypeOverlay && window.mathTypeOverlay.isActive()) {
            if (window.mathTypeOverlay.contains(currentFocus)) {
                // User clicked within the overlay, no change.
            } else {
                await window.mathTypeOverlay.close({ restoreFocus: false });
            }
            resolve();
            return;
        }

        const activeMathType = getActiveInlineMathTypeEditor();
        if( activeMathType ) {
            if( activeMathType.contains(currentFocus) ) {
                //User clicked within the active mathtype box, no change
                //Do not need to check for editor creation, no callback
            } else {
                destroyMathTypeEditor(activeMathType.dataset.boxid, () => {resolve()});
            }
        } else {
            resolve();
        }
    });
    callback();
}

function createMathTypeEditor (boxId) {
    const id = "editable-math-" + boxId;
    let editorDiv = document.getElementById(id);
    const editorType = editorDiv.dataset.type;
    const answerDiv = document.getElementById(boxId);
    const answerValue = (answerDiv.value)? answerDiv.value : "<mspace/>";
    const overlayParts = window.mathTypeOverlay ? window.mathTypeOverlay.ensureInlineUI(boxId) : {};
    const editorHost = editorDiv;
    if (window.mathTypeOverlay) {
        window.mathTypeOverlay.lockInlineBox(boxId);
    }

    editorDiv.classList.remove('mtClosed');
    editorDiv.classList.add('mtOpen');
    setMathTypeOpenAccessibilityState(editorDiv);

    setMathTypeValue(editorType, answerValue, () => {
        editorHost.innerHTML = '';
        window.mathTypeEditor[editorType].insertInto(editorHost);
        window.mathTypeEditor[editorType].setToolbarHidden(true);
        if (window.mathTypeOverlay) {
            window.mathTypeOverlay.hideContextualTabs(editorHost);
        }

        // Listen for user input to autoformat common mistakes like parentheses
        //Function in ./autoformat.js
        attachMathTypeAutoFormatListeners(boxId, editorHost);
        if (window.mathTypeOverlay) {
            window.mathTypeOverlay.bindLiveSync(boxId, editorHost, {
                mode: "inline",
                renderPreview: false,
                adjustInline: true,
            });
            let previousSnapshot = null;
            let stablePasses = 0;
            let attempts = 0;
            const stabilizeInlineSize = () => {
                attempts += 1;
                const formulaDisplay = editorHost.querySelector(".wrs_formulaDisplay");
                const focusContainer = editorHost.querySelector(".wrs_focusElementContainer");
                const snapshot = JSON.stringify({
                    preferredHeight: Math.ceil(window.mathTypeEditor[editorType].getPreferredHeight()),
                    preferredWidth: Math.ceil(window.mathTypeEditor[editorType].getPreferredWidth()),
                    formulaDisplayScrollHeight: formulaDisplay ? formulaDisplay.scrollHeight : 0,
                    formulaDisplayClientHeight: formulaDisplay ? formulaDisplay.clientHeight : 0,
                    focusContainerScrollHeight: focusContainer ? focusContainer.scrollHeight : 0,
                    focusContainerClientHeight: focusContainer ? focusContainer.clientHeight : 0,
                });

                if (snapshot === previousSnapshot) {
                    stablePasses += 1;
                } else {
                    stablePasses = 0;
                    previousSnapshot = snapshot;
                }

                if (stablePasses >= 1 || attempts >= 8) {
                    window.mathTypeOverlay.adjustInlineBox(boxId, "stabilized-open");
                    return;
                }

                setTimeout(stabilizeInlineSize, 40);
            };

            setTimeout(stabilizeInlineSize, 80);
        }
    
        //Focus on mathtype input box
        const focusElement = getMathTypeFocusElement(editorHost);
        if (focusElement) {
            focusElement.focus();
        }
    });
}

async function destroyMathTypeEditor(boxId, callback) {
    await new Promise ((resolve) => {
        const id = "editable-math-" + boxId;
        let editorDiv = document.getElementById(id);
        const editorType = editorDiv.dataset.type;
        let answerValue = document.getElementById(boxId);
        const preservedRect = editorDiv.getBoundingClientRect();

        // Save Answers
        const mathML = window.mathTypeEditor[editorType].getMathML();
        if( mathML ) {
            answerValue.value = mathML;
        }

        editorDiv.classList.remove('mtOpen');
        editorDiv.classList.add('mtClosed');
        setMathTypeClosedAccessibilityState(editorDiv);
        editorDiv.style.height = "";
        editorDiv.style.minHeight = "";

        // In order for mathtype to fully clear out, it must be inserted onto the page
        // inserting it into a hidden element such that it can fully process
        const extraDiv = window.ensureMathTypeStagingHost(editorType);
        if (window.mathTypeOverlay) {
            window.mathTypeOverlay.clearViewportOverrides(editorDiv);
        }
        window.mathTypeEditor[editorType].insertInto(extraDiv);
        window.mathTypeEditor[editorType].setToolbarHidden(false);
        setMathTypeValue(editorType, window.mathTypeEditor.MATHTYPE_DEFAULT, () => { resolve() });

        if (window.mathTypeOverlay) {
            window.mathTypeOverlay.renderPreview(boxId, {
                preserveWidth: preservedRect.width,
            });
        } else {
            const answermathml = (window.mathTypeEditor)? window.mathTypeEditor.cleanMathMLForMathJax(answerValue.value) : answerValue.value;
            editorDiv.innerHTML = "<span class = \"mtAnswer\">"+ answermathml +"</span>";
            reparseMathJaxForMathtypeAnswer(id, 'Typeset', () => {
                normalizeMathTypePreviewAccessibility(editorDiv);
            });
        }
    });
    callback();
}

function removeIdsFromMathJaxClone(element) {
    element.removeAttribute("id");
    Array.from(element.querySelectorAll("[id]")).forEach((node) => {
        node.removeAttribute("id");
    });
}

function normalizeMathTypePreviewAccessibility(editorDiv) {
    const answerNode = editorDiv ? editorDiv.querySelector(".mtAnswer") : null;
    if (!answerNode) {
        return;
    }

    Array.from(answerNode.querySelectorAll(".mathtype-assistive-math")).forEach((node) => {
        node.remove();
    });

    const assistiveMath = answerNode.querySelector(".MJX_Assistive_MathML");
    if (!assistiveMath) {
        Array.from(answerNode.querySelectorAll(".MathJax, .mjx-chtml, svg")).forEach((node) => {
            node.removeAttribute("tabindex");
        });
        return;
    }

    const assistiveClone = assistiveMath.cloneNode(true);
    removeIdsFromMathJaxClone(assistiveClone);
    assistiveClone.classList.add("mathtype-assistive-math");
    assistiveClone.classList.add("mathtype-sr-only");
    assistiveClone.removeAttribute("aria-hidden");
    Array.from(assistiveClone.querySelectorAll("[aria-hidden]")).forEach((node) => {
        node.removeAttribute("aria-hidden");
    });

    answerNode.insertBefore(assistiveClone, answerNode.firstChild);

    Array.from(answerNode.querySelectorAll(".MathJax_Preview, .MathJax, .mjx-chtml, svg")).forEach((node) => {
        node.setAttribute("aria-hidden", "true");
        node.removeAttribute("tabindex");
    });

    Array.from(answerNode.querySelectorAll(".MJX_Assistive_MathML")).forEach((node) => {
        if (!node.classList.contains("mathtype-assistive-math")) {
            node.setAttribute("aria-hidden", "true");
        }
    });
}

function reparseMathJaxForMathtypeAnswer(boxId, action, callback) {
    let editorDiv = document.getElementById(boxId);
     MathJax.Hub.Queue(function () {
            // Save current MathJax configuration
            const hubConfig = MathJax.Hub.config || MathJax.Hub.Config || {};
            const originalCommonHTMLLinebreaks = hubConfig.CommonHTML && hubConfig.CommonHTML.linebreaks;
            const originalHtmlCssLinebreaks = hubConfig["HTML-CSS"] && hubConfig["HTML-CSS"].linebreaks;
            const renderConfig = {
                CommonHTML: { linebreaks: { automatic: true, width: "460px" } },
                "HTML-CSS": { linebreaks: { automatic: true, width: "460px" } }
            };

            // Configure line breaking temporarily
            MathJax.Hub.Config(renderConfig);
            // Reparse mathjax only for this specific element
            MathJax.Hub.Queue([action, MathJax.Hub, editorDiv], function() {
                // Once reparse is done on this singular element
                // Restore original configuration to not affect other math display on the page
                const restoreConfig = {};
                if (originalCommonHTMLLinebreaks !== undefined) {
                    restoreConfig.CommonHTML = { linebreaks: originalCommonHTMLLinebreaks };
                }
                if (originalHtmlCssLinebreaks !== undefined) {
                    restoreConfig["HTML-CSS"] = { linebreaks: originalHtmlCssLinebreaks };
                }
                if (Object.keys(restoreConfig).length) {
                    MathJax.Hub.Config(restoreConfig);
                }
                if (callback) {
                    setTimeout(callback, 0);
                }
            });
        });
}
