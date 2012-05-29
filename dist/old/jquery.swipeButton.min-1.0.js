/*
	Name: jquery.swipeButton.js
	Author: Andy Matthews
	Website: http://andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
*/
(function($){$.fn.swipeDelete=function(o){o=$.extend({},$.fn.swipeDelete.defaults,o);return this.each(function(i,el){var $e=$(el),$parent=$(el).parent('ul');$e.bind(o.direction,function(e){var $li=$(this);$('div.ui-btn, .'+o.btnClass,$parent).remove();var $swipeBtn=$('<a>'+o.btnLabel+'</a>').attr({'data-role':'button','data-inline':'true','class':o.btnClass,'data-theme':o.btnTheme,'href':$li.data('swipeurl')}).bind('click tap',o.click);$li.prepend($swipeBtn).find('.'+o.btnClass).button();$('div a:not('+o.btnClass+')',$li).bind('click.swipe',function(e){e.stopPropagation();e.preventDefault();$(this).unbind('click.swipe');$li.removeClass('ui-btn-active').find('div.ui-btn').remove()})})})};$.fn.swipeDelete.defaults={direction:'swiperight',btnLabel:'Delete',btnTheme:'e',btnClass:'aSwipeBtn',click:function(e){e.preventDefault();$(this).parents('li').remove()}}})(jQuery);