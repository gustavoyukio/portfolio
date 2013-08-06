"use strict";

// declare as variáveis
var trim, placeholder;

//trim
trim = function (str) {
    return str.replace(/^\s+|\s+$/g,"");
}

placeholder = {
    'confirm': function (a) {
        var v = $(a).attr("placeholder");

        if ( trim($(a).val()) == "" || trim($(a).val()) == undefined ) {
            $(a).val(v);
        } else if ( trim($(a).val()) == trim(v) ) {
            $(a).val("");
        }
    },
    'hold': function (a) {
        $(a).on({
            'focus': function (){
                placeholder.confirm($(this));
            },
            'blur': function (){
                placeholder.confirm($(this));
            }
        });
    }
}

// Doc ready
$(function(){

    // Nice scroll
    // $("body").niceScroll();

    // Stelar
    $.stellar({
      // Set scrolling to be in either one or both directions
      horizontalScrolling: false,
      verticalScrolling: true,

      // Set the global alignment offsets
      horizontalOffset: 40,
      verticalOffset: 5,

      // Refreshes parallax content on window load and resize
      responsive: true,

      // Select which property is used to calculate scroll.
      // Choose 'scroll', 'position', 'margin' or 'transform',
      // or write your own 'scrollProperty' plugin.
      scrollProperty: 'scroll',

      // Select which property is used to position elements.
      // Choose between 'position' or 'transform',
      // or write your own 'positionProperty' plugin.
      positionProperty: 'position',

      // Enable or disable the two types of parallax
      parallaxBackgrounds: false,
      parallaxElements: true,

      // Hide parallax elements that move outside the viewport
      hideDistantElements: false,

      // Customise how elements are shown and hidden
      hideElement: function($elem) { $elem.hide(); },
      showElement: function($elem) { $elem.show(); }
    });

    // Only IE
    if (navigator.userAgent.match("MSIE")) {
        // Placeholder
        placeholder.hold("input, textarea");

        // PIE (border-radius, gradient, box-shadow)
        if (window.PIE) {
            var elements = 'input, textarea, .round';
            
            $(elements).each(function() {
                PIE.attach(this);
            });
        }
    }
});
