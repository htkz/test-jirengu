**题目1：**如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。写一个函数 `isVisible`实现

```javascript
 function isVisible($node){
 	var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
 	var offset = $node.offset().top;
 	if(offset > scrollTop && offset < (scrollTop + windowHeight)) {
    	return true; 
 	}
    return false;
 }
```

**题目2：**当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现

```javascript
$(window).scroll(function() {
  if(isVisible($node)) {
  	console.log('true');
  }
})
```

**题目3：**当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现

```javascript
$(window).scroll(function() {
  if(isVisible($node) && $node.attr('hasAppeared')!== true) {
  	console.log('true');
    $node.attr('hasAppeared', true)
  }
})
```

**题目4：** 图片懒加载的原理是什么？

简单理解就是在元素没有出现在用户窗口之前就不去加载它，直到元素移动到用户窗口上在加载它。

**题目5：** 实现视频中的图片懒加载效果

