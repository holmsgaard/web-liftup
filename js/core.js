var jcd = {
    layout: {
        resizeContainer: function() {
            var $section = $('.section-top'),
                minHeight = $section.css('min-height') ? Number($section.css('min-height').replace('px', '')) : 1000,
                windowHeight = $(window).height(),
                targetHeight = windowHeight > minHeight ? windowHeight : minHeight;

            $('.section-top').css('height', targetHeight + 'px');
        }
    }
}






$(window).on('resize', function(e) {
    jcd.layout.resizeContainer();
});


$().ready(function() {
    jcd.layout.resizeContainer();
    
    // Enably stick menu
    (function() {
        var position = document.body.scrollTop,
            $nav = $('#top-wrapper').clone(),
            $body = $('body'),
            navExists = false,
            triggerPos = 300;
        
        $nav.attr('id', 'top-wrapper-sticky').find('.toplogo').find('img').attr('src', 'img/logo_small.png');
        
        $(document).on('scroll', function(e) {
            position = document.body.scrollTop;
            if (position > triggerPos && !navExists) {
                navExists = true;
                $body.prepend($nav);
                setTimeout(function() {
                    $nav.addClass('top-wrapper-sticky-active');
                }, 100);
            }
            else if (position > triggerPos && navExists) {
                if (!$nav.hasClass('top-wrapper-sticky-active')) {
                    setTimeout(function() {
                        $nav.addClass('top-wrapper-sticky-active');
                    }, 100);
                }
            }
            else {
                $nav.removeClass('top-wrapper-sticky-active');
            }
        });
    })();

});

$(document).foundation();
$.stellar();
