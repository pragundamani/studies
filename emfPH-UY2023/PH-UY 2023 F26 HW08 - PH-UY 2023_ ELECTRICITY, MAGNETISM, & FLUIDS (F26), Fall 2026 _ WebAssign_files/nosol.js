WebAssign.Numberline.NoSol = (function($, _super){
	__extends(NoSol, _super);

	function NoSol(numberline){
		NoSol.__super__.constructor.apply(this, [numberline, {x: 330, y: numberline.grid().gridY()}]);
	}

	NoSol.prototype.createElement = function(options) {
		var element = this.numberline().renderer().text(options.x, options.y, 'NO SOLUTION');
		var attributes = {
			"font-size": 50, 
			"font-family": "Helvetica, Arial, sans-serif", 
			"font-weight": "bold", 
			"opacity": 0.3
		};
		if (options.key) { 
			attributes.stroke = this._keyColor;
			attributes.fill = this._keyColor;
		}
		element.attr(attributes);
		element.transform('r-3');
		return element;
	};

	NoSol.prototype.erase = function() {
		this._element.remove();
	};

	NoSol.prototype.type = function() {
		return 'NoSol';
	};

	NoSol.prototype.toString = function() {
		return 'no solution';
	};

	return NoSol;
})(jQuery, WebAssign.Numberline.Element);