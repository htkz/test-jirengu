getIco = function(url) {
    if(url) {
        return url + '/favicon.ico';
    }
    return "no-ico";
}

var lock = false;

var line1 = ['1','2','3','4','5','6','7','8','9','0'];
var line2 = ['q','w','e','r','t','y','u','i','o','p'];
var line3 = ['a','s','d','f','g','h','j','k','l'];
var line4 = ['z','x','c','v','b','n','m'];
var line = [line1, line2, line3, line4];

var hash_url = {
    w: 'https://weibo.com',
    q: 'https://qq.com'
}

// check localStorage
var hashInLocalStorage = JSON.parse(localStorage.getItem('cache_url') || 'null')
if(hashInLocalStorage){
	hash_url = hashInLocalStorage
}


// add item to screen
for (var i = 0; i < line.length; i++) {
    var lineRow = line[i];
    var $row = $('<div class="row"></div>');
    for (var j = 0; j < lineRow.length; j++) {
        var item = lineRow[j];
        var ico = getIco(hash_url[item]);
        var $span = $(`<span class="btn">${item.toUpperCase()}<span class="edit">E</span></span>`);
        if(ico) {
            var $img = $(`<img src="${ico}" alt="">`);
        } else {
            var $img = $(`<img src="${ico}" alt="" style="display:none;">`);
        }
        $img.appendTo($span);
        $img.css('border', 'none');
        $span.appendTo($row);
    }
    $row.appendTo($('.container'));
}


// set hide for edit
$('span.edit').each(function() {
    $(this).hide();
});

$('span.btn').each(function(index, el) {
    $(this).hover(function() {
        $(this).find('.edit').show();
    }, function() {
        $(this).find('.edit').hide();
    });
});

// set keydown event
$(document).keypress(function(event) {
    var key = event.key;
    var url = hash_url[key];
    if(url && !lock) {
        window.open(url,'_blank');
    }
});

// set edit function
$('span.edit').click(function(event) {
    event.stopPropagation();
    getInput(this);
});

getInput = function(_this) {
    lock = true;
    swal({
        title: "Url!",
        text: "Plesse input your url:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "www.baidu.com"
    },
    function(inputValue){
        if (!inputValue) {
            swal.showInputError("You need to write something!");
            return false;
        }
        if(inputValue.indexOf('http') === -1) {
            var url = `https://${inputValue}`;
        } else {
            var url = inputValue;
        }
        var ico = url+'/favicon.ico';
        var item = $(_this).parent().text().charAt(0).toLowerCase();
        $(_this).siblings('img').attr('src', ico).show();
        $(_this).siblings('img').on('error',function(event) {
            $(this).attr('src', 'https://i.loli.net/2017/11/10/5a05afbc5e183.png');
        });
        hash_url[item] = url;
        localStorage.setItem('cache_url', JSON.stringify(hash_url));
        lock = false;
        swal({
            title: "Nice!",
            // text: "New label: " + inputValue,
            type: "success",
            timer: 1,
            showConfirmButton: false,
        });
    })
}
