$('nav a').click(function() {
    // update active condition
    var $li = $(this).parent();
    var $container = $li.parent().parent().parent();
    var $siblings = $li.siblings();
    $siblings.removeClass('active');
    $li.addClass('active');
    // update cards
    var index = $li.index();
    var cardsList = $container.find('.cards');
    for (var i = 0; i < cardsList.length; i++) {
        var $cards = $(cardsList[i]);
        $cards.hide();
    }
    $(cardsList[index]).show();
})

$('.cover').on('mouseenter', function(e) {
    $(this).addClass('hover');
})

$('.cover').on('mouseleave', function(e) {
    $(this).removeClass('hover');
})
