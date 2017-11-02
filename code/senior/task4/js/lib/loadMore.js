define(function() {
    var loadMore = function() {
        var curNum = 14;
        $('.loadMore').click(function(event) {
            event.preventDefault();
            $.ajax({
                url: '/loadMore',
                dataType: 'json',
                data: {curNum: curNum}
            })
            .done(function(data) {
                var res = data.res;
                curNum = data.num;
                for (var i = 0; i < res.length; i++) {
                    var data = res[i];
                    var num = i + curNum;
                    $(`<div class="item ${data}">${num}</div>`).appendTo('.images')
                }
                WaterFull.init();
            })
        });


    }
    return {
        loadMore: loadMore
    }
})
