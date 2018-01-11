const modal = $('.modal');
const btn = $('#btn');

btn.on('click', function(event) {
    event.stopPropagation();
    modal.toggle();
    $(document).on('click', function(event) {
        modal.hide();
    });

});

modal.click(function(event) {
    event.stopPropagation();
});
