setCoordinate = function(target, source) {
    target.x = source.clientX;
    target.y = source.clientY - 40;
}

initCanvas = function() {
    canvas = $('#canvas')[0];
    ctx = canvas.getContext('2d');
    mouseDown = false;
    curPos = {x: undefined, y: undefined};
    lastPos = {x: undefined, y: undefined};
    $(canvas).attr({'height': '600','width': '800'});
    curMaterial = 'pen';
    curColor = '000000';
    eraserSizeTrans = {
        'small': 5,
        'media': 15,
        'large': 30
    }
    curEraserSize = 5;
}

resize = function() {
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 40;
    }
    resizeCanvas();
}

bindEvent = function() {
    $('#canvas').on('mousedown', function(event) {
        event.preventDefault();
        mouseDown = true;
        setCoordinate(curPos, event);
    });

    $('#canvas').on('mousemove', function(event) {
        event.preventDefault();
        if(!mouseDown) return;
        lastPos = Object.assign({}, curPos);
        setCoordinate(curPos, event);
        //draw line
        switch (curMaterial) {
            case 'pen':
                ctx.strokeStyle = curColor;
                ctx.beginPath();
                ctx.moveTo(lastPos.x,lastPos.y);
                ctx.lineTo(curPos.x,curPos.y);
                ctx.stroke();
                break;
            case 'eraser':
                ctx.clearRect(lastPos.x, lastPos.y, curEraserSize, curEraserSize);
                break;
            default:
                return false;
        }
    });

    $('#canvas').on('mouseup', function(event) {
        event.preventDefault();
        mouseDown = false;
    });

    $('.options').on('click', '.option', function(event) {
        event.preventDefault();
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        curMaterial = $(this).text();
        switch (curMaterial) {
            case 'pen':
                $('html').removeClass('eraser');
                break;
            case  'eraser':
                $('html').addClass('eraser');
                break;
            case 'clear':
                ctx.clearRect(0, 0, 2000, 2000);
            default:
            return false;
        }
    });

    $('input[type=color]').change(function(event) {
        curColor = $(this).val();
    });

    $('select[name=size]').change(function(event) {
        curEraserSize = eraserSizeTrans[$(this).val()];
    });
}

initCanvas();
bindEvent();
resize();
