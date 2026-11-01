WebAssign.Numberline.Flag = (function($, _super){
	__extends(Flag, _super);

	function Flag(numberline, options) {
		Flag.__super__.constructor.apply(this, [numberline, options, WebAssign.Numberline.CLOSE_POINT]);
		this._flagId = options.id;
		this._border = {};
		this._label = this.createLabel(options.expr);
		this._segment = this.createSegment();
		this._placed = options.placed || false;
		if (options.key) this.colorKey();
	}

	Flag.prototype.placed = function() {
		return this._placed;
	}

	Flag.prototype.colorKey = function() {
		this._segment.attr({'stroke': this._keyColor});
		this._border.attr({'stroke': this._keyColor});
	};

	Flag.prototype.erase = function() {
		var labelData = this._label.attr(['x','width']);
		Flag.__super__.moveTo.apply(this, [Number(labelData.x + labelData.width/2), 85]); // @todo get correct Y position
		this._placed = false;

		this.numberline().adjustFlags();
	};

	Flag.prototype.calculatePath = function() {
		var padding = 5; // @todo pull this from somewhere
		var labelData = this._label.attr(['x','y','width','height']),
			flagData = this._element.attr(['x','y','width','height']);

		var path  = 'M' + Number(labelData.x + labelData.width/2) + ',' + Number(labelData.y + labelData.height + padding);
			path += 'L' + Number(flagData.x + flagData.width/2)  + ',' + Number(flagData.y  + flagData.height/2);

		return path;
	}

	Flag.prototype.createLabel = function(expression) {
		var _this = this,
			imageUrl = expression,
			loadingUrl = '/wastatic/common/img/spinner.gif',
			size = { w: 16, h: 16 },
			label = this.numberline().renderer().image(loadingUrl, this._actualX - size.w/2, this.numberline().getFlagY() - size.h/2, size.w, size.h);

		// If the "expression" from QWS is a CDN-provided image,
		// for example 'https://dynamic-images-dev.webassign.net/latex/3/2/200b50167d72da8e2921c9bf02d801.gif'
		// then use it directly as the image URL. Anything else is interpreted to be
		// an expression that requires a symimage.cgi call to render.
		// This can be removed when we complete the QWS work to exclusively use
		// the latex service in place of symimage CGI for symbolic math (non-MathJax).
		if (!expression.startsWith('https://') && !expression.startsWith('http://')) {
			imageUrl = "/cgi-bin/symimage.cgi?expr=" + expression;
		}

		// build a border around the label
		var padding = 5; // @todo pull this from somewhere
		this._border = this.numberline().renderer().rect(this._actualX - size.w/2 - padding, this.numberline().getFlagY() - size.h/2 - padding, size.w + padding * 2, size.h + padding * 2);

		$("<img/>").attr("src", imageUrl).load(function() {
			size.w = this.width;
			size.h = this.height;
			label.attr({'width': size.w, 'height': size.h, 'src': imageUrl});
			_this._border.attr({'width': size.w + padding * 2, 'height': size.h + padding * 2});
			_this.numberline().adjustFlags();
		});

		return label;
	};

	Flag.prototype.createSegment = function() {
		var segment = this.numberline().renderer().path(this.calculatePath());
		segment.attr({'stroke-width': 1});
		segment.toBack();
		return segment;
	}

	Flag.prototype.updateLabel = function(x, y) {
		var padding = 5; // @todo pull this from somewhere
		this._label.attr({'x': x, 'y': y});
		this._border.attr({'x': x - padding, 'y': y - padding});
		this._segment.attr({'path': this.calculatePath()});
	}

	Flag.prototype.moveTo = function(x, y) {
		Flag.__super__.moveTo.apply(this, [x, y]);
		this._placed = true;
		this.numberline().tools().toolEnabled(WebAssign.Numberline.CLEAR, true);

		this.numberline().adjustFlags();
	};

	Flag.prototype.type = function() {
		return 'Flag';
	};

	Flag.prototype.toString = function() {
		return this._flagId + '(' + this.getX() + ');';
	}

	return Flag;
})(jQuery, WebAssign.Numberline.Point);
