// require.config({
//     baseUrl: "js/lib",
//     paths: {
//         "carousel": "carousel",
//         "goTop": "goTop",
//         "loadMore": "loadMore",
//         "waterfall": "waterfall"
//     }
// });
//
// require(['carousel', 'goTop', 'loadMore', 'waterfall'], function (carousel, goTop, loadMore){
//     // some code her
//     new carousel.Carousel($('.carousel'));
//     goTop.goTop();
//     loadMore.loadMore();
// });
import '../css/style.css';
import carousel from './lib/carousel.js';
import goTop from './lib/goTop.js';
import loadMore from './lib/loadMore.js';
import './lib/waterfall.js';

new carousel.Carousel($('.carousel'));
goTop.goTop();
loadMore.loadMore();
