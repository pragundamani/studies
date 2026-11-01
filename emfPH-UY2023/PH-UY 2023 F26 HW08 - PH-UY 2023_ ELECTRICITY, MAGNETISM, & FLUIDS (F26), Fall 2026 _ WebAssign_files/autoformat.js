//****************************************************************************
// Autoformat logic
window.mathTypeEditor.replacements = [
    "sin",
    "cos",
    "tan",
    "sec",
    "csc",
    "cot",
    "log",
    "ln",
    /*
    Note: The hyperbolic functions are not included in the autoformatting
    This is due to the fact that the autoformatting for the non-hyperbolic functions will have already applied
    e.g.: sin will add parenthese before the user can type "h" for "sinh"
    "sinh",
    "cosh",
    "tanh",
    */
];

window.mathTypeEditor.autoformatState = window.mathTypeEditor.autoformatState || {};

function getMathTypeEditorRoot(boxId, editorRoot) {
    // This function looks up the currently active mathtype editor in order to apply autoformatting rules. 
    // What the system THINKS is the active editor can also be passed in to reduce compute, if that passed in div is focused, we return it
    // Otherwise, we check to see if the overlay editor with the correct boxid is open, if so we return that
    // Finally we check for the inline editor using the boxid and return that
    // If there are no active editors, we return null
    if (editorRoot && editorRoot.querySelector) {
        // Checking to see if the currently live editor has focus or the toolbar is discoverable.
        const hasLiveEditor = editorRoot.querySelector(".wrs_focusElement")
            || editorRoot.querySelector(".wrs_focusElementContainer input")
            || editorRoot.querySelector(".wrs_toolbar")
            || editorRoot.querySelector('button[aria-label="Parentheses"], button[title="Parentheses"]');
        if (hasLiveEditor) {
            return editorRoot;
        }
    }

    const overlayEditorRoot = document.querySelector(`#mathtype-overlay.is-open[data-boxid="${boxId}"] .mathtype-overlay-editor`);
    if (overlayEditorRoot) {
        return overlayEditorRoot;
    }

    const id = "editable-math-" + boxId;
    const editorDiv = document.getElementById(id);
    if (editorDiv) {
        return editorDiv;
    }

    if (editorRoot) {
        return editorRoot;
    }

    return null;
}

function getMathTypeFocusElement(editorDiv) {
    if (!editorDiv) {
        return null;
    }

    return editorDiv.querySelector(".wrs_focusElement")
        || editorDiv.querySelector(".wrs_focusElementContainer input");
}

function getMathTypeParenthesesButton(editorDiv) {
    // Get the equivalent mathtype button from the pad
    if (!editorDiv) {
        return null;
    }

    return editorDiv.querySelector(`button[aria-label="Parentheses"], button[title="Parentheses"]`);
}

function shouldAutoformatFunction(buffer, functionName) {
    return buffer.endsWith(functionName);
}

async function insertParentheses(boxId, editorRoot) {
    // Note, this button is clickable by javascript even if the toolbar is hidden
    const editorDiv = getMathTypeEditorRoot(boxId, editorRoot);

    const wirisButton = getMathTypeParenthesesButton(editorDiv);
    if (!wirisButton || wirisButton.dataset.webassignAutoformatTriggered === "true") {
        return;
    }

    wirisButton.dataset.webassignAutoformatTriggered = "true";
    wirisButton.click();
    await new Promise((resolve) => {
        setTimeout(() => {
            delete wirisButton.dataset.webassignAutoformatTriggered;
            resolve();
        }, 0);
    });
}

async function webAssignAutoFormatRules(boxId, typedKey, editorRoot) {
    if (typedKey.length !== 1 || /[^a-z]/i.test(typedKey)) {
        return;
    }

    const editorDiv = getMathTypeEditorRoot(boxId, editorRoot);
    const state = window.mathTypeEditor.autoformatState[boxId] || { buffer: "" };
    state.buffer = `${state.buffer}${typedKey.toLowerCase()}`.slice(-8);
    window.mathTypeEditor.autoformatState[boxId] = state;

    for (const key of window.mathTypeEditor.replacements) {
        if (!editorDiv || !shouldAutoformatFunction(state.buffer, key)) {
            continue;
        }

        await insertParentheses(boxId, editorDiv);
        state.buffer = "";
        break;
    }
}

//Listeners to track most recent mathtype input are invoked when creating the editor
function attachMathTypeAutoFormatListeners(boxId, editorRoot) {
    const editorDiv = getMathTypeEditorRoot(boxId, editorRoot);
    const focusElement = getMathTypeFocusElement(editorDiv);

    if (!focusElement) {
        return;
    }

    if (focusElement.dataset.webassignAutoformatBoxId === String(boxId)) {
        return;
    }

    if (focusElement.__webassignAutoformatHandler) {
        focusElement.removeEventListener("keyup", focusElement.__webassignAutoformatHandler);
    }

    window.mathTypeEditor.autoformatState[boxId] = { buffer: "" };

    const autoformatHandler = (event) => {
        if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
        }

        if (event.key === "Backspace" || event.key === "Delete" || event.key === "Escape") {
            window.mathTypeEditor.autoformatState[boxId].buffer = "";
            return;
        }

        if (!/^[a-z]$/i.test(event.key)) {
            window.mathTypeEditor.autoformatState[boxId].buffer = "";
            return;
        }

        webAssignAutoFormatRules(boxId, event.key);
    };

    focusElement.addEventListener("keyup", autoformatHandler);
    focusElement.__webassignAutoformatHandler = autoformatHandler;
    focusElement.dataset.webassignAutoformatBound = "true";
    focusElement.dataset.webassignAutoformatBoxId = String(boxId);
}
