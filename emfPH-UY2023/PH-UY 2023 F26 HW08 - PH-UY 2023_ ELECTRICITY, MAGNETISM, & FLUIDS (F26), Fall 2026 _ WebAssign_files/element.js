WebAssign.Numberline.Element = (function($){
	function Element(numberline, options){
		options.key = numberline.isKey() ? true : false;
		this._id         = Element.UID++;
		this._numberline = numberline;
		this._draggable  = false;
		this._selected   = false;
		this._related    = [];
		this._keyColor   = "#070";
		this._element    = this.createElement(options);
		$(this._element.node).data('numberline-element', this);
	};

	Element.prototype.id = function() {
		return this._id;
	}

	Element.prototype.element = function(){
		return this._element;
	}

	Element.prototype.numberline = function(){
		return this._numberline;
	}

	Element.prototype.draggable = function() {
		return this._draggable;
	}

	Element.prototype.dragging = function(isDragging) {
		if ( isDragging !== undefined ) {
			this._dragging = isDragging;
		}
		return this._dragging;
	}

	Element.prototype.createElement = function(options){
		throw 'Abstract method Element.createElement not implemented';
	};

	Element.prototype.selected = function(isSelected) {
		if ( isSelected !== undefined ) {
			this._selected = isSelected;
			isSelected ? this.highlight() : this.removeHighlight();
		}
		return this._selected;
	};

	Element.prototype.highlight = function(){
		return false;
	};

	Element.prototype.removeHighlight = function() {
		return false;
	};

	Element.prototype.type = function() {
		return 'Element';
	};

	Element.prototype.related = function() {
		return this._related;
	};

	Element.prototype.addRelated = function(el) {
		this._related.push( el );
	};

	Element.prototype.removeRelated = function(el) {
		var index = this._related.indexOf( el );
		if ( index >= 0 ) {
			this._related.splice( index, 1 );
		}
	};

	Element.prototype.scaleValue = function(value) {
		return this._numberline.grid().localToUser( value, 0 ).x;
	};

	Element.UID = 0;

	return Element;
})(jQuery);