**问题1：** OOP 指什么？有哪些特性

OOP指的是面向对象编程。

面向对象的三个基本特征是：封装、继承、多态。

具备[封装性](https://zh.wikipedia.org/wiki/%E5%B0%81%E8%A3%9D_(%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88))（Encapsulation）的面向对象程序设计隐藏了某一方法的具体运行步骤，取而代之的是通过消息传递机制发送消息给它。封装是通过限制只有特定类的对象可以访问这一特定类的成员，而它们通常利用接口实现消息的传入传出。

[继承性](https://zh.wikipedia.org/wiki/%E7%BB%A7%E6%89%BF%E6%80%A7)（Inheritance）是指，在某种情况下，一个类会有“[子类](https://zh.wikipedia.org/wiki/%E5%AD%90%E7%B1%BB)”。子类比原本的类（称为[父类](https://zh.wikipedia.org/w/index.php?title=%E7%88%B6%E7%B1%BB&action=edit&redlink=1)）要更加具体化。

[多态](https://zh.wikipedia.org/wiki/%E5%A4%9A%E5%9E%8B_(%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88))（Polymorphism）是指由继承而产生的相关的不同的类，其对象对同一消息会做出不同的响应

**问题2：** 如何通过构造函数的方式创建一个拥有属性和方法的对象? 

```
function Person(nick, age){
    this.nick = nick;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log(this.nick);
}

var p1 = new Person();
p1.sayName();
```

首先构造一个函数，在函数中通过参数对对象的属性赋值。之后通过prototype来给对象定义公共的属性和方法。

之后通过new一个函数来创建一个新对象，

**问题3：** prototype 是什么？有什么特性 

是一个函数的原型对象，每个**函数**都自动添加一个名称为`prototype`属性。

特性：每个**对象**都有一个内部属性 `__proto__`(规范中没有指定这个名称，但是浏览器都这么实现的) 指向其类型的prototype属性，类的实例也是对象，其**__proto__**属性指向“类”的prototype。

实例可以通过`__prop__`访问到其类型的prototype属性，这就意味着类的prototype对象可以作为一个公共容器，供所有实例访问。

**问题4：**画出如下代码的原型图

```javascript
function People (name){
  this.name = name;
  this.sayName = function(){
    console.log('my name is:' + this.name);
  }
}

People.prototype.walk = function(){
  console.log(this.name + ' is walking');  
}

var p1 = new People('饥人谷');
var p2 = new People('前端');
```

![Imgur](https://i.imgur.com/ei2QD5q.png)

**问题5：** 创建一个 Car 对象，拥有属性`name`、`color`、`status`；拥有方法`run`，`stop`，`getStatus` 

```javascript
function Car (name, color, status){
  this.name = name;
  this.color = color;
  this.status = status;
  this.run = function(){
    console.log('run');
  }
  this.stop = function(){
    console.log('stop');
  }
  this.getStatus = function(){
    return this.status;
  }
}
var car1 = new Car('car', 'red', 'good');
```

**问题6：** 创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法

```
1. `ct`属性，GoTop 对应的 DOM 元素的容器
2.  `target`属性， GoTop 对应的 DOM 元素
3.  `bindEvent` 方法， 用于绑定事件
4 `createNode` 方法， 用于在容器内创建节点
```

```javascript
function GoTop ($ct, $target){
  this.$ct = $ct;
  this.$target = $target;
  this.bindEvent = function(event, func) {
    this.$target.on(event, func);
  }
  this.createNode = function($node) {
    this.$target.append($node);
  }
  $ct.append($target);
  $target.on('click', function() {
    $('body,html').animate({scrollTop:0},1000);
  })
}
var ct = $('.ct')
var target = $('<a>scroll to top<a>')

var test = new GoTop(ct, target);
```

**问题7：** 使用木桶布局实现一个图片墙

> 代码地址
>
> https://github.com/htkz/test-jirengu/tree/master/code/senior/task1
>
> 预览地址
>
> https://htkz.github.io/test-jirengu/code/senior/task1/index.html