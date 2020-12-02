var currentScrollTop = 0;
$(function() {
    scrollController();
    $(window).on('scroll', function() {
       scrollController();
   });
});

// 메인 메뉴의 위치를 제어하는 함수
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop < 213) {
        if ($('#header_fixed').hasClass('fixed')) {
            $('#header_fixed').removeClass('fixed');
            $('#container').css('margin-top', 0);
        }
    } else {
        if (!$('#header_fixed').hasClass('fixed')) {
            $('#header_fixed').addClass('fixed');
            $('#container').css('margin-top', 148);
        }
    }
}