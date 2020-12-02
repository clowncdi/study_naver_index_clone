$(function() {
    $(".btn_keyboard").click(function(e) {
        e.preventDefault();
        $("#pop_keyboard").slideToggle(100);
        $("#pop_auto").slideUp(100);
    });
     $(".btn_arr").click(function(e) {
        e.preventDefault();
        $("#pop_auto").slideToggle(100);
        $("#pop_keyboard").slideUp(100);
    });
});