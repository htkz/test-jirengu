getImgUrls = function(num) {
    var color, width, height, urls = [];
    for (var i = 0; i < num; i++) {
        color = Math.random().toString(16).substring(2, 8);
        width = Math.floor(Math.random() * 100 + 50);
        height = Math.floor(Math.random() * 30 + 50);
        urls.push("http://placehold.it/" + width + "x" + height + "/" + color + "/fff");
    }
    return urls;
}



resize = function($img, newWidth) {
    $img.css({
        height: '100px',
        width: newWidth
    });
    curWidth += newWidth;
    arrRow.push($img);
    if(curWidth >= ctWidth) {
        arrRow.pop();
        makeImgFit(arrRow, curWidth - newWidth);
        arrRow = [];
        arrRow.push($img);
        curWidth = $img.width();
    }
}

makeImgFit = function(arrRow, widthSum) {
    // widthSum/100 = ctWidth/x
    var $imgRaw = $('<div class="img-row"></div>')
    var newHeight = 100 * ctWidth / widthSum;
    for (var i = 0; i < arrRow.length; i++) {
        var el = arrRow[i];
        // el.width()/el.height() = x/newHeight
        el.css('width', el.width() * newHeight / el.height());
        el.css('height', newHeight);
        $imgRaw.append(el);
    }
    $('.container').append($imgRaw)
}

var imgs = getImgUrls(35);
var ctWidth = $('.container').width();
var curWidth = 0;
var arrRow = [];

for (var i = 0; i < imgs.length; i++) {
    var img = new Image();
    img.src = imgs[i];
    img.onload = function() {
        // width:height = x:100
        var newWidth = this.width * 100 / this.height
        resize($(this), newWidth);
        $('.container').append($(this));
    }
}
