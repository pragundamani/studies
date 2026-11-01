WebAssign.Numberline.Controller = (function($){
	function Controller(numberline, config){
		this._numberline = numberline;
		this._config = config;

		numberline.dom().on('numberline.tool-changed', $.proxy(this.onToolChange, this));

		numberline.dom().on('numberline.load-state', $.proxy(this.loadState, this));

		///////////////////////////////////////////////////////////////////////////
		//////////////////////////////// Element Events ///////////////////////////
		///////////////////////////////////////////////////////////////////////////

		$(this).on('moveStart.numberline', function(event, data) {
			this._numberline.clearSelection();
			if( data.element.draggable() ) {
				data.element.dragging(true);
			}
		});

		$(this).on('move.numberline', function(event, data) {
			if (data.element.draggable()) {
				data.element.moveTo(data.x, data.y);
			}
		});

		$(this).on('moveEnd.numberline', function(event, data) {
			if (data.element.draggable()) {
				data.element.dragging(false);
				this._numberline.validateSegments();
				this.updateState();
			}
		});

		$(this).on('clickElement.numberline', function(event, data) {
			var element = data.element;
			if ( !element ) {
				this._numberline.selected(false);
			} else {
				if ( element.type() == 'EndArrow' ) {
					if ( element.isVisible() ) {
						$(this).triggerHandler('deleteElement.numberline', data);	
					}
					else {
						$(this).triggerHandler('addElement.numberline', {type:'Segment', x:element.actualX()});
					}
					this._numberline.clearSelection();
				} else if ( element.type() == 'Point' ) {
					this._numberline.selected( data.element );
				}
			}
		});

		$(this).on('addElement.numberline', function(event, data) {
			var type    = data.type,
				element = undefined;
			switch( type ) {
				case 'Point':
					element = new WebAssign.Numberline.Point(this._numberline, {x:data.x, y:data.y}, data.renderType); // need to handle segments which have multiple (x,y)
					var adjusted = WebAssign.Numberline.Point.adjustForCollisions( this._numberline.getElements(), data.x, element );
					element.moveTo(adjusted, this._numberline.grid().gridY());
					break;
				case 'Segment':
					var points = WebAssign.Numberline.Segment.findNearestElements( this._numberline.getElements(), data.x );
					if( !points[0] ) {
						points[0] = this._numberline.leftArrow().show();
					}
					if( !points[1] ) {
						points[1] = this._numberline.rightArrow().show();
					}
					var exists  = false;
					$.each(points[0].related(), function(key, value){
						if ( $.inArray(value, points[1].related()) >= 0 ) {
							exists = true;
						}
					});
					if( !exists ) {
						element = new WebAssign.Numberline.Segment(this._numberline, {left:points[0], right:points[1]});
					}
					break;
			}

			if( element ) {
				this._numberline.addElement(element);
				this._numberline.validateSegments();
				this.updateState();
			}
		});

		$(this).on('alterElement.numberline', function(event, data) {
			if (this._numberline.selected().type() == 'Point') {
				this._numberline.selected().renderType(data.renderType);
				this.updateState();
			}
		});

		$(this).on('deleteElement.numberline', function(event, data) {
			data.element.erase();
			this.updateState();
		});

		///////////////////////////////////////////////////////////////////////////
		//////////////////////////////// Toolbar Events ///////////////////////////
		///////////////////////////////////////////////////////////////////////////

		$(this).on('clear.numberline', function(event) {
			this._numberline.clearSelection();
			this._numberline.clearElements(); 
			this._numberline.stack().empty();
			this.updateState();
			this._numberline.tools().setActiveTool(this._config.defaultTool);
		});

		$(this).on('undo.numberline', function(event) {
			this._numberline.clearSelection();
			this._numberline.clearElements();
			this._numberline.stack().pop();
			var state = this._numberline.stack().pop(); // second pop to get the previous state
			this._numberline.loadState(state);
			this.updateState();
		});

		$(this).on('addNoSol.numberline', function(event) {
			this._numberline.clearSelection();
			this._numberline.clearElements();
			var element = new WebAssign.Numberline.NoSol(this._numberline);
			this._numberline.addElement(element);
			this.updateState();
		});

		$(this).on('removeNoSol.numberline', function(event) {
			this._numberline.clearSelection();
			this._numberline.clearElements();
			var state = this._numberline.stack().previous();
			this._numberline.loadState(state);
			this.updateState();
		});
	};

	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////////// Helpers //////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	Controller.prototype.updateState = function() {
		this._numberline.stack().update();
		this._numberline.writeOutput();
	}

	Controller.prototype.onToolChange = function() {
		this._numberline.clearSelection();
	}

	Controller.prototype.loadState = function(e, element) {
		this._numberline.clearElements();
		this._numberline.loadState(element);
		this.updateState();
	}

	return Controller;
})(jQuery);