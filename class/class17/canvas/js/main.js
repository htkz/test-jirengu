setCoordinate = function(target, source) {
    target.x = source.clientX;
    target.y = source.clientY;
}

initCanvas = function() {
    canvas = $('#canvas')[0];
    ctx = canvas.getContext('2d');
    mouseDown = false;
    curPos = {x: undefined, y: undefined};
    lastPos = {x: undefined, y: undefined};
    $(canvas).attr({'height': '600','width': '800'});
}

resize = function() {
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 40;
        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
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
        console.log(curPos);
        console.log(lastPos);
        //draw line
        ctx.beginPath();
        ctx.moveTo(lastPos.x,lastPos.y);
        ctx.lineTo(curPos.x,curPos.y);
        ctx.stroke();

    });

    $('#canvas').on('mouseup', function(event) {
        event.preventDefault();
        mouseDown = false;
    });
}

initCanvas();
bindEvent();
resize()
