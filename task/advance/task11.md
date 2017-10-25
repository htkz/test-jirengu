Class note

1. console.assert()输入true，什么都不做，输入其他会报错。





题目1: 下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用 两种以上的方法

输出为10


```javascript
var fnArr = [];
for (var i = 0; i < 10; i ++) {
  fnArr[i] =  (function(i){
    return function() {
      return i;
    }
  })(i);
}
console.log( fnArr[4]() );  



var fnArr = [];
for (var i = 0; i < 10; i ++) {
  (function(i){
    fnArr[i] = function() {
      return i;
    }
  })(i);
}
console.log( fnArr[4]() );  
```

题目2： 封装一个汽车对象，可以通过如下方式获取汽车状态

```javascript
var Car = (function(){
   var speed = 0;
   setSpeed= function(s) {
       speed = s;
   }
   getSpeed = function() {
       return speed;
   }
   accelerate = function() {
       speed += 10;
   }
   decelerate = function() {
       speed -= 10;
   }
   getStatus = function() {
       return (speed > 0) ? 'running' : 'stop';
   }
   return {
      setSpeed: setSpeed,
      getSpeed: getSpeed,
      accelerate: accelerate,
      decelerate: decelerate,
      getStatus: getStatus
   }
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate();
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```

题目3：下面这段代码输出结果是? 为什么?

```javascript
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
```

输出

1

3

2

因为setTimeout虽然设置了0秒，但是这个0秒实在当前环境的代码都执行完之后才计算的，所以是setTimeout里面的代码是最后执行的，在setTimeout的上下文环境里a===2，所以最后打印出来2。

将a声明提前，之后赋值为1，之后第一个consolo.log打印1，然后a赋值为3，然后打印出来3。

所以顺序为132。

题目4：下面这段代码输出结果是? 为什么?

```javascript
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
```

没有输出

因为还是和上面一样，setTimeout里面的代码最后才执行，然而flag因为是true，所以就在while(flag) {}这里死循环出不去了，所以console.log和setTimeout根本就没有执行。

题目5： 下面这段代码输出？如何输出`delayer: 0, delayer:1...`（使用闭包来实现）

```javascript
for(var i=0;i<5;i++){
	setTimeout(function(i){
         console.log('delayer:' + i );
	}(i), 0);
	console.log(i);
}
```

题目6： 如何获取元素的真实宽高

```javascript
element.currentStyle ?
    element.currentStyle : window.getComputedStyle(element, null)
```

之后通过.width和.height获取

题目7： URL 如何编码解码？为什么要编码？

JavaScript提供四个URL的编码/解码方法。

1. decodeURI()
2. decodeURIComponent()
3. encodeURI()
4. encodeURIComponent()

**区别**

encodeURI方法**不会**对下列字符编码

```
1. ASCII字母
2. 数字
3. ~!@#$&*()=:/,;?+'

```

encodeURIComponent方法**不会**对下列字符编码

```
1. ASCII字母
2. 数字
3. ~!*()'

```

所以encodeURIComponent比encodeURI编码的范围更大。

题目8： 补全如下函数，判断用户的浏览器类型

```javascript
var agent = navigator.userAgent
function isAndroid(){
  if(agent.indexOf('Android') !== -1) {
    return true
  } else {
    return false
  }
}
function isIphone(){
   if(agent.indexOf('iPhone') !== -1) {
    return true
  } else {
    return false
  }
}
function isIpad(){
   if(agent.indexOf('iPad') !== -1) {
    return true
  } else {
    return false
  }
}
function isIOS(){
  if(agent.indexOf('Mac OS X') !== -1) {
    return true
  } else {
    return false
  }
}

```

