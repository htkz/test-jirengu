require.config({
    baseUrl: "js/lib",
    paths: {
        "carousel": "carousel",
        "goTop": "goTop",
        "loadMore": "loadMore",
        "waterfall": "waterfall"
    }
});

require(['carousel', 'goTop', 'loadMore', 'waterfall'], function (carousel, goTop, loadMore){
    // some code her
    new carousel.Carousel($('.carousel'));
    goTop.goTop();
    loadMore.loadMore();

});
