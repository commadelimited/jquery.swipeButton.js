/*! jquery.swipeButton.js - v1.2.1 - 2012-10-06
* http://andymatthews.net/code/swipebutton/
* Copyright (c) 2012 andy matthews; Licensed MIT, GPL */

(function($){

	$.fn.swipeDelete = function(o){

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
						$(this).unbind('click.swipe');
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