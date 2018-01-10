const modal = $('.modal');
const btn = $('#btn');

btn.click(function(event) {
    event.stopPropagation();
    modal.show();
});

modal.click(function(event) {
    event.stopPropagation();
});

$(document).click(function(event) {
    modal.hide();
});
