$("#content").css("visibility", "hidden");

$('<img/>').attr('src', '/images/1.png').on('load', function () {
    $(this).remove();
    $('.test1').css('background-image', 'url(/images/1.png)');
    $("#content").css("visibility", "visible");
    AOS.init();
});