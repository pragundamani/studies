WebAssign.Numberline.EndArrow = (function($, _super){
	__extends(EndArrow, _super);

	function EndArrow(numberline, negative, options){
		this.negative = negative;
		this._visibleElement;
		EndArrow.__super__.constructor.apply(this, [numberline, options]);
	};

	EndArrow.prototype.actualX = function() {
		return this._actualX;
	};

	EndArrow.prototype.getX = function() {
		return this.negative ? -Infinity : Infinity;
	};

	EndArrow.prototype.renderType = function() {
		return this.negative ? 'left arrow' : 'right arrow';
	};

	EndArrow.prototype.rightAnchor = function() {
		return this._actualX + 12;
	};

	EndArrow.prototype.leftAnchor = function() {
		return this._actualX - 12;
	};

	EndArrow.prototype.show = function() {
		this._visibleElement.attr('opacity', 1);
		return this;
	};

	EndArrow.prototype.erase = function() {
		this._visibleElement.attr('opacity', 0);
		var related = this.related();
		while ( related.length ) {
			related.pop().erase();
		}
		return this;
	};

	EndArrow.prototype.addRelated = function(el){
		EndArrow.__super__.addRelated.apply(this, [el]);
		this.show();
	};

	EndArrow.prototype.removeRelated = function(el){
		EndArrow.__super__.removeRelated.apply(this, [el]);
		if ( this._related.length == 0 ) {
			this.erase();
		}
	};

	EndArrow.prototype.isVisible = function() {
		return this._visibleElement.attr('opacity') ? true : false;
	}

	EndArrow.prototype.createElement = function(options) {
		var attributes = {
			'opacity': 0,
			'fill': '#000'
		};
		if (options.key) {
			attributes.fill = this._keyColor;
			attributes.stroke = this._keyColor;
		}

		var width  = 30,
			height = 80;

		var path = this.negative ? 'M0,0L12,12,L12,-12,L0,0' : 'M0,0L-12,-12,L-12,12,L0,0',
			x    = this.negative ? options.x : options.x - width;

		this._actualX = options.x;
		this._visibleElement = this.numberline().renderer().path(path).transform('t' + options.x +',' + options.y).attr(attributes);
		return this.numberline().renderer().rect(x, options.y - height/2, width, height).attr({'opacity': 0, 'fill': '#000'});
	};

	EndArrow.prototype.type = function() {
		return 'EndArrow'
	}

	EndArrow.prototype.toString = function() {
		return this.negative ? '-infinity' : 'infinity';
	};

	return EndArrow;
})(jQuery, WebAssign.Numberline.Element);