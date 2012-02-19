/*
	Name: jquery.swipeButton.js
	Author: Andy andyMatthews
	Website: http://andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
*/
(function($){

	$.fn.swipeDelete = function(o){
		
		o = $.extend( {}, $.fn.swipeDelete.defaults, o );
		
		return this.each(function(i, el){

			var $e = $(el);
			var $parent = $(el).parent('ul');

			$e.bind(o.direction, function ( e ) {

				// reference the current item
				var $li = $(this);

				// remove all currently displayed buttons
				$('div.ui-btn', $parent).remove();
				
				// create button
				var $swipeBtn = $('<a>' + o.btnLabel + '</a>').attr({
									'data-role': 'button',
									'data-inline': 'true',
									'class': o.btnClass,
									'data-theme': o.btnTheme,
									'href': $li.data('swipeurl')
								})
								.bind('click tap', o.click);
				// insert button into list item
				$li.prepend($swipeBtn).find('.' + o.btnClass ).button();

				// override row click
				$('div a:not(' + o.btnClass + ')', $li).bind('click.swipe', function(e){
					e.stopPropagation();
					e.preventDefault();
					$(this).unbind('click.swipe');
					$li.removeClass('ui-btn-active').find('div.ui-btn').remove();
				})

			});

		});
		
	}

	$.fn.swipeDelete.defaults = {
		direction: 'swiperight',
		btnLabel: 'Delete',
		btnTheme: 'e',
		btnClass: 'aSwipeBtn',
		click: function(e){
			e.preventDefault();
			$(this).parents('li').remove();
		}
	};

})(jQuery);