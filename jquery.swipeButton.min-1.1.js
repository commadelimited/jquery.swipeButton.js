/*
	Name: jquery.swipeButton.min.js
	Author: Andy andyMatthews
	Website: http://andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
	Version: 1.1
*/
(function($){$.fn.swipeDelete=function(o){o=$.extend({},$.fn.swipeDelete.defaults,o);return this.filter('[data-swipeurl]').each(function(i,el){var $e=$(el),$parent=$(el).parent('ul');$e.bind(o.direction,function(e){var $li=$(this),cnt=$('div.ui-btn',$li).length;$('div.ui-btn, .'+o.btnClass,$parent).animate({width:'toggle'},200,function(e){$(this).remove()});if(!cnt){var $swipeBtn=$('<a>'+o.btnLabel+'</a>').attr({'data-role':'button','data-inline':'true','class':o.btnClass,'data-theme':o.btnTheme,'href':$li.data('swipeurl')}).bind('click tap',o.click);$swipeBtn.prependTo($li).button();$li.find('.ui-btn').hide().animate({width:'toggle'},200);$('div a:not('+o.btnClass+')',$li).bind('click.swipe',function(e){e.stopPropagation();e.preventDefault();$(this).unbind('click.swipe');$li.removeClass('ui-btn-active').find('div.ui-btn').remove()})}})})};$.fn.swipeDelete.defaults={direction:'swiperight',btnLabel:'Delete',btnTheme:'e',btnClass:'aSwipeBtn',click:function(e){e.preventDefault();$(this).parents('li').slideUp()}}})(jQuery);