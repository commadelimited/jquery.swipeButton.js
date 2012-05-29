/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

	test('defaults', function(){
		ok($.fn.swipeDelete.defaults, 'defaults in place');
		equal($.fn.swipeDelete.defaults.direction,'swiperight', 'default are set.');
		$.fn.swipeDelete.defaults.direction = 'swipeleft';
		equal($.fn.swipeDelete.defaults.direction, 'swipeleft', 'defaults can be changed');
	});

	test('chainable', function(){
		ok($('#swipeMe li[data-swipeurl]').swipeDelete().addClass('awesomeSauce'), 'can be chained');
		equal($('#swipeMe li[data-swipeurl]').hasClass('awesomeSauce'), true, 'class was added correctly from chaining');
	});

	test('initialization', function(){
		var $elems = $('#swipeMe li[data-swipeurl]');
		$elems.swipeDelete({
			direction: 'swiperight',
			btnClass: 'aSwipeBtn'
		});
		equal(typeof $elems.data('events').swiperight, 'object', 'swipe event correctly applied');
		equal($('#swipeMe li[data-swipeurl]:first-child .ui-btn').length, 0, 'no buttons currently exist');
	});

	test('triggering', function(){
		var $elems = $('#swipeMe li[data-swipeurl]');
		$elems.swipeDelete({
			direction: 'swiperight',
			btnClass: 'aSwipeBtn'
		});
		$('#swipeMe li[data-swipeurl]:first-child').trigger('swiperight');
		ok($('#swipeMe li[data-swipeurl]:first-child .aSwipeBtn').length, 'button exists in list row');
	});

}(jQuery));



















