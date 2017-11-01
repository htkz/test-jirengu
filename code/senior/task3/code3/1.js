// isVisible = function($node) {
//  	var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();
//  	var offset = $node.offset().top;
//  	if(offset > scrollTop && offset < (scrollTop + windowHeight)) {
//     	return true;
//  	}
//     return false;
// }


// lazyLoad = function() {
//     $('img').each(function(index, el) {
//         if(isVisible($(this)) && !hasLoaded($(this))) {
//             $(this).attr('src', $(this).attr('data-src'));
//         }
//     });
// }

// hasLoaded = function($img) {
//     return $img.attr('src') === $img.attr('data-src')
// }

// lazyLoad();
// var clock;
// $(window).scroll(function() {
//     if(clock) {
//         clearTimeout(clock);
//     }
//     clock = setTimeout(lazyLoad, 300);
// })


LazyLoad = function($el, _this) {
    this.$el = $el;
    if(!_this) {
        var _this = this;
    }
    $el.each(function(index, el) {
        if(_this.isVisible($(el)) && !_this.hasLoaded($(el))) {
            $(el).attr('src', $(el).attr('data-src'));
        }
    });
    _this.init();
}

LazyLoad.prototype.isVisible = function($node) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
 	var offset = $node.offset().top;
 	if(offset > scrollTop && offset < (scrollTop + windowHeight)) {
    	return true;
 	}
    return false;
}

LazyLoad.prototype.hasLoaded = function($img) {
    return $img.attr('src') === $img.attr('data-src');
}

LazyLoad.prototype.init = function() {
    var _this = this;
    var clock;
    $(window).scroll(function() {
        if(clock) {
            clearTimeout(clock);
        }
        clock = setTimeout(function() {
            LazyLoad(_this.$el, _this);
        }, 300);
    })
}

var exposure = new LazyLoad($('.container img'));
