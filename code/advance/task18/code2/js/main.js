var $container = $('.container');
var curPage = 0;
var perPageCount = 9;
var loadPicNum = 0;
var isDataArrive = true;
winH = $(window).height(),

waterFull = function() {
    var curHeight = [];
    var $items = $('.item');
    var itemWidth = $items.outerWidth(true);
    var colNum = parseInt($('.container').width() / (itemWidth));
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
        // console.log(minHeight);
        $(el).css('left', $(this).outerWidth(true) * index);
        $(el).css('top', minHeight);
        $(el).css('opacity', 1);
        curHeight[index] += $(this).outerHeight(true);
    });
}


getData = function(callback){
	$.ajax({
		url: 'http://platform.sina.com.cn/slide/album_tech',
		dataType: 'jsonp',
		jsonp:"jsoncallback",
		data: {
			app_key: '1271687855',
			num: perPageCount,
			page: curPage
		}
	}).done(function(ret){
		if(ret && ret.status && ret.status.code === "0"){
			callback(ret.data);
			curPage++
		}else{
			console.log('get error data');
		}
	});
}

callback = function(data) {
    var highestHeight = 0;
    for (var i = 0; i < data.length; i++) {
        var news = data[i];
        var item = $('<div class="item"></div>');
        var a = $(`<a href="${news.url}" target="_blank"><img src="${news.img_url}" alt=""></a>`)
        var h4 = $(`<h4>${news.name}</h4>`);
        var p = $(`<p>${news.short_intro}</p>`);
        a.appendTo(item);
        h4.appendTo(item);
        p.appendTo(item);
        item.appendTo($container);
        a.find('img').on('load', function(event) {
            loadPicNum += 1;
            var itemHeight = $(this).parent().parent().outerHeight(true);
            if(highestHeight < itemHeight) {
                highestHeight = itemHeight;
            }
            if(loadPicNum % 3 === 0) {
                $container.css('height', `+=${highestHeight}`);
                highestHeight = 0;
            }
            if(loadPicNum === perPageCount) {
                loadPicNum = 0;
                curPage += perPageCount;
                waterFull();
            }
        });
    }



}

function isVisible($el){
  var scrollH = $(window).scrollTop(),
      top = $el.offset().top;
  if(top < winH + scrollH){
      return true;
  } else{
      return false;
  }
}

function start(){
    getData(function(newsList){
        callback(newsList);
        isDataArrive = true;
    })
    isDataArrive = false;
}

start()
$(window).scroll(function(){
	if(!isDataArrive) {
        return;
    }

	if(isVisible($('#load'))){
		start();
	}
})
