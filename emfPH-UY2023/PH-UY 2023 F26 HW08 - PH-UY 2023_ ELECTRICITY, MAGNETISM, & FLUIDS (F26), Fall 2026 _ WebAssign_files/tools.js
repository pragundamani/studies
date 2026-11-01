WebAssign.Numberline.Tools = (function($, _super){

	__extends(Tools, _super);

	function Tools(numberline, toolbar, defaultTool){
		Tools.__super__.constructor.apply(this, [numberline, toolbar]);
		this._activeTool  = '';
		this.setActiveTool( defaultTool || WebAssign.Numberline.CLOSE_POINT );
	}

	Tools.prototype.setActiveTool = function( type, simpleNoSol ) {
		var plottingTools = [
			WebAssign.Numberline.CURSOR,
			WebAssign.Numberline.DRAW,
			WebAssign.Numberline.ERASE,
			WebAssign.Numberline.CLOSE_POINT,
			WebAssign.Numberline.OPEN_POINT,
			WebAssign.Numberline.LEFT_PAREN,
			WebAssign.Numberline.RIGHT_PAREN,
			WebAssign.Numberline.LEFT_BRACKET,
			WebAssign.Numberline.RIGHT_BRACKET
		];

		var oldTool = this._activeTool;
		if( oldTool ) {
			this.dom().find('ul.tools li a.' + oldTool).removeClass('selected');

			if (oldTool == WebAssign.Numberline.NOSOL) {
				// reenable the plotting tools
				this.toolEnabled(plottingTools, true);
			}
		}
		if ( type ) {
			if (type == WebAssign.Numberline.NOSOL && oldTool == WebAssign.Numberline.NOSOL) {
				type = WebAssign.Numberline.CURSOR;
			}

			if (type == WebAssign.Numberline.NOSOL) {
				// disable the plotting tools
				this.toolEnabled(plottingTools, false);
			}

			this.dom().find('ul.tools li a.' + type).addClass('selected');
		}
		this._activeTool = type;
		this.numberline().dom().trigger('numberline.tool-changed', [oldTool, this._activeTool, simpleNoSol]);
	};

	Tools.prototype.toolEnabled = function(toolType, isEnabled) {
		if (!$.isArray(toolType)) {
			toolType = [toolType];
		}

		_this = this;
		$.each(toolType, function(i, type) {
			var tool = _this.dom().find('ul.tools li a.' + type);

			if (isEnabled) {
				tool.removeClass('disabled');
			} else if (isEnabled === false) {
				tool.removeClass('selected').addClass('disabled');
			}
		});
	};

	Tools.prototype.init = function() {
		if (this._numberline.enabled()) {
			this.dom().on( 'mouseup', 'ul.tools li a:not(.disabled)', $.proxy(this.onToolChange, this) );
		}
	};

	Tools.prototype.onToolChange = function(e, toolType) {
		if (!toolType) toolType = $(e.currentTarget).data('tool-type');
		switch (toolType) {
			case WebAssign.Numberline.UNDO:
				$(this._numberline.controller()).triggerHandler('undo.numberline');
				break;
			case WebAssign.Numberline.CLEAR:
				if (confirm("Are you sure you want to reset the tool?")) {
					$(this._numberline.controller()).triggerHandler('clear.numberline');
				}
				break;
			default:
				this.setActiveTool(toolType);
				break;
		}
	};

	return Tools;
})(jQuery, WebAssign.Numberline.View);