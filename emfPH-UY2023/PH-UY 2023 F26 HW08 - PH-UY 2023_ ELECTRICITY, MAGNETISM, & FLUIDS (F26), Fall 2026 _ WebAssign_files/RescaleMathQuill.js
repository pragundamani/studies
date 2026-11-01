var MathQuillSymbolsRescaler = function (rescalerId) {

    var min = Math.min;

    // This bracket/square-root symbol scaling logic is derived from existing logic located at 
    // https://github.com/webassign/mathquill/blob/master/src/commands/math/commands.js and is 
    // used to re-run the scaling logic on certain symbols in previous responses which are not
    // being scaled properly

    var scale, // = function(jQ, x, y) { ... }
        //will use a CSS 2D transform to scale the jQuery-wrapped HTML elements,
        //or the filter matrix transform fallback for IE 5.5-8, or gracefully degrade to
        //increasing the fontSize to match the vertical Y scaling factor.

        //ideas from http://github.com/louisremi/jquery.transform.js
        //see also http://msdn.microsoft.com/en-us/library/ms533014(v=vs.85).aspx

        div = document.createElement('div'),
        div_style = div.style,
        transformPropNames = {
            transform: 1,
            WebkitTransform: 1,
            MozTransform: 1,
            OTransform: 1,
            msTransform: 1
        },
        transformPropName;

    for (var prop in transformPropNames) {
        if (prop in div_style) {
            transformPropName = prop;
            break;
        }
    }

    if (transformPropName) {
        scale = function (jQ, x, y) {
            jQ.css(transformPropName, 'scale(' + x + ',' + y + ')');
        };
    }
    else if ('filter' in div_style) { //IE 6, 7, & 8 fallback, see https://github.com/laughinghan/mathquill/wiki/Transforms
        scale = function (jQ, x, y) { //NOTE: assumes y > x
            x /= (1 + (y - 1) / 2);
            jQ.css('fontSize', y + 'em');
            if (!jQ.hasClass('mq-matrixed-container')) {
                jQ.addClass('mq-matrixed-container')
                    .wrapInner('<span class="mq-matrixed"></span>');
            }
            var innerjQ = jQ.children()
                .css('filter', 'progid:DXImageTransform.Microsoft'
                    + '.Matrix(M11=' + x + ",SizingMethod='auto expand')"
                );
            function calculateMarginRight() {
                jQ.css('marginRight', (innerjQ.width() - 1) * (x - 1) / x + 'px');
            }
            calculateMarginRight();
            var intervalId = setInterval(calculateMarginRight);
            $(window).load(function () {
                clearTimeout(intervalId);
                calculateMarginRight();
            });
        };
    }
    else {
        scale = function (jQ, x, y) {
            jQ.css('fontSize', y + 'em');
        };
    }

    function rescaleDelims() {
        var prevResponseIFramejQ = jQuery("[data-rescaler-id='" + rescalerId + "'");
        var delimParentsjQs = prevResponseIFramejQ.contents().find('.mq-scaled.mq-paren').parent();
        delimParentsjQs.each(function (index) {
            var delimsPairjQ = jQuery(this).children(':first').add(jQuery(this).children(':last'));
            var contentjQ = jQuery(this).children(':eq(1)');
            var height = contentjQ.outerHeight()
                / parseFloat(contentjQ.css('fontSize'));
            scale(delimsPairjQ, min(1 + .2 * (height - 1), 1.2), (1.2 * height));
        });
    }

    function rescaleSqrts() {
        var prevResponseIFramejQ = jQuery("[data-rescaler-id='" + rescalerId + "'");
        var sqrtjQs = prevResponseIFramejQ.contents().find('.mq-scaled.mq-sqrt-prefix');
        sqrtjQs.each(function (index) {
            var sqrtjQ = jQuery(this);
            var contentjQ = sqrtjQ.next();
            scale(sqrtjQ, 1, contentjQ.innerHeight() / +contentjQ.css('fontSize').slice(0, -2) - .1);
        });
    }

    function rescaleSymbols() {
        rescaleDelims();
        rescaleSqrts();
    }

    // Expose our rescaling function
    return {
        rescaleSymbols: function () {
            return rescaleSymbols();
        }
    }
}
