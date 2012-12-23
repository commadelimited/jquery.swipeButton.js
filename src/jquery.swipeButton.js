/*
	Name: jquery.swipeButton.js
	Author: Andy andyMatthews
	Website: http://andyMatthews.net
	Version: 1.2.1
*/
(function($){

	$.fn.swipeDelete = function(o){

		$(this).attr("data-swipeurl",""); //setting data-swipeurl on the li --Added: 2012/12/15
		
		o = $.extend( {}, $.fn.swipeDelete.defaults, o );
		
		return this.filter('[data-swipeurl]').each(function(i, el){
			var $e = $(el);
			var $parent = $(el).parent('ul');

			$e.on(o.direction, function ( e ) {

				// reference the current item
				var $li = $(this);
				var cnt = $('.ui-btn', $li).length;

				// remove all currently displayed buttons
				$('div.ui-btn, .' + o.btnClass, $parent).animate({ width: 'toggle' }, 200, function(e) {
					$(this).remove();
				});

				// if there's an existing button we simply delete it, then stop
				if (!cnt) {
					// create button
					var $swipeBtn = $('<a>' + o.btnLabel + '</a>').attr({
										'data-role': 'button',
										'data-mini': true,
										'data-inline': 'true',
										'class': (o.btnClass === 'aSwipeBtn') ? o.btnClass : o.btnClass + ' aSwipeBtn',
										'data-theme': o.btnTheme,
										'href': $li.data('swipeurl')
									})
									.on('click tap', o.click);

					// slide insert button into list item
					$swipeBtn.prependTo($li).button();
					$li.find('.ui-btn').hide().animate({ width: 'toggle' }, 200);

					// override row click
					$('div a:not(' + o.btnClass + ')', $li).on('click.swipe', function(e){
						e.stopPropagation();
						e.preventDefault();
						$(this).off('click.swipe');
						$li.removeClass('ui-btn-active').find('div.ui-btn').remove();
					});

				}


			});

		});
	};

	$.fn.swipeDelete.defaults = {
		direction: 'swiperight',
		btnLabel: 'Delete',
		btnTheme: 'e',
		btnClass: 'aSwipeBtn',
		click: function(e){
			e.preventDefault();
			$(this).parents('li').slideUp();
		}
	};

}(jQuery));
