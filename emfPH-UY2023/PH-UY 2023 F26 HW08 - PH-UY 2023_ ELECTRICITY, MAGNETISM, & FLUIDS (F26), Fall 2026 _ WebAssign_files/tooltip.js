WebAssign.Numberline.ToolTip = (function($, _super){

	__extends(ToolTip, _super);

	function ToolTip(numberline, tooltip){
		ToolTip.__super__.constructor.apply(this, [numberline, tooltip]);
	}

	ToolTip.prototype.init = function() {
		if (this._numberline.enabled()) {
			this.numberline().dom().on( 'numberline.element-selected', $.proxy(this.onSelectionChange, this) );
			this._numberline.dom().on('numberline.tool-changed', $.proxy(this.onToolChange, this));
			this.dom().on('click', '.action', $.proxy(this.onTypeClick, this));
		}
	};

	ToolTip.prototype.onTypeClick = function(e) {
		var type = $(e.currentTarget).data('render-type');
		this.setRenderType(type);
		$(this.numberline().controller()).triggerHandler('alterElement.numberline', {renderType:type});

		// hide the tooltip and deselect the element
		this._numberline.dom().trigger('numberline.element-selected');
		$(this._numberline.controller()).triggerHandler('clickElement.numberline', {});
	};

	ToolTip.prototype.onToolChange = function(){
		this.dom().hide();
	};

	ToolTip.prototype.onSelectionChange = function(e, selected) {
		if ( selected ) {
			var x = Math.max(0, Math.min(this.numberline().grid().width() - this.dom().outerWidth(), selected.actualX() - this.dom().outerWidth()/2));
			this.setRenderType(selected.renderType());
			this.dom().css('left', x).show();
		} else {
			this.dom().hide();
		}
	};

	ToolTip.prototype.setRenderType = function(type){
		if ( this._type ) {
			this._type.removeClass('selected');
		}
		this._type = this.dom().find('.action.' + type);
		this._type.addClass('selected');
	}

	return ToolTip;
})(jQuery, WebAssign.Numberline.View);