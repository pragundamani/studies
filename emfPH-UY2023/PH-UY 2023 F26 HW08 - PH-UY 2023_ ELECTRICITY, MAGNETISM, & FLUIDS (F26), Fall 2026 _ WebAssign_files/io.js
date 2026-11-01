WebAssign.Numberline.IO = (function($){

	function IO(numberline, config){
		this._numberline = numberline;
		this._config = config;
	};

	IO.prototype.read = function(state) {
		var $this = this;

		// remove the trailing ";"
		if (state.charAt(state.length - 1) == ';') {
			state = state.substr(0, state.length - 1);
		}

		var terms = state.split(';');
		$.each(terms, function(key, term) {
			$this.buildTerm(term);
		});
	};

	IO.prototype.write = function() {
		var pointOutput = '',
			segmentOutput = '',
			elements = {};

		$.each(this._numberline._elements, function(key, value){
			if (value.placed !== false) {
				elements[value.id()] = value;
			}
		});

		for( var key in elements ) {
			var element = elements[key];
			if (element.type() == 'NoSol') {
				return element.toString();
			} else if (element.type() == 'Segment') {
				var part = [];
				$.each(element.related(), function(index, point) {
					switch (point.renderType()) {
						case WebAssign.Numberline.CLOSE_POINT:
							part[index] = point.getX() + "";
							break;
						case WebAssign.Numberline.OPEN_POINT:
							part[index] = "(" + point.getX() + ")";
							break;
						case WebAssign.Numberline.LEFT_PAREN:
							part[index] = "(" + point.getX();
							break;
						case WebAssign.Numberline.RIGHT_PAREN:
							part[index] = point.getX() + ")";
							break;
						case WebAssign.Numberline.LEFT_BRACKET:
							part[index] = "[" + point.getX();
							break;
						case WebAssign.Numberline.RIGHT_BRACKET:
							part[index] = point.getX() + "]";
							break;
						// need to handle these cases still
						case "left arrow":
							part[index] = "(-infinity";
							break;
						case "right arrow":
							part[index] = "infinity)";
							break;
						case "flag":
							part[index] = point.getFlagId() + "(" + point.getX() + ")";
							break;
					}
					delete elements[point.id()];
				});

				delete elements[key];
				
				segmentOutput += part[0] + "," + part[1] + ";"
			}
		}

		// this now only contains points that are not part of segments
		var sortedPoints = this._numberline.sortElements(elements);
		$.each(sortedPoints, function(key, point) {
			if (point.type() != 'Flag' || point.placed() !== false) {
				pointOutput += point.toString();
			}
		});

		return pointOutput + segmentOutput;
	}

	IO.prototype.buildTerm = function(term) {
		var yPos = this._numberline.grid().gridY(),
			types = {
				'(': WebAssign.Numberline.LEFT_PAREN,
				')': WebAssign.Numberline.RIGHT_PAREN,
				'[': WebAssign.Numberline.LEFT_BRACKET,
				']': WebAssign.Numberline.RIGHT_BRACKET
			},
			element;
		
		// regex match strings
		var closeNumber = "(-?\\d*(\\.\\d+)?)",
			openNumber = "(\\(" + closeNumber + "\\))",
			leftParenthesis = "(\\(" + closeNumber + ")",
			rightParenthesis = "(" + closeNumber + "\\))",
			leftBracket = "(\\[" + closeNumber + ")",
			rightBracket = "(" + closeNumber + "\\])",
			_infinity = "(\\(-infinity)",
			infinity = "(infinity\\))",
			flagNumber = "(f\\d+\\(" + closeNumber + "\\))",
			allStyles = closeNumber + "?" + openNumber + "?" + leftParenthesis + "?" + rightParenthesis + "?" + leftBracket + "?" + rightBracket + "?" + _infinity + "?" + infinity + "?" + flagNumber + "?";

		// handle no solution
		if (term == 'no solution') {
			element = new WebAssign.Numberline.NoSol(this._numberline);
			this._numberline.addElement(element);
			this._numberline.tools().setActiveTool(WebAssign.Numberline.NOSOL, true);
			return element;
		}

		// remove spaces
		term = term.replace(/\s/g, "");

		// set the active tool to the cursor
		this._numberline.tools().setActiveTool(WebAssign.Numberline.CURSOR, true);

		// handle flags
		if (this._numberline.isFlagMode() && term.match("^" + flagNumber + "$")) {
			var component = term.split('(');
			var flagId = component[0],
				flags = this._numberline.getFlags(),
				x = this._numberline.grid().userToLocal(Number(component[1].substr(0, component[1].length - 1)), this._config.xAxisPos).x;

			// place the flag on the axis
			flags[flagId].moveTo(x, this._numberline.grid().gridY());
			
			return flags[flagId];
		}

		if (term.match("^" + allStyles + "," + allStyles + "$")) {
			// create a segment
			var component = term.split(','),
				point1 = this.buildTerm(component[0]),
				point2 = this.buildTerm(component[1]);

			element = new WebAssign.Numberline.Segment(this._numberline, {left:point1, right:point2});
			this._numberline.addElement(element);
		} else if (term.match("^" + allStyles + "$")) {
			// create a single point
			var data;
			var renderType = term.match(/[\[\]\(\)]/g);
			if (renderType == null) {
				// closed point
				data = {value: term, type: WebAssign.Numberline.CLOSE_POINT}
			} else if (renderType.length == 1) {
				// paren or bracket
				switch (renderType[0]) {
					case '[':
					case '(':
						data = {value: term.substr(1), type: types[renderType]};
						break;
					case ']':
					case ')':
						data = {value: term.substr(0, term.length - 1), type: types[renderType]};
						break;
				}
			} else {
				// open point (or possibly flag?)
				data = {value: term.substr(1, term.length - 2), type: WebAssign.Numberline.OPEN_POINT};
			}
			
			// create the point and add it to this._elements
			if (data.value == 'infinity') {
				return this._numberline.rightArrow().show();
			} else if ( data.value == '-infinity' ) {
				return this._numberline.leftArrow().show();
			} else {
				var x   = this._numberline.grid().userToLocal(Number(data.value)).x;
				element = WebAssign.Numberline.Point.findPoint(this._numberline.getElements(), x);
				if ( element ) return element;
				element = new WebAssign.Numberline.Point(this._numberline, {x:x, y:yPos}, data.type);
			}		
			this._numberline.addElement(element);
		}

		return element;
	};

	return IO;
})(jQuery);