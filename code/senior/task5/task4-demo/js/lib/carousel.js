Carousel = function($ct) {
    this.$ct = $ct;
    this.init();
    this.bind();
}

Carousel.prototype.init = function() {
    this.$prev = this.$ct.find('.prev-btn');
    this.$next = this.$ct.find('.next-btn');
    this.$bullet = this.$ct.find('.bullet');
    this.$imgContainer = this.$ct.find('.img-container');
    this.$imgs = this.$ct.find('.img-container li');
    this.imgWidth = this.$ct.find('img').width();
    this.curIndex = 0;
    this.slideTime = 1000;
    this.playing = false;
    this.imgCount = this.$imgs.length;

    this.$imgs.first().clone().appendTo(this.$imgContainer);
    this.$imgs.last().clone().prependTo(this.$imgContainer);
    this.$imgContainer.css('left', -this.imgWidth);
    this.$imgContainer.css('width', (this.imgCount + 2) * this.imgWidth);
}

Carousel.prototype.addPlayLock = function(_this) {
    this.playing = true;
}

Carousel.prototype.removePlayLock = function(_this) {
    this.playing = false;
}

Carousel.prototype.isPlaying = function(_this) {
    return this.playing;
}

Carousel.prototype.updateBullet = function() {
    this.$bullet.children().each(function(index, el) {
        $(el).removeClass('active')
    });
    this.$bullet.children().eq(this.curIndex).addClass('active');
}

Carousel.prototype.playPrev = function(_this) {
    if(_this.isPlaying(_this)) {
        return;
    }
    _this.addPlayLock(_this);
    _this.$imgContainer.animate({'left': '+=' + _this.imgWidth}, _this.slideTime, function() {
        _this.curIndex -= 1;
        if(_this.curIndex === -1) {
            _this.$imgContainer.css('left', - _this.imgCount * _this.imgWidth);
            _this.curIndex = (_this.imgCount - 1);
        }
        _this.updateBullet();
        _this.removePlayLock(_this);
    });
}

Carousel.prototype.playNext = function(_this) {
    if(_this.isPlaying(_this)) {
        return;
    }
    _this.addPlayLock(_this);
    _this.$imgContainer.animate({'left': '-=' + _this.imgWidth}, _this.slideTime, function() {
        _this.curIndex += 1;
        if(_this.curIndex === _this.imgCount) {
            _this.$imgContainer.css('left', -_this.imgWidth);
            _this.curIndex = 0;
        }
        _this.updateBullet(_this);
        _this.removePlayLock(_this);
    })
}

Carousel.prototype.locatePic = function(_this, index) {
    if(_this.isPlaying(_this)) {
        return;
    }
    _this.addPlayLock(_this);
    var offset = (index - _this.curIndex);
    var absOffset = Math.abs(offset);
    var distance = Math.abs(offset  * _this.imgWidth);
    if(offset > 0) {
        _this.$imgContainer.animate({'left': '-=' + distance}, _this.slideTime * absOffset, function() {
            _this.curIndex = index;
            _this.updateBullet();
            _this.removePlayLock(_this)
        })
    } else {
        _this.$imgContainer.animate({'left': '+=' + distance}, _this.slideTime * absOffset, function() {
            _this.curIndex = index;
            _this.updateBullet();
            _this.removePlayLock(_this);
        })
    }
}

Carousel.prototype.bind = function() {
    var _this = this;
    this.$prev.click(function(event) {
        event.preventDefault();
        _this.playPrev(_this);
    });
    this.$next.click(function(event) {
        event.preventDefault();
        _this.playNext(_this);
    });
    this.$bullet.children().each(function(index, el) {
        $(el).click(function(event) {
            event.preventDefault();
            _this.locatePic(_this, index);
        });
    });
}


define(function (){
    return {
        Carousel: Carousel
    }
});
