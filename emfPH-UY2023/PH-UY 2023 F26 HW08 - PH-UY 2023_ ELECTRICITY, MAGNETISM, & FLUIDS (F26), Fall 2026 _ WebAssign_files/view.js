WebAssign.Numberline.View = (function($){
	function View(numberline, dom){
		this._numberline = numberline;
		this._dom        = $(dom);
		this._isEnabled  = false;
		this.init();
	};

	View.prototype.numberline = function() {
		return this._numberline;
	}

	View.prototype.dom = function() {
		return this._dom;
	}

	View.prototype.enabled = function(isEnabled){
		if( isEnabled !== undefined && this._enabled != isEnabled ) {
			this._enabled = isEnabled;
		}
		return this._enabled;
	};

	return View;
})(jQuery);