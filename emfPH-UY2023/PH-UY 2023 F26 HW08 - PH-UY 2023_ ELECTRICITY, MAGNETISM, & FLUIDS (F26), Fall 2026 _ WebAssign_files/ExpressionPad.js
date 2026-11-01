(function($) {
	$.fn.ExpressionPad = function(options) {
		return this.each(function() {
			var self = this;
			var isIpad     = navigator.userAgent.match(/iPad/i);

			function checkForInvalidCharacters(input) {

				// Function to check for invalid characters
                //Remove characters that are valid when used as a whole, but not individually.
                var toRemove = "(?:\\\\left\\u007C|\\\\right\\u007C)";
                var removeRegex = new RegExp(toRemove, 'g');
                input = input.replace(removeRegex, " ");

                var greekChars = '\\u0391-\\u03a1\\u03a3-\\u03a9\\u03b1-\\u03c9';
				var symbols = {
					scriptl:   '\\u2113',
					scriptE:   '\\u2130',
					infinity:  '\\u221e',
					bullet:	   '\\u2022',
					intersect: '\\u2229',
					union:     '\\u222a',
                    emptySet:  '\\u2205',
                    degree:    '\\u00B0',
                    minus:     '\\u2212',
                    middot:    '\\u00B7',
                    division:  '\\u00F7',
					le:        '\\u2264',
					ge:        '\\u2265',
                    notSign:   '\\u00AC',
					hbar:      '\\u210F',
					perpendicular: '\\u22A5',
					parallel:  '\\u2225',
					prime: 	   '\\u2032'
				}
				var padChars = '';
				Object.keys(symbols).map(function(name) {
					return padChars += symbols[name];
				});
				var validChars = '\\u0020-\\u007e' + greekChars + padChars;
				var invalidChars = '\\u0060\\u007C';

                // mathquill can somtimes leave the current latex representation in a bad state
				// so we need to check for these and warn as well
				var blocklist = "(?:\\\\text\\{\\s*undefined\\s*\\})";

				var regex = new RegExp('[' + invalidChars + ']|[^' + validChars + ']|' + blocklist, 'g');
				var count =  input.match(regex);
				if(count === null) {
					return 0;
				} else {
					return count.length;
				}
			}


			function warnInvalidCharacters(questionId, type) {
				var ids = $("#editable-math-" + questionId);
				var thisBox = ids[0];
				var input  =  '';
				var warning = $(".mathpad-" + questionId  + "-warning-wrapper");


                if(type == 'reload') {
					// If on page load, then parse the hidden xml field for the student's response
                    input = $('#' + questionId).val();
			    	if(input != '') { input = $.INST().externalXml.xmlToLaTex(input); }
				} else {
                    // If the pad is used or a button is pressed, then parse the mathquil box which contains real time changes to the response
                    input  =  MathQuill.MathField(thisBox).latex();
                }
                if (input != '') {
					//If the student enters an invalid character, send a warning.
					var invalidCharacters = checkForInvalidCharacters(input);
					if(invalidCharacters) {
                        var span = $("<span>", {"class": "mathpad-warning"});
                        var caution = $("<img>", {"src": "/static/img/common/caution.svg",  "style": "width: 25px; height: 25px;margin-top: 7.5px;margin-right: 10px;margin-left: 10px;float: left" });

                        var characters = invalidCharacters == 1 ? "character" : "characters";
                        var textSpan = $("<span>", {"style": "float: left;"});
                        var bold = $("<h3>", { "text": "Your answer includes " + invalidCharacters + " " + characters + " that can't be graded. ", "style": "margin: 0px;" });
                        var p1 = $("<span>", { "text": "Delete your recent changes and use the pad tools to finish your answer. " });
                        p1.append($("<a>", {"href" : "https://help.cengage.com/webassign/student_guide/?t=unsupported_pad_chars", "target" : "_new", "alt": "More information about unsupported characters", "text" : "More information" }));

                        textSpan.append(bold);
                        textSpan.append(p1);

                        span.append(caution);
                        span.append(textSpan);

                        if(warning.children().length > 0) {
                            warning.children(0).replaceWith(span);
                            }
                            else {
                                warning.append(span);
                            }
                            return;
                        } else {
                            warning.text("");
                        }
                }
                else { warning.text("") }
            }

			function buildPad(padConfig, padName) {
				var padElements = [];
				padElements.push($('<div class="mathHeader '+padName+'"><h3>'+padName+'</h3></div>'));

				var $content = $('<div class="mathContent"></div>');
				$.each(padConfig[padName], function(index, drawer) {
					var $panel = $('<div class="mathPanel" id="'+drawer.name+'">');
					var $panelTitle = $('<a href="#" class="mathPanelTitle">'+drawer.name+'</a>');
					if (drawer.properties.open) {
						$panelTitle.addClass('defaultOpen activePanel');
					}
					$panel.append($panelTitle);

					$.each(drawer.buttons.pages, function(index, page) {
						$panel.append(buildPage(index, page, drawer.properties));
					});

					$content.append($panel);
				});


				padElements.push($content);
				padElements.push($('<div class="mathFooter"><a class="padHelp" topic="' + padName + 'pad">Help</a>'));

				return padElements;
			};

			function buildButton(name) {
				return $('<a href="#" title="'+name+'" id="'+name+'" class="operation"></a>');
			};

			function buildRow(buttons) {
				var $row = $('<div></div>').addClass('singleRow');
				$.each(buttons, function(i, buttonName) {
					$row.append(buildButton(buttonName));
				});
				return $row;
			};

			function buildPage(pageIndex, pageData, config) {
				var $page = $('<div class="buttonPanel"></div>'),
					buttons = [];

				$.each(pageData, function(key, value) {
					buttons.push(value);

					// create a new row with the current buttons
					if ((key % config.columns == (config.columns - 1)) || (key == pageData.length - 1)) {
						$page.append(buildRow(buttons));
						buttons = [];
					}
				});

				// @todo: fix this hack for greek letter styling to better handle any multipage drawer
				if (config.multipage) {
					if (config.columns == 3) {
						$page.find('.singleRow').addClass('singleGreek');
					}

					if (pageIndex == 0) {
						$page.addClass('firstPage');
						$page.append('<a class="singleRowArrow"><span class="nextPage"></span></a>');
					} else {
						$page.addClass('lastPage');
						$page.prepend('<a class="singleRowArrow"><span class="prevPage"></span></a>');
					}
				}

				return $page;
			};

			var cache = {};
			var padConfig = $(self).data('expressionpad'),
				buttonConfig = $(self).data('buttonconfig');

			/**
			 * Builds and renders the requested pad
			 *
			 * @param string type
			 */
			function render(type) {
				if (type == 'devmath') { type = 'math'; }

				if (!cache[type]) {
					cache[type] = buildPad(padConfig, type);
				}

				$(self).empty();
				cache[type].each(function(el) {
					$(self).append(el);
				});
				$.INST().operation.render(buttonConfig);
			}

			var INST = {
				data: {
					padConfig: padConfig,
					buttonConfig: buttonConfig
				},
				animate: new AnimationsEffect(),
				panel: new PanelContainer(),
				operation: new ButtonsOperation(),
				xmlGenerator: new XmlGenerator(),
				externalXml: new ExternalXml(),
				validate: function(id, type) { warnInvalidCharacters(id, type) }
			};

			$.INST = function() {
				return INST;
			};

			var latexMath,
			xmlSource;

			$.latexMath = function(value) {
				if (value) {
					latexMath = value;
				}
				return latexMath;
			}

			$.xmlSource = function(value) {
				if (value) {
					xmlSource = value;
				}
				return xmlSource;
			}


			var idInputOperation = 1,
				oldInput		 = 0,
				oldPadType	   = 0;

			$.INST().operation.init();

			// Hide the modal dialog when someone clicks outside of it.
			$(document).bind('mousedown keyup', function (ev) {
				var t = $(ev.target);
				var panelCheck = t.parents().andSelf().hasClass('mathContainer');
				var parentCheck = t.parents().andSelf().hasClass('mathquill-editable');
				var wrapperCheck = t.parents().andSelf().hasClass('mathpad-wrapper');
				var childCheck = t.children().andSelf().hasClass('mathquill-editable');
				if( !(panelCheck || parentCheck || (wrapperCheck && childCheck)) ) {
					$('.mathquill-editable-focused').removeClass('mathquill-editable-focused');
					$('.mathquill-editable-focused').removeClass('mathquill-editable-focused-ipad');
					$('.mathContainer').hide();
					$.INST().animate.closeExpandedPanel();
					oldInput = 0;

					// Trigger a padChanged event to cause the mark to go grey (if the answer has changed)
					$(".mathpad-wrapper").next().each(function() {
						this.fireEvent("padChanged", this);
					});
				}
			});

			$('body').on('click', 'a.padHelp', function(evt) {
				var topic = $(evt.currentTarget).attr("topic");
				openWindow( 'https://help.cengage.com/webassign/student_guide/?t=' + topic ,'Help','width=937,height=623,scrollbars=yes');
			});

			// MathQuill-ify the pads!
			$('.mathquill-editable').each(function() {
				MathQuill.MathField(this, {
					restrictMismatchedBrackets: true,
					autoCommands: 'ge le sqrt alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Delta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omicron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega union intersect empty abs hbar infinity exp',
					autoOperatorNames: 'NOSOLUTION UNDEFINED DNE sin asin arcsin sinh asinh arcsinh cos acos arccos cosh acosh arccosh tan atan arctan tanh atanh arctanh sec asec arcsec sech asech arcsech csc acsc arccsc csch acsch arccsch cot acot arccot coth acoth arccoth log ln'
				});
			});

			$('.mathquill-embedded-latex.disabled').each(function() {
				MathQuill.StaticMath(this);
			});

			// @todo: we should consider doing this only when the input
			//		enters the viewport so that we don't have to parse
			//		every question on the page on load
			$('.mathquill-editable, .mathquill-embedded-latex').each(function(){
				var latex,
					questionId = $(this).attr('id').split('editable-math-')[1];
					warnInvalidCharacters(questionId, 'reload');
					prevAnswer = $('#' + questionId).val();
				if (prevAnswer != '') {
					latex = $.INST().externalXml.xmlToLaTex(prevAnswer);
					MathQuill(this).latex(latex);

					// "Harden" any parens that didn't automagically harden on their own. This mainly
					// affects langle and rangle brackets
					jQuery(this).find('.mq-ghost').removeClass('mq-ghost');
				}
			});

			$('.mathquill-editable').bind('mathquill.cursormove', function(evt, cursor){
				var $this = $(this);
				if( !('scrollTimeout' in cursor) ) {
					cursor.scrollTimeout = setTimeout(function(){
						delete cursor.scrollTimeout;
						if ( !cursor.parent().length ) return;
						var wrapper	 = $this.parents('.mathquill-scroll-wrapper');
							borderLeft  = $this.offset().left,
							cursorPos   = cursor.offset().left - borderLeft,
							scrollPos   = wrapper.scrollLeft(),
							borderRight = wrapper.outerWidth() + scrollPos,
							padding	 = 20;

						wrapper.find('textarea').css('left', cursorPos).css('top', wrapper.outerHeight()/2);
						if ( cursorPos < scrollPos+padding ) {
							wrapper.scrollLeft(cursorPos - padding);
						} else if ( cursorPos > borderRight-padding ) {
							wrapper.scrollLeft(scrollPos + (cursorPos - borderRight + padding));
						}

					}, 1);
				}
			});

			function openPad(thisPad) {
				idInputOperation = $(thisPad).attr('id').split('editable-math-')[1];
				var oldId = $('.mathquill-editable-focused').attr('id');
				if(oldId) {
					oldId = oldId.split('editable-math-')[1];
				} else {
					oldId = '';
				}
				if(idInputOperation != oldId) {
					$('.mathquill-editable-focused').removeClass('mathquill-editable-focused');
					$(thisPad).addClass('mathquill-editable-focused');
					if (isIpad) {
						$(thisPad).addClass('mathquill-editable-focused-ipad');
					}
					if(oldInput != idInputOperation){
						$.INST().animate.closeExpandedPanel();
						$.latexMath($(thisPad));
						$.INST().panel.detectFocus();
						var padType = $(thisPad).data('type');
						if (padType != oldPadType) {
							render(padType);
							oldPadType = padType;
						}
						$.INST().panel.showPanel($(thisPad));
						if (window.frameElement) {
							// we're in an iframe - let the parent know when we show
							// a new pad panel since it might need to resize, etc.
							var renderPadEvent = new CustomEvent('render pad', {
								bubbles: true
							});
							window.frameElement.dispatchEvent(renderPadEvent);
						}
						oldInput = idInputOperation;
						$.xmlSource($('#' + idInputOperation));
					}
				}
			};

            if(isIpad) {
                $(document).on('input', function(evt) {
                    var thisPad = $('.mq-focused');
                    if (thisPad.length) {
                        var questionId = $(thisPad).attr('id').split('editable-math-')[1];
                        warnInvalidCharacters(questionId, 'keyboard');
                    }
                });
            }

            $(document).on('keyup', function(evt) {
                var thisPad = $('.mq-focused');
                if (thisPad.length) {
                    var questionId = $(thisPad).attr('id').split('editable-math-')[1];
                    warnInvalidCharacters(questionId, 'keyboard');
                }
            });

			function adjustScroll(target, fromPanel) {
				setTimeout(function() {
					var thisTarget = $(target);
					var thisWrapper = thisTarget;
					if(!thisTarget.hasClass('mathquill-scroll-wrapper')) {
						if(!thisWrapper.hasClass('.mathpad-wrapper')) {
							thisWrapper = $(thisTarget.parents('.mathpad-wrapper')[0]);
						}
						var cursor = thisWrapper.find('.mq-cursor')[0];
						var selection = thisWrapper.find('.mq-selection')[0];
						var userInput = cursor;
						if(!cursor) {
							userInput = selection;
						}
						if(fromPanel && $(cursor).parent()[0] && !$(cursor).parent()[0].hasClass('mq-root-block')) {
							userInput = $(cursor).parent()[0];
						}
						if(userInput) {
							var scrollDiv = thisWrapper.children('.mathquill-scroll-wrapper')[0];
							userInput = $(userInput);
							var positionCursor = userInput.offset().left + userInput.outerWidth();
							var wrapperLeft = thisWrapper.offset().left;
							var wrapperRight = wrapperLeft + thisWrapper.outerWidth();
							if(wrapperRight - wrapperLeft >= 700) {
								//Max size of answer blank
								var extraScroll = 10;
								var totalScroll = positionCursor - wrapperLeft + extraScroll;
								if(positionCursor < wrapperRight) {
									totalScroll += -(extraScroll) - (wrapperRight - wrapperLeft)/4;
								}
								scrollDiv.scrollLeft += totalScroll;
							}
						}
					}
				}, 3);
			}

			$('.mathpad-wrapper').on('keyup', function(evt) {
				adjustScroll(evt.target, 0);
			});

			$(document).on('mouseup', function(evt) {
				var operationCheck = $(evt.target).parents().andSelf().hasClass('operation');
				var panelCheck = $(evt.target).parents().andSelf().hasClass('buttonPanel');
				if(panelCheck && operationCheck) {
					adjustScroll($('.mathquill-editable-focused')[0], 1);
				}
			});

			$(document).bind('keyup', function(evt) {
				var thisPad = $('.mq-focused');

                if (!thisPad.length || thisPad.hasClass('mathquill-editable-focused')) {
					return;
				}
				openPad(thisPad[0]);
			});

			$('.mathquill-editable').bind('mousedown', function(evt) {
				openPad(this);
			});

			$.INST().animate.accordionList();
		});
	};
})(jQuery)
