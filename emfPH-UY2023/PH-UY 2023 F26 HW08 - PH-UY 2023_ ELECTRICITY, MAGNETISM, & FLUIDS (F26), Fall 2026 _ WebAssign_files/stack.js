WebAssign.Numberline.Stack = (function($){
	function Stack(numberline){
		this._numberline = numberline;
		this._stack = [""];
	};

	Stack.prototype.update = function() {
		this._stack.push(this._numberline.toString());
		if (this._stack.length == 2) {
			// just added the first element to the stack
			this._numberline.tools().toolEnabled(WebAssign.Numberline.UNDO, true);
		}
	}

	Stack.prototype.pop = function() {
		var state = this._stack.pop();
		if (this._stack.length < 2) {
			this._numberline.tools().toolEnabled(WebAssign.Numberline.UNDO, false);
		}

		return state;
	}

	Stack.prototype.previous = function() {
		if (this._stack.length > 1) {
			return this._stack[this._stack.length - 2]
		} else {
			return undefined;
		}
	}

	Stack.prototype.top = function() {
		if (this._stack.length > 0) {
			return this._stack[this._stack.length - 1]
		} else {
			return undefined;
		}
	}

	Stack.prototype.empty = function() {
		this._stack = [];
		this._numberline.tools().toolEnabled(WebAssign.Numberline.UNDO, false);
	}

	return Stack;
})(jQuery);