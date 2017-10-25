dataSet = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4]
]

hideContent = function() {
    $('.content').hide();
    console.log('456');
}

setData = function(index) {
    var data = dataSet[index];
    var $content = $('.content');
    $content.empty();
    data.forEach(function(item, index) {
        $content.append(`<a href="#">${item}</a>`)
    })
}

setPos = function(index) {
    var $content = $('.content');
    $content.css('top', index * 32 + 'px')
}


$('.wraper li').mouseenter(function(event) {
    var index = $(this).index();
    setData(index);
    setPos(index);
    $('.content').show();
});

$('.content').mouseenter(function() {
    $('.content').show();
})

$('.wraper li, .content').mouseleave(hideContent);
