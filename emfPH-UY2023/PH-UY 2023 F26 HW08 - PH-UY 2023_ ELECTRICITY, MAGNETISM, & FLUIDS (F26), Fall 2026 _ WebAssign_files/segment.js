WebAssign.Numberline.Segment = (function($, _super){
	__extends(Segment, _super);

	function Segment(numberline, options){
		Segment.__super__.constructor.apply(this, [numberline, options]);
		this._visibleElement;
	}

	Segment.prototype.createElement = function(options) {
		var visibleAttributes = {
			'stroke-width': 5,
			'opacity': 0.5
		};
		if (options.key) { 
			visibleAttributes.stroke = this._keyColor;
		}

		this.addRelated( options.left );
		this.addRelated( options.right );
		options.left.addRelated( this );
		options.right.addRelated( this );
		var y     = this.numberline().grid().gridY();
		var path  = 'M' + options.left.rightAnchor() + ',' + y;
			path += 'L' + options.right.leftAnchor() + ',' + y;
		var segment = this.numberline().renderer().path(path).attr({'stroke-width': 40, 'opacity': 0}).toBack();
		this._visibleElement = this.numberline().renderer().path(path).attr(visibleAttributes).toBack();
		return segment;
	};

	Segment.prototype.erase = function() {
		var related = this.related();
		while ( related.length ) {
			related.pop().removeRelated(this);
		}
		this._element.remove();
		this._visibleElement.remove();
		this._numberline.removeElement( this.id() );
		return this;
	};

	Segment.prototype.removeRelated = function(el){
		Segment.__super__.removeRelated.apply(this, [el]);
		if ( this._related.length < 2 ) {
			this.erase();
			this._numberline.removeElement( this.id() );
		}
	};

	Segment.prototype.swap = function( left, right ) {
		var related  = this.related();
		if ( related[0].id() != left.id() ) {
			related[0].removeRelated( this );
			related[0] = left;
			left.addRelated( this );
		}
		if ( related[1].id() != right.id() ) {
			related[1].removeRelated( this );
			related[1] = right;
			right.addRelated( this );
		}
		this.update();
	};

	Segment.prototype.update = function() {
		var points = this.related();
		var y      = this.numberline().grid().gridY();
		var path   = 'M' + points[0].rightAnchor() + ',' + y;
			path  += 'L' + points[1].leftAnchor() + ',' + y;
		if( points[1].getX() < points[0].getX() ) {
			var left = points[0];
			points[0] = points[1];
			points[1] = left;
		}
		this._element.attr('path', path);
		this._visibleElement.attr('path', path);
	};

	Segment.prototype.type = function() {
		return 'Segment';
	};

	Segment.prototype.toString = function() {
	};

	Segment.findNearestElements = function( elements, x ) {
		var left  = false,
			right = false;
		$.each( elements, function(key, value){
			if ( value.type() != 'Point' && value.type() != 'EndArrow' ) return;
			var pos = value.actualX();
			if ( pos < x ) {
				if ( !left || pos > left.actualX() ) {
					left = value;
				}
			}
			else if ( pos > x ) {
				if ( !right || pos < right.actualX() ) {
					right = value;
				}
			}
			else {
				if ( pos === LEFT_LIMIT ) {
					right = value;
				}
				if ( pos === RIGHT_LIMIT ) {
					left = value;
				}
			}
		});

		return [left, right];
	}

	return Segment;
})(jQuery, WebAssign.Numberline.Element);
