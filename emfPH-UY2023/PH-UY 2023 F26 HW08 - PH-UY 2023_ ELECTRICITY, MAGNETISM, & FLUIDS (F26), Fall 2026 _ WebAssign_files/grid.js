WebAssign.Numberline.Grid = (function($){
	function Grid(numberline, dom, config){
		this._numberline = numberline;
		this._dom        = $(dom);
		this._renderer   = Raphael( dom, 660, config.gridHeight );
		this._config     = config;
		this._xPadding   = config.xPadding || 30;
		this._xAxisPos   = config.xAxisPos || 50;
		this.drawAxis();
		this.drawTickmarks( config.major_height   || 25, config.major_tickmark_pixel_indices, config.major_tickmark_distance_values );
		this.drawTickmarks( config.minor_height   || 15, config.minor_tickmark_pixel_indices );
		this.drawTickmarks( config.reduced_height || 10, config.reduced_minor_tickmark_pixel_indices );
		this.computeRange( config.major_tickmark_distance_values );

		if (this._numberline.isFlagMode()) {
			this.drawSeparator();
		}
	};

	Grid.prototype.gridY = function() {
		return this._xAxisPos;
	};

	Grid.prototype.width = function() {
		return this._renderer.width;
	};

	Grid.prototype.farLeft = function() {
		return {
			x: 0,
			y: this.gridY()
		}
	};

	Grid.prototype.farRight = function() {
		return {
			x: this.width(),
			y: this.gridY()
		}
	};

	Grid.prototype.computeRange = function( values ) {
		var range   = values.split(',');
		this._xMin  = Number(range[0]);
		this._xMax  = Number(range[range.length-1]);
		this._unitX = (this._renderer.width-this._xPadding*2)/(this._xMax - this._xMin);
	};

	Grid.prototype.drawAxis = function() {
		var arrowSize = 12, path = '';
		path =  'M' + arrowSize + ',' + (this._xAxisPos - arrowSize);
		path += 'L0,' + this._xAxisPos;
		path += 'L' + arrowSize + ',' + (this._xAxisPos + arrowSize);
		path += 'M0,' + this._xAxisPos + 'L' + this._renderer.width + ',' + this._xAxisPos;
		path += 'L' + (this._renderer.width - arrowSize) + ',' + (this._xAxisPos - arrowSize);
		path += 'M' + this._renderer.width + ',' + this._xAxisPos;
		path += 'L' + ( this._renderer.width - arrowSize) + ',' + (this._xAxisPos + arrowSize);

		this._renderer.path( path );
	};

	Grid.prototype.drawTickmarks = function( height, indicies, labels ) {
		if ( !indicies || indicies == 'none' ) return;
		indicies = indicies.split(',');
		labels   = labels ? labels.split(',') : [];
		var path = '';
		var yMin = this._xAxisPos - height/2;
		var yMax = this._xAxisPos + height/2;
		for( var i = 0; i < indicies.length; i++ ) {
			var x = (Number(indicies[i]) + this._xPadding);
			path += 'M' + x + ',' + yMin;
			path += 'L' + x + ',' + yMax;
			if ( labels[i] ) {
				this._renderer.text(x, yMax + 10, labels[i]);
			}
		}
		this._renderer.path(path);

		const tspans = $('body .question .grid text tspan');

		$.each(tspans, function(index, element) {
			$(element).attr('dy', 0);
		});
	};

	Grid.prototype.drawSeparator = function() {
		var path = 'M0,100H' + this._renderer.width;
		this._renderer.path(path);
	};

	Grid.prototype.globalToLocalRange = function( x, y ) {
		var offset = this._dom.offset(),
			localX = x - offset.left,
			localY = y - offset.top;

		return {
			x: Math.min(this._renderer.width - this._xPadding, Math.max(this._xPadding, localX)),
			y: Math.min(this._renderer.height, Math.max(0, localY))
		};
	};

	Grid.prototype.globalToLocal = function( x, y ) {
		var offset = this._dom.offset(),
			localX = x - offset.left,
			localY = y - offset.top;

		return {
			x: Math.min(this._renderer.width, Math.max(0, localX)),
			y: Math.min(this._renderer.height, Math.max(0, localY))
		};
	};

	Grid.prototype.localToUser = function(x, y) {
		return {
			x: this._xMin + (x-this._xPadding)/this._unitX,
			y: y
		};
	};

	Grid.prototype.userToLocal = function(x, y) {
		return {
			x: (x - this._xMin)*this._unitX + this._xPadding,
			y: y
		};
	};

	return Grid;
})(jQuery);