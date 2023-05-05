(function ($) {
    $(function () {
        $('.toggle-overlay').click(function () {
            $('aside').toggleClass('open');
            $('.bar').toggleClass('animate');
        });
    });
})(jQuery);