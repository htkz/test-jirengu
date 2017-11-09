var goTop = function() {
    $('.goTop a').on('click', function(event) {
        event.preventDefault();
        console.log('123');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
}



define(function (){
    return {
        goTop: goTop
    }
});
