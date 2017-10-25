isVisible = function($node) {
 	var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
 	var offset = $node.offset().top;
 	if(offset > scrollTop && offset < (scrollTop + windowHeight)) {
    	return true;
 	}
    return false;
}


lazyLoad = function() {
    $('img').each(function(index, el) {
        if(isVisible($(this)) && !hasLoaded($(this))) {
            $(this).attr('src', $(this).attr('data-src'));
        }
    });
}

hasLoaded = function($img) {
    return $img.attr('src') === $img.attr('data-src')
}

lazyLoad();
var clock;
$(window).scroll(function() {
    if(clock) {
        clearTimeout(clock);
    }
    clock = setTimeout(lazyLoad, 300);
})
