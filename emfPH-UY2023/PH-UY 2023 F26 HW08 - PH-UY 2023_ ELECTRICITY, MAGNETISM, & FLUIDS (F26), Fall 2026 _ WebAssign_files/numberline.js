window.WebAssign || (window.WebAssign = {});

window.__hasProp = Object.prototype.hasOwnProperty,
window.__extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

WebAssign.Numberline = (function($) {
    function Numberline(selector, config){
		this._config         = this.parseConfig(config);
		this._io             = new WebAssign.Numberline.IO(this, this._config);
		this._elements       = {};
		this._availableFlags = {};
		this._dom            = $(selector);
		this._renderer       = Raphael(this._dom.find('.elements.canvas')[0], 660, this._config.gridHeight);
		this._grid           = new WebAssign.Numberline.Grid( this, this._dom.find('.grid.canvas')[0], this._config );
		this._canvas         = new WebAssign.Numberline.CanvasView( this, this._renderer.canvas );
		this._tools          = new WebAssign.Numberline.Tools( this, this._dom.first('div.buttons'), this._config.defaultTool );
		this._tooltip        = new WebAssign.Numberline.ToolTip( this, this._dom.find('.canvas-container .tooltip') );
		this._controller     = new WebAssign.Numberline.Controller( this, this._config );
		this._stack          = new WebAssign.Numberline.Stack( this );
		this._leftArrow      = new WebAssign.Numberline.EndArrow(this, true, this._grid.farLeft());
		this._rightArrow     = new WebAssign.Numberline.EndArrow(this, false, this._grid.farRight());

		this.init(this._config.mode);
	}

	Numberline.prototype.dom = function() {
		return this._dom;
	}

	Numberline.prototype.renderer = function() {
		return this._renderer;
	}

	Numberline.prototype.tools = function() {
		return this._tools;
	}

	Numberline.prototype.controller = function() {
		return this._controller;
	}

	Numberline.prototype.grid = function() {
		return this._grid;
	}	

	Numberline.prototype.stack = function() {
		return this._stack;
	}

	Numberline.prototype.id = function() {
		return this._id;
	}

	Numberline.prototype.enabled = function() {
		return this._config.state == 'active';
	}

	Numberline.prototype.isFlagMode = function() {
		return this._config.mode == 'flag';
	}

	Numberline.prototype.isKey = function() {
		return this._config.state == 'static_key';
	}

	Numberline.prototype.parseConfig = function(config) {
		if (config.mode == 'flag') {
			config.xAxisPos      = 150;
			config.gridHeight    = 200;
			config.flagPointXPos = 85;
			config.flagLabelXPos = 25;
			config.defaultTool   = Numberline.CURSOR;
		} else {
			config.xAxisPos      = 50;
			config.gridHeight    = 100;
			config.defaultTool   = Numberline.CLOSE_POINT;
		}

		return config;
	}

	Numberline.prototype.init = function(mode) {
		if (this.isFlagMode()) {
			this.loadFlags();
		}

		var state = this.isKey() ? this._config.key : undefined;
		this.loadState(state);
		this._stack.update();
	}

	Numberline.prototype.loadFlags = function() {
		var _this = this;

		$.each(this._config.flags, function(flagName, expression) {
			var flag = new WebAssign.Numberline.Flag(_this, {id: flagName, x: 0, y: 85, expr: expression});
			flag.draggable(true);
			_this.addElement(flag);
			_this._availableFlags[flagName] = flag;
		});
	}

	Numberline.prototype.adjustFlags = function() {
		var flags = [];
		var margin = 20;
		var padding = 5 + 1; // account for image padding and border thickness
		var canvasWidth = this._renderer.width;
		$.each(this._availableFlags, function(key, flag) {
			// push a new flag object onto the array
			// this object contains all the data needed to link the label and the flag
			flags.push({
				_flag: flag,
				placed: flag.placed(),
				point: flag._element,
				label: flag._label,
				pointx: flag._element.attr('x') + flag._element.attr('width')/2,
				labelx: flag._label.attr('x') + flag._label.attr('width')/2 + padding,
				width: flag._label.attr('width') + padding * 2
			});
		});

		// sort the flags from left to right
		flags.sort(function(a, b) {
			if (a.pointx < b.pointx) return -1;
			else if (a.pointx > b.pointx) return 1;
			else return 0;
		});

		for (var i = 0; i < flags.length; i++) {
			var prevFlag = flags[i-1],
				currentFlag = flags[i],
				nextFlag = flags[i+1];
			
			if (currentFlag.labelx < currentFlag.pointx) {
				// check right
				if ((nextFlag != undefined) && (currentFlag.pointx + currentFlag.width / 2 + margin >= nextFlag.labelx - nextFlag.width / 2)) {
					currentFlag.labelx = nextFlag.labelx - nextFlag.width / 2 - margin - currentFlag.width / 2;
				} else {
					currentFlag.labelx = currentFlag.pointx;
				}
			} else if (currentFlag.labelx > currentFlag.pointx) {
				// check left
				if ((prevFlag != undefined) && (currentFlag.pointx - currentFlag.width / 2 - margin <= prevFlag.labelx + prevFlag.width / 2)) {
					currentFlag.labelx = prevFlag.labelx + prevFlag.width / 2 + margin + currentFlag.width / 2;
				} else {
					currentFlag.labelx = currentFlag.pointx;
				}
			}
		}

		// left adjustment
		for (var i = 0; i < flags.length; i++) {
			var prevFlag = flags[i-1],
				currentFlag = flags[i];
			
			if ((prevFlag != undefined)  && (currentFlag.labelx - currentFlag.width / 2 - margin < prevFlag.labelx + prevFlag.width / 2)) {
				currentFlag.labelx = prevFlag.labelx + prevFlag.width / 2 + margin + currentFlag.width / 2;
			}

			// if the label is off the board on the left, move it just right enough to be on the board
			currentFlag.labelx = (currentFlag.labelx - currentFlag.width / 2) < 0 ? (0 + currentFlag.width / 2) : currentFlag.labelx;
		}

		// right adjustment
		for (var i = flags.length-1; i >= 0; i--) {
			var prevFlag = flags[i-1],
				currentFlag = flags[i];
			
			// if the label is off the board on the right, move it just left enough to be on the board
			currentFlag.labelx = (currentFlag.labelx + currentFlag.width / 2) > canvasWidth ? (canvasWidth - currentFlag.width/2) : currentFlag.labelx;

			if ((prevFlag != undefined) && (prevFlag.labelx + prevFlag.width / 2 + margin > currentFlag.labelx - currentFlag.width / 2)) {
				prevFlag.labelx = currentFlag.labelx - currentFlag.width / 2 - margin - prevFlag.width / 2;
			}

			// if currentFlag is an unplaced flag, set the point directly under the label 
			if (!currentFlag.placed) {
				currentFlag.point.attr({'x': currentFlag.labelx - currentFlag.point.attr('width')/2});
			}

			// set the coordinates for each flag
			currentFlag._flag.updateLabel(currentFlag.labelx - currentFlag.width/2 + padding, currentFlag.label.attr('y'));
		}
	}

	Numberline.prototype.getFlagY = function() {
		return this._config.flagLabelXPos;
	};

	Numberline.prototype.getFlags = function() {
		return this._availableFlags;
	}

	Numberline.prototype.getElements = function() {
		return this._elements;
	}

	Numberline.prototype.addElement = function(element) {
		this._elements[element.id()] = element;
		this.dom().trigger('numberline.element-added', [element]);
		if (Object.keys(this._elements).length == 1) {
			this._tools.toolEnabled(WebAssign.Numberline.CLEAR, true);
		}
	}

	Numberline.prototype.removeElement = function(id) {
		delete this._elements[id];
		if ($.isEmptyObject(this._elements)) {
			this._tools.toolEnabled(WebAssign.Numberline.CLEAR, false);
		}
	}

	Numberline.prototype.validateSegments = function() {
		var free      = [],
			points    = [],
			right     = false,
			point     = false,
			related   = false,
			rightmost = false;

		$.each( this.sortElements( this._elements ), function(index, value){
			if ( value.type() != 'Segment' ) points.push(value);
		});

		if ( this._leftArrow.isVisible() ) {
			points.unshift( this._leftArrow );
		}
		if ( this._rightArrow.isVisible() ) {
			points.push( this._rightArrow );
		}

		for( var i = 0; i < points.length; i++ ) {
			point   = points[i];
			related = point.related();
			longest = false;
			for( var j = related.length; --j >= 0; ) {
				var segment = related[j];
				if ( segment.related()[1].id() == point.id() ) {
					continue;
				}
				if( !rightmost || segment.related()[1].getX() > rightmost.getX() ) {
					rightmost = segment.related()[1];
				}
				free.push(segment);
			}
			if ( rightmost ) {
				if ( rightmost.id() == point.id() ) {
					rightmost = false;
				} else if ( free.length ) {
					free.pop().swap( point, points[i+1] );	
				} else {
					this.addElement(new WebAssign.Numberline.Segment( this, {left:point, right:points[i+1]}));
				}
				
			}
		}
		while( free.length ) {
			var segment = free.pop();
			segment.erase();
			this.removeElement( segment.id() );
		}
	}

	Numberline.prototype.selected = function(element) {
		if ( element !== undefined ) {
			if ( this._selected ) {
				this._selected.selected(false);
			}
			this._selected = element;
			if ( this._selected ) {
				this._selected.selected(true);
			}
			this.dom().trigger('numberline.element-selected', [this._selected]);
		}
		return this._selected;
	}

	Numberline.prototype.clearSelection = function() {
		this.selected( false );
	}

	Numberline.prototype.getElement = function(id) {
		return this._elements[id];
	}

	Numberline.prototype.clearElements = function() {
		var _this = this;
		$.each(this._elements, function(index, element){
			element.erase();
			if (element.type() != 'Flag') {
				delete _this._elements[index];
			}
		});

		this._tools.toolEnabled(WebAssign.Numberline.CLEAR, false);
	}

	Numberline.prototype.sortElements = function(elements) {
		var elemArray = [];
		$.each(elements, function(key, value) {
			elemArray.push(value);
		});

		// put segments on the left and then points in order from left to right
		elemArray.sort(Numberline.compareElements);

		return elemArray;
	}

	Numberline.sortElements = Numberline.prototype.sortElements;

	Numberline.compareElements = function(a, b) {
		if ((a.type() == 'Point' || a.type() == 'EndArrow') && (b.type() == 'Point' || b.type() == 'EndArrow')) {
			if (a.getX() < b.getX()) return -1;
			if (a.getX() == b.getX()) return 0;
			if (a.getX() > b.getX()) return 1;
		} else if (a.type() == 'Segment') {
			if ( b.type() == 'Segment' ) {
				var leftMost = Numberline.compareElements(a.related()[0], b.related()[0]);
				return  leftMost == 0
					? Numberline.compareElements(a.related()[1], b.related()[1])
					: leftMost;
			}
			return -1;
		} else if (b.type() == 'Segment') {
			return 1;
		} else {
			return 0;
		}
	}

	Numberline.prototype.leftArrow = function() {
		return this._leftArrow;
	};

	Numberline.prototype.rightArrow = function() {
		return this._rightArrow;
	};

	Numberline.prototype.loadState = function(state){
		// load state from the dom
		if (state == undefined) {
			state = $('input[name="' + this._config.input + '"]').val();

			if (state == null || state == 'none' || state == '') { // there might be some others
				return;
			}
		} else if (state == '') { // if the state is empty it means we want an empty board.
			return;
		}

		this._io.read(state);
	};

	Numberline.prototype.writeOutput = function() {
		$('input[name="' + this._config.input + '"]').val(this._stack.top());
	};

	Numberline.prototype.toString = function(){
		return this._io.write();
	}

	Numberline.CURSOR = 'cursor';
	Numberline.DRAW = 'draw';
	Numberline.ERASE = 'erase';
	Numberline.UNDO = 'undo';
	Numberline.CLEAR = 'clear';
	Numberline.CLOSE_POINT = 'closePoint';
	Numberline.OPEN_POINT = 'openPoint';
	Numberline.LEFT_PAREN = 'leftParen';
	Numberline.RIGHT_PAREN = 'rightParen';
	Numberline.LEFT_BRACKET = 'leftBracket';
	Numberline.RIGHT_BRACKET = 'rightBracket';
	Numberline.NOSOL = 'noSol';

	return Numberline;
})(jQuery);