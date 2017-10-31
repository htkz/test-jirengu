**问题1：** apply、call 、bind有什么作用，什么区别

bind，返回一个新函数，并且使函数内部的this为传入的第一个参数

```javascript
var obj1 = {
    name: 'Byron',
    fn : function(){
        console.log(this);
        console.log(this.name);
    }
};
var obj2 = {
    name: 'test'
};
var fn3 = obj1.fn.bind(obj2);
fn3(); 
//输出
// {name: "test"}
// test
```

call apply，调用一个函数，传入函数执行上下文及参数

```
fn.call(context, param1, param2...)

fn.apply(context, paramArray)

```

语法很简单，第一个参数都是希望设置的`this`对象，不同之处在于`call`方法接收参数列表，而`apply`接收参数数组

```
fn2.call(obj1);
fn2.apply(obj1);
```

**问题2：** 以下代码输出什么?

```javascript
var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()
```

会弹出提示框，内容是John: hi!

**问题3：** 下面代码输出什么，为什么

```javascript
func() 
function func() { 
  alert(this)
}
```

会弹出提示框，内容是[object Window]

因为首先func的初始化会被提升到最上面，之后调用这个函数，func()的作用域中没有this,所以在全局变量中找到Window对象，所以显示[object Window]。

**问题4：**下面代码输出什么

```javascript
document.addEventListener('click', function(e){
    console.log(this);
    setTimeout(function(){
        console.log(this);
    }, 200);
}, false);
```

```Javascript
// 输出
#document
Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
```

**问题5：**下面代码输出什么，why

```javascript
var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)
```

会弹出提示框，内容是John

因为使用了call方法，将john作为执行上下文传了进去，所以this.firstName就会指向john.firstName

**问题6：** 以下代码有什么问题，如何修改

```javascript
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
```

this指的是$btn的dom对象。而这个对象是没有showMsg这个方法的，所以应该修改为

```javascript
var module= {
  bind: function(){
    var self = this;
    $btn.on('click', function(){
      console.log(this) //this指什么
      self.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
```

**问题7：**有如下代码，解释`Person`、 `prototype`、`__proto__`、`p`、`constructor`之间的关联。

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("若愚")
p.sayName();
//首先Person是一个函数，当然函数也是一个对象，prototype就是Person这个对象的其中一个属性，当然prototype也是一个对象。p是Person的一个实例，p有一个constructor的属性，对应的值为Person。p有一个__proto__的属性，这个__proto__指向Person.prototype，也就是Person的原型。p.__proto__.constructor也是Person。
```

**问题8：** 上例中，对对象 p可以这样调用 `p.toString()`。`toString`是哪里来的? 画出原型图?并解释什么是原型链。

```javascript
来源：p.__proto__.__proto__.toString()
```

![Imgur](https://i.imgur.com/IVWNpg5.png)

**原型链**：：每个对象都有一个指向它的原型（prototype）对象的内部链接。这个原型对象又有自己的原型，直到某个对象的原型为 null 为止（也就是不再有原型指向），组成这条链的最后一环。这种一级一级的链结构就称为原型链（prototype chain）。

**问题9：**对`String`做扩展，实现如下方式获取字符串中频率最高的字符

```javascript
String.prototype.getMostOften = function() {
  var data = {}
  for(var i = 0; i < this.length; i++) {
    var letter = this[i];
    if(data[letter]) {
      data[letter] += 1;
    } else {
      data[letter] = 1;
    }
  }
  var num = 0;
  var res;
  for(var i in data) {
    if(num < data[i]) {
      num = data[i];
      res = i;
    }
  }
  return res; 
}
var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次
```

**问题10：** `instanceOf`有什么作用？内部逻辑是如何实现的？

```javascript
作用：判断类型。
a instanceof Array的判断就是首先判断
a.__proto__ === Array.prototype
如果相等返回true，如果不相等则继续判断
a.__proto__.__proto__ === Array.prototype
一直这样循环下去，知道最后一个__proto__如果都不相等则返回false，其中存在任何一个相等就返回true。
```

### 继承相关问题

**问题11：**继承有什么作用?

可以少写很多属性。比如a对象继承b对象的话，那么a就不需要再重复得声明b里面已有的属性了。

**问题12：** 下面两种写法有什么区别?

```javascript
//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);
```

方法1的写法里面每一个实例都会有一个printName方法，很重复。

方法2的写法将公用的方法放在对象的prototype里面，就不需要每个实例再重复声明这个方法了，而是在各自的```__proto__```里面找这个方法。

**问题13：** `Object.create` 有什么作用？兼容性如何？

clone一个新的object。

`Object.create`是ES5方法，IE9部分支持，IE10完全支持。

**问题14：** `hasOwnProperty`有什么作用？ 如何使用？

`hasOwnPerperty`是Object.prototype的一个方法，可以判断一个对象是否包含自定义属性而不是原型链上的属性，`hasOwnProperty`是JavaScript中唯一一个处理属性但是不查找原型链的函数

```j&#39;av&#39;s
//使用范例
m.hasOwnProperty('name'); // true
m.hasOwnProperty('printName'); // false
Male.prototype.hasOwnProperty('printAge'); // true
```

**问题15：**如下代码中`call`的作用是什么?

```
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    this.age = age;
}
```

作用就是在Male的作用域下执行Person函数。也就是让Male继承Person的name和sex的属性。

**问题16：** 补全代码，实现继承 

```
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.getName = function(){
    return this.name;
};    

function Male(name, sex, age){
 	Person.call(this, name, sex);
    this.age = age;
}

Male.prototype = Object.create(Person.prototype);
Male.prototype.constuctor = Male;

Male.prototype.getAge = function(){
    return age;
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.getName();
```

