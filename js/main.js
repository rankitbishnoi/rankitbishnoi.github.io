
		$(function(){

			/*-------------------------------

				GENERAL EXAMPLES

			-------------------------------*/

			
			// HTML for content
			$('.html_popup').popup({
				content		: '<h1>This is some HTML</h1>',
				type		: 'html'
			});

		});
			

		/*---------------------

			JQUERY EASING

		*/

		$.extend($.easing, {
			easeOutBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
			},
			easeInBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c*(t/=d)*t*((s+1)*t - s) + b;
			}
		});
	