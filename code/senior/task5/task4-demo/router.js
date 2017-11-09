router.get('/loadMore', function(req, res) {
    var curNum = parseInt(req.query.curNum);
    var num = curNum + 5;
    var data = {
        res: ['h1', 'h2', 'h3', 'h2', 'h1'],
        num: num
    }
    res.send(data)
})
