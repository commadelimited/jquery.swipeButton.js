/*
Name: jquery.swipeButton.js
Author: Andy andyMatthews
Forked by: Jeff Hansen (jeffijoe)
Website: http://andyMatthews.net
Version: 1.2.4
*/
(function ($) {

    $.fn.swipeDelete = function (o) {

        o = $.extend({}, $.fn.swipeDelete.defaults, o);

        return this.filter('li').not('[data-role="list-divider"]').each(function (i, el) {
            var $e = $(el);
            var $parent = $(el).parent('ul');

            $e.on(o.direction, function (e) {

                // reference the current item
                var $li = $(this);
                var cnt = $('.ui-btn', $li).length;

                // remove all currently displayed buttons
                $('div.ui-btn, .' + o.btnClass, $parent).animate({ width: 'toggle' }, 200, function (e) {
                    $(this).remove();
                });

                // Remove the click override from the li
                $li.find("div a:not(' + o.btnClass + ')").off("vclick.swipe");

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
                    }).one("vclick", function (e) {
                        // Remove the button on click/tap if specified in the config
                        if (o.alwaysRemove)
                        $(this).animate({ width: "toggle" }, function () {
                            $(this).remove();
                            $li.find("div a:not(' + o.btnClass + ')").off("vclick.swipe");
                        });
                        o.click($li,e);
                    });

                    // slide insert button into list item
                    $swipeBtn.prependTo($li).button();
                    $li.find('.ui-btn').hide().animate({ width: 'toggle' }, 200);

                    // override row click
                    $li.on('vclick.swipe', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $(this).off('vclick.swipe');
                        $li.removeClass('ui-btn-active');
                        $swipeBtn.animate({ width: 0 }, function() {
                            $(this).remove();
                        });
                    });

                }
            });

        });
    };

    $.fn.swipeDelete.defaults = {
        alwaysRemove: true,
        direction: 'swiperight',
        btnLabel: 'Delete',
        btnTheme: 'e',
        btnClass: 'aSwipeBtn',
        click: function (e) {
            e.preventDefault();
            $(this).parents('li').slideUp();
        }
    };

} (jQuery));