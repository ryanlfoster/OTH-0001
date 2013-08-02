/**
 * Author: Michael Fuerst, wolkenkraft.com Software Engineering
 * URL: http://www.wolkenkraft.com
 * Description: jQuery File for control of responsive navbar
 */

(function () {

    $.fn.rwdNav = function (options) {

        // The navigation
        var $nav, $isSwipping;
        $nav = $(this);

        console.log($nav);

        // Add "has-child" class to all list items with sub-elements and
        // hide the submenu
        $nav.find("li").each(function () {
            if ($(this).has("ul").length) {
                return $(this).addClass("has-child").find("ul").hide();
            }
        });

        /***********************************
         * Control for menu items
         ***********************************/
        $selector = '.has-child'

        // Touch control
        $($selector).on('touchstart mousedown',function (e) {

            $isSwipping = false;

            // Skip actions if user swipes the menu
            return $(this).on('touchmove mousemove', function (e) {
                $isSwipping = true;
                return $(window).off("touchmove mousemove");
            });

        }).on('touchend mouseup', function (e) {

            e.preventDefault();
            e.stopPropagation();

            // Only open the submenu, if the touch does not come from a swipe action
            if ($isSwipping === false) {
                //$childElement = $(this).parent('.has-child').find('>ul');
                $childElement = $(this).find('>ul');
                $childElement.toggle();
            }

        });

        // Mouse control
        $($selector).hover(function(e) {
            $childElement = $(this).find('>ul');
            $childElement.toggle();
        },function(e) {
                $childElement = $(this).find('>ul');
                $childElement.toggle();
        });

        /***********************************
         * Control for responsive buttons
         ***********************************/
        $selector = '.responsive-buttons .btn';
        $($selector).on('touchstart mousedown', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $childElement = $(this).attr('data-target');
            $($childElement).toggle();

            // Close any open div´s
            $('.collapse-element').not($childElement).hide();

        });


    };

}).call(this);

/**
 !function ($) {

    // Here we add either "desktop" or "mobile" CSS Class to the main navigation container.
    // This makes styling easier and more flexible

    setNavClass();
    $(window).resize(function() {
        setNavClass();
    });

    // Set the hover handler / works with tap on touchscreens
    // use .has instead of :has for better DOM performance
    $('.wolkenkraft-rwd-navbar li').has('ul').hover(menuHandlerIn, menuHandlerOut);


    // What happens when one of the responsive buttons is clicked
    $('.responsive-buttons .btn').click(btnClick);

    function menuHandlerIn(e) {
        $(this).find('>ul').slideToggle();
    }

    function menuHandlerOut(e) {
        $(this).find('>ul').slideToggle();
    }

    function btnClick(e) {
        $target = $(this).attr('data-target');
        console.log($target);
        $($target).slideToggle();
    }

    // Add "has-child" class to all list items with sub-elements
    $('.wolkenkraft-rwd-navbar li').has('ul').addClass('has-child');

    function setNavClass() {
        if ($('.wolkenkraft-rwd-navbar .responsive-buttons').is(":visible")) {
            $('.wolkenkraft-rwd-navbar').addClass('mobile').removeClass('desktop');
        } else {
            $('.wolkenkraft-rwd-navbar').addClass('desktop').removeClass('mobile');
        }
    }

}(jQuery);

 **/
