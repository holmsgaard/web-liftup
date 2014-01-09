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
});

$(document).foundation();
$.stellar();