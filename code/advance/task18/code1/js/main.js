waterFull = function() {
    var curHeight = [];
    var $items = $('.item');
    var itemWidth = $items.width()
    var colNum = parseInt($('.content').width() / (itemWidth));
    for (var i = 0; i < colNum; i++) {
        curHeight.push(0);
    }

    function getIndexOfMinValue(numArray) {
      var indexOfMinValue = numArray.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
      return indexOfMinValue;
    }

    $items.each(function(index, el) {
        var index = getIndexOfMinValue(curHeight);
        var minHeight = curHeight[index];
        $(el).css('left', $(this).outerWidth(true) * index);
        $(el).css('top', minHeight);
        curHeight[index] += $(this).outerHeight(true);
    });


}

var WaterFull = (function() {
    waterFull();
    $(window).resize(function(event) {
        waterFull();
    });
    return {
        init: waterFull
    }
})()
