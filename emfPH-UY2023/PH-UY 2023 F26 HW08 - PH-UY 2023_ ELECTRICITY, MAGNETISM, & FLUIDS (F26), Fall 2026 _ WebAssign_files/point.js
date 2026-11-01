WebAssign.Numberline.Point = (function($, _super){
	__extends(Point, _super);

	function Point(numberline, options, renderType){
		this._renderType = renderType;
		Point.__super__.constructor.apply(this, [numberline, options]);
		this._draggable = true;
	};

	Point.prototype.actualX = function() {
		return this._actualX;
	};

	Point.prototype.getX = function() {
		return this.scaleValue(this._actualX);
	};

	Point.prototype.centerX = function() {
		switch (this._renderType) {
			case WebAssign.Numberline.CLOSE_POINT:
			case WebAssign.Numberline.OPEN_POINT:
				return this._actualX - this.getImageSize().w/2;
			case WebAssign.Numberline.RIGHT_PAREN:
			case WebAssign.Numberline.RIGHT_BRACKET:
				return this._actualX - 17;
			case WebAssign.Numberline.LEFT_PAREN:
			case WebAssign.Numberline.LEFT_BRACKET:
				return this._actualX - 13;
		}
	};

	Point.prototype.rightAnchor = function() {
		return this._actualX;
	};

	Point.prototype.leftAnchor = function() {
		return this._actualX;
	};

	Point.prototype.createElement = function(options) {
		var size = this.getImageSize();
		this._actualX = options.x;
		this._actualY = options.y
		var imageType = options.key ? 'key' : null;
		return this.numberline().renderer().image(this.getImagePath(imageType), this.centerX(), options.y - size.h/2, size.w, size.h);
	};

	Point.prototype.getImagePath = function(type) {
		if (type == 'key') {
			var suffix = '_green';
		} else if (type == 'highlight') {
			var suffix = '_blue';
		} else {
			var suffix = '';
		}

		var basePath = window.WA_STATIC_BASEPATH || '/static';

		return basePath + '/img/pads/numberline/symbols/' + this._renderType + suffix + '.png';
	};

	Point.prototype.renderType = function(newType) {
		if ( newType !== undefined && newType != this._renderType ) {
			this._renderType = newType;
			var imageType = this.selected() ? 'highlight' : null;
			var path = this.getImagePath(imageType);
			var size = this.getImageSize();
			this.element().attr('src', path).attr('width', size.w).attr('height', size.h).attr('x', this.centerX()).attr('y', this._actualY - size.h/2);
			$.each( this.related(), function(index, segment){
				segment.update();
			});
		}
		return this._renderType;
	};

	Point.prototype.getImageSize = function() {
		return {w:30,h:80};
	};

	Point.prototype.erase = function() {
		var related = this.related();
		while (related.length) {
			related.pop().removeRelated(this);
		};
		this._element.remove();
		this._numberline.removeElement( this.id() );
		return this;
	};

	Point.prototype.moveTo = function(x, y) {
		var size = this.getImageSize();
		this._actualX = x;
		this.element().attr('x', this.centerX()).attr('y', y - size.h/2);
		$.each(this.related(), function(key, value){
			value.update();
		});
	};

	Point.prototype.type = function() {
		return 'Point';
	};

	Point.prototype.toString = function() {
		var value = this.getX();

		switch (this._renderType) {
			case WebAssign.Numberline.CLOSE_POINT:
				return value + ";";
			case WebAssign.Numberline.OPEN_POINT:
				return "(" + value + ");";
			case WebAssign.Numberline.LEFT_PAREN:
				return "(" + value + ";";
			case WebAssign.Numberline.RIGHT_PAREN:
				return value + ");";
			case WebAssign.Numberline.LEFT_BRACKET:
				return "[" + value + ";";
			case WebAssign.Numberline.RIGHT_BRACKET:
				return value + "];";
		}
	};

	Point.prototype.highlight = function(){
		this.element().attr('src', this.getImagePath('highlight'));
	};

	Point.prototype.removeHighlight = function() {
		this.element().attr('src', this.getImagePath());
	};

	Point.findPoint = function(elements, x){
		var point = undefined;
		$.each(elements, function(key, value){
			if ( value.type() != 'Point' ) return;
			if ( value.actualX() == x ) {
				point = value;
			}
		})

		return point;
	};

	Point.adjustForCollisions = function( elements, x, skip ) {
		var sorted      = WebAssign.Numberline.sortElements( elements );
		var leftOffset  = skip ? skip.rightAnchor() - skip.actualX() : 6;
		var rightOffset = skip ? skip.actualX() - skip.leftAnchor()  : 6;
		var leftLimit   = 0;
		var rightLimit  = 0;
		var prevRight   = 0;
		var hit         = -1;
		for ( var i = 0; i < sorted.length; i++ ) {
			var p = sorted[i];
			if ( p.type() != 'Point' || (skip && skip.id() == p.id()) ) continue;
			var left  = p.leftAnchor() - leftOffset;
			var right = p.rightAnchor() + rightOffset;
			if ( hit < 0 ) {
				if ( x <= left ) {
					return x;
				}
				if ( left > prevRight ) {
					leftLimit = left;
				}
				if ( x > left && x < right ) {
					rightLimit = right;
					hit = i;
				}
			} else if ( left > prevRight ) {
				break;
			}
			rightLimit = prevRight = right;
		}

		if ( hit < 0 ) return x;
		if ( x - leftLimit < rightLimit - x ) {
			return leftLimit >= 30 ? leftLimit : rightLimit;
		}
		return rightLimit <= 630 ? rightLimit : leftLimit;
	}

	return Point;
})(jQuery, WebAssign.Numberline.Element);