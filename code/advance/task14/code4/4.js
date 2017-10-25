$(".tabs").on('click', '.tab', function(event) {
    var index = $(this).index();
    $(this).addClass('select').siblings().removeClass('select');
    $('.panel').eq(index).addClass('active')
               .siblings().removeClass('active');
    $('.wraper').animate({left: index*(-300)}, 1000);
});
