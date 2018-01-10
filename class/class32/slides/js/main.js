init = function() {
    curPage = 1;
    lock = false;

    slides = $('.slide');
    firstChild = slides.first().clone(true);
    lastChild = slides.last().clone(true);
    firstChild.appendTo(slides.parent())
    lastChild.prependTo(slides.parent());
}

unLock = function() {
    lock = false;
}

addLock = function() {
    lock = true;
}

bindEvents = function() {
    $('.prevbtn').on('click', function(event) {
        if (lock) {
            return;
        }
        addLock();
        if (curPage !== 1) {
            $('.gallery .slides').animate({marginLeft: '+=920px'}, 300, 'linear', function(){
                curPage -= 1;
                unLock();
            });
        } else {
            curPage = 4;
            $('.gallery .slides').animate({marginLeft: '+=920px'}, 300, 'linear', function(){
                $('.gallery .slides').animate({marginLeft: '-3680px'}, 0, unLock);
            });
        }
    });

    $('.nextbtn').on('click', function(event) {
        if (lock) {
            return;
        }
        addLock();
        if (curPage !== 4) {
            $('.gallery .slides').animate({marginLeft: '-=920px'}, 300, 'linear', function(){
                curPage += 1;
                unLock();
            });
        } else {
            curPage = 1;
            $('.gallery .slides').animate({marginLeft: '-=920px'}, 300, 'linear', function(){
                $('.gallery .slides').animate({marginLeft: '-920px'}, 0, unLock);
            });
        }
    });

    $('.bottomNav').on('click', '.page', function(event) {
        if (lock) {
            return;
        }
        addLock();
        let page = $(this).text();

        const prevPage = curPage;
        curPage = parseInt(page);
        const curOffset = parseInt($('.gallery .slides').css('margin-left'));
        const offset = (prevPage - curPage) * 920 + curOffset;
        $('.gallery .slides').animate({marginLeft: `${offset}px`}, 300, 'linear', function(){
            unLock();
        });
    });
}

init();
bindEvents();
