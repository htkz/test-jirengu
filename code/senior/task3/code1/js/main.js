var Tab = function($ct) {
    this.ct = $ct;
    this.init();
    this.bind();
}

Tab.prototype.init = function() {
    this.tabs = this.ct.find('.tabs .tab');
    this.panels = this.ct.find('.panels .panel')
}

Tab.prototype.bind = function() {
    var _this = this;
    this.tabs.each(function(index, el) {
        $(el).click(function(event) {
            _this.tabs.each(function(index, el) {
                $(el).removeClass('select');
            });
            $(this).addClass('select');
            _this.panels.each(function(index, el) {
                $(el).removeClass('active');
            });
            _this.panels.eq(index).addClass('active');
        });
    });
}

var tab1 = new Tab($('.container').first())
var tab2 = new Tab($('.container').last())
