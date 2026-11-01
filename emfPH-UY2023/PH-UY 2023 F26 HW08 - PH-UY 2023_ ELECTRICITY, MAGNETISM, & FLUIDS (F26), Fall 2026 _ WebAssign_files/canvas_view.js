WebAssign.Numberline.CanvasView = (function($, _super){

	__extends(CanvasView, _super);

	function CanvasView(numberline, canvas){
		CanvasView.__super__.constructor.apply(this, [numberline, canvas]);
		this.onSelectDown    = $.proxy(this._onSelectDown, this);
		this.onSelectMove    = $.proxy(this._onSelectMove, this);
		this.onSelectUp      = $.proxy(this._onSelectUp, this);
		this.onSelectOutside = $.proxy(this._onSelectOutside, this);
		this.onElementClick  = $.proxy(this._onElementClick, this);
		this.onSegmentClick  = $.proxy(this._onSegmentClick, this);
		this.onElementDelete = $.proxy(this._onElementDelete, this);
		this.onElementAdded  = $.proxy(this._onElementAdded, this);
	};

	CanvasView.prototype.init = function() {
		if (this._numberline.enabled()) {
			this._numberline.dom().on('numberline.tool-changed', $.proxy(this.onToolChange, this));
			this._numberline.dom().on('numberline.element-added', $.proxy(this.onElementAdded, this));
		}
	};

	CanvasView.prototype.onElementAdded = function(e, element) {
		switch(this._currentTool) {
			case WebAssign.Numberline.CURSOR:
				element.element().undrag();
				element.element().drag(this.onSelectMove, this.onSelectDown, this.onSelectUp);
				break;
			case WebAssign.Numberline.ERASE:
				element.element().mouseup(this.onElementDelete);
				break;
		}
	};

	/**
	 * @param event e
	 * @param string oldTool
	 * @param string newTool
	 * @param boolean simpleNoSol - Used to determine whether we should fire the controller event or just update the toolbar
	 */
	CanvasView.prototype.onToolChange = function(e, oldTool, newTool, simpleNoSol) {
		if ( oldTool == newTool ) return;
		if ( oldTool ) {
			this.killOldMode(oldTool, simpleNoSol);
		}
		this.initNewMode(newTool, simpleNoSol);
	};

	CanvasView.prototype.killOldMode = function(oldTool, simpleNoSol) {
		switch(oldTool) {
			case WebAssign.Numberline.OPEN_POINT:
			case WebAssign.Numberline.CLOSE_POINT:
			case WebAssign.Numberline.LEFT_PAREN:
			case WebAssign.Numberline.RIGHT_PAREN:
			case WebAssign.Numberline.LEFT_BRACKET:
			case WebAssign.Numberline.RIGHT_BRACKET:
				this.dom().off('mouseup', this.onElementClick);
				break;
			case WebAssign.Numberline.DRAW:
				this.dom().off('mouseup', this.onSegmentClick);
				break;
			case WebAssign.Numberline.CURSOR:
				this.numberline().renderer().forEach(function(element){
					element.undrag();
				}, this);
				this.dom().off('mouseup', this.onSelectOutside);
				break;
			case WebAssign.Numberline.ERASE:
				this.numberline().renderer().forEach(function(element){
					element.unmouseup(this.onElementDelete);
				}, this);
				break;
			case WebAssign.Numberline.NOSOL:
				if (!simpleNoSol) {
					$(this._numberline.controller()).triggerHandler('removeNoSol.numberline');
				}
				break;
		}
	};

	CanvasView.prototype.initNewMode = function(newTool, simpleNoSol) {
		this._currentTool = newTool;
		switch(newTool) {
			case WebAssign.Numberline.OPEN_POINT:
			case WebAssign.Numberline.CLOSE_POINT:
			case WebAssign.Numberline.LEFT_PAREN:
			case WebAssign.Numberline.RIGHT_PAREN:
			case WebAssign.Numberline.LEFT_BRACKET:
			case WebAssign.Numberline.RIGHT_BRACKET:
				this.dom().on('mouseup', {renderType : newTool}, this.onElementClick);
				break;
			case WebAssign.Numberline.DRAW:
				this.dom().on('mouseup', this.onSegmentClick);
				break;
			case WebAssign.Numberline.CURSOR:
				this.numberline().renderer().forEach(function(element){
					element.drag(this.onSelectMove, this.onSelectDown, this.onSelectUp);
				}, this);
				this.dom().on('mouseup', this.onSelectOutside);
				break;
			case WebAssign.Numberline.ERASE:
				this.numberline().renderer().forEach(function(element){
					element.mouseup(this.onElementDelete);
				}, this);
				break;
			case WebAssign.Numberline.NOSOL:
				if (!simpleNoSol) {
					$(this._numberline.controller()).triggerHandler('addNoSol.numberline');
				}
				break;
		}
	};

	CanvasView.prototype._onElementClick = function(e) {
		var pos = this._numberline.grid().globalToLocalRange( e.pageX, e.pageY );
		if( Math.abs(pos.y - this._numberline.grid().gridY()) > 30 ) return;
		var new_x = WebAssign.Numberline.Point.adjustForCollisions(this._numberline.getElements(), pos.x);
		if( new_x != pos.x ) return;
		$(this._numberline.controller()).triggerHandler('addElement.numberline', {
			x: pos.x,
			y: this._numberline.grid().gridY(),
			renderType: e.data.renderType,
			type:'Point'
		});
		this._numberline.tools().onToolChange(e, WebAssign.Numberline.CURSOR);
	};

    CanvasView.prototype._onSegmentClick = function(e) {
		var pos = this._numberline.grid().globalToLocalRange( e.pageX, e.pageY );
		if( Math.abs(pos.y - this._numberline.grid().gridY()) > 30 ) return;
		$(this._numberline.controller()).triggerHandler('addElement.numberline', {
			x: pos.x,
			y: this._numberline.grid().gridY(),
			type:'Segment'
		});
		this._numberline.tools().onToolChange(e, WebAssign.Numberline.CURSOR);
	};
	
	CanvasView.prototype._onElementDelete = function(e) {
		this._selected  = $(e.target).data('numberline-element');
		$(this._numberline.controller()).triggerHandler('deleteElement.numberline', {
			element : this._selected
		});
	};

	CanvasView.prototype._onSelectDown = function(x, y, e) {
		this._selecting = true;
		this._selected  = $(e.target).data('numberline-element');
		this._moved     = false;
	};

	CanvasView.prototype._onSelectMove = function(dx, dy, x, y, e) {
		if (this._selected && !this._selected.draggable()) return;
		if ( !this._moved ) {
			$(this._numberline.controller()).triggerHandler('moveStart.numberline', {
				element : this._selected
			});
			this._moved = true;
		}
		var pos = this._numberline.grid().globalToLocalRange( x, y );
		pos.x = WebAssign.Numberline.Point.adjustForCollisions(this._numberline.getElements(), pos.x, this._selected);
		$(this._numberline.controller()).triggerHandler('move.numberline', {
			element : this._selected,
			x       : pos.x,
			y       : this._numberline.grid().gridY()
		});
	};

	CanvasView.prototype._onSelectUp = function(e) {
		if ( this._moved ) {
			$(this._numberline.controller()).triggerHandler('moveEnd.numberline', {
				element : this._selected
			});
			this._moved = false;
		}
		else {
			$(this._numberline.controller()).triggerHandler('clickElement.numberline', {
				element : this._selected
			});
		}
	};

	CanvasView.prototype._onSelectOutside = function(){
		if ( this._selecting ) {
			this._selecting = false;
		} else {
			this._numberline.dom().trigger('numberline.element-selected');
			$(this._numberline.controller()).triggerHandler('clickElement.numberline', {});
		}
	}

	return CanvasView;
})(jQuery, WebAssign.Numberline.View);