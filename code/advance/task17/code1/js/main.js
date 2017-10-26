var $prev = $('.prev-btn');
var $next = $('.next-btn');
var $bullet = $('.bullet');
var $imgContainer = $('.img-container');
var $imgs = $('.img-container li');
var imgCount = $imgs.length;
var imgWidth = $('.carousel img').width();
var curIndex = 0;
var slideTime = 1000;
var playing = false;

$imgs.first().clone().appendTo($imgContainer);
$imgs.last().clone().prependTo($imgContainer);
$imgContainer.css('left', -imgWidth);
$imgContainer.css('width', (imgCount + 2) * imgWidth);

addPlayLock = function() {
    playing = true;
}

removePlayLock = function() {
    playing = false;
}

isPlaying = function() {
    return playing;
}


updateBullet = function() {
    $bullet.children().each(function(index, el) {
        $(el).removeClass('active')
    });
    $bullet.children().eq(curIndex).addClass('active');
}

playPrev = function() {
    if(isPlaying()) {
        return;
    }
    addPlayLock();
    $imgContainer.animate({'left': '+=' + imgWidth}, slideTime, function() {
        curIndex -= 1;
        if(curIndex === -1) {
            $imgContainer.css('left', -imgCount * imgWidth);
            curIndex = (imgCount - 1);
        }
        updateBullet();
        removePlayLock();
    });
}

playNext = function() {
    if(isPlaying()) {
        return;
    }
    addPlayLock();
    $imgContainer.animate({'left': '-=' + imgWidth}, slideTime, function() {
        curIndex += 1;
        if(curIndex === imgCount) {
            $imgContainer.css('left', -imgWidth);
            curIndex = 0;
        }
        updateBullet();
        removePlayLock();
    })
}

locatePic = function() {
    if(isPlaying()) {
        return;
    }
    addPlayLock();
    var index = $(this).index();
    var offset = (index - curIndex);
    var absOffset = Math.abs(offset);
    var distance = Math.abs(offset  * imgWidth);
    if(offset > 0) {
        $imgContainer.animate({'left': '-=' + distance}, slideTime * absOffset, function() {
            curIndex = index;
            updateBullet();
            removePlayLock()
        })
    } else {
        $imgContainer.animate({'left': '+=' + distance}, slideTime * absOffset, function() {
            curIndex = index;
            updateBullet();
            removePlayLock();
        })
    }
}

$prev.click(playPrev);
$next.click(playNext);
$bullet.children().each(function(index, el) {
    $(el).click(locatePic);
});

setInterval(playNext, 2000);
