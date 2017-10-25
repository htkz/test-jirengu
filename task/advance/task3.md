# Task 3

##### 1.函数声明和函数表达式有什么区别

```javascript
//函数声明
  function sayHello(){
    console.log('hello')
  }
//声明不必放到调用的前面
-------------------------------
//函数表达式
var sayHello = function(){
    console.log('hello');
sayHello()
// 声明必须放到调用的前面
```

##### 2.什么是变量的声明前置？什么是函数的声明前置

在一个作用域下，`var` 声明的变量和`function` 声明的函数会前置

变量的声明前置也就是把变量在作用域的最前面声明为undefined。

函数的声明前置则是直接把整个函数的声明提前到作用域最前面。

##### 3.arguments 是什么

arguments就是传递进函数的所有参数，类型是一个类数组的对象，也就是有length属性，可以通过下标访问。

##### 4.函数的"重载"怎样实现

在函数体针对不同的参数调用执行相应的逻辑

```javascript
function printPeopleInfo(name, age, sex){
    if(name){
      console.log(name);
    }

    if(age){
      console.log(age);
    }

    if(sex){
      console.log(sex);
    }
  }


  printPeopleInfo('Byron', 26);
  printPeopleInfo('Byron', 26, 'male');
```

在这个例子中就是，通过判断参数的有无来决定对不同参数的操作。

##### 5.立即执行函数表达式是什么？有什么作用

```javascript
(function(){
  var a  = 1;
})()
console.log(a); //undefined
```

作用： 隔离作用域，因为函数立即执行过了，所以里面声明的变量就被隔离掉了，不会影响外面。

其他写法

```javascript
(function fn1() {});
 
// 在数组初始化器内只能是表达式
[function fn2() {}];
 
// 逗号也只能操作表达式
1, function fn3() {};
```

##### 6.求n!，用递归来实现

```javascript
var factor = function(n) {
  if(n === 1) {
    return 1;
  }
  return n * factor(n-1);
}
```

##### 7.以下代码输出什么？

```javascript
function getInfo(name, age, sex){
		console.log('name:',name);
		console.log('age:', age);
		console.log('sex:', sex);
		console.log(arguments);
		arguments[0] = 'valley';
		console.log('name', name);
	}

getInfo('饥人谷', 2, '男');
getInfo('小谷', 3);
getInfo('男');
```

1. getInfo('饥人谷', 2, '男');

   ```
   name: 饥人谷
   age: 2
   sex: 男
   (3) ["饥人谷", 2, "男", callee: ƒ, Symbol(Symbol.iterator): ƒ]
   name valley
   ```

2. getInfo('小谷', 3);

   ```
   name: 小谷
   age: 3
   sex: undefined
   (2) ["小谷", 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
   name valley
   ```

3. getInfo('男');

   ```
   name: 男
   age: undefined
   sex: undefined
   ["男", callee: ƒ, Symbol(Symbol.iterator): ƒ]
   name valley
   ```

##### 8.写一个函数，返回参数的平方和？

```javascript
function sumOfSquares() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i] ** 2;
  }
  return sum;
}
var result = sumOfSquares(2,3,4)
var result2 = sumOfSquares(1,3)
console.log(result)  
console.log(result2)  
```

##### 9.如下代码的输出？为什么

```javascript
console.log(a);
var a = 1;
console.log(b);

undefined
Uncaught ReferenceError: b is not defined
//原因在于首先a是声明提前到最前面，所以a被初始化为undefined，所以log得时候就是undefined
//然后因为b没有定义，所以报错
```

##### 10.如下代码的输出？为什么

```javascript
sayName('world');
sayAge(10);
function sayName(name){
  console.log('hello ', name);
}
var sayAge = function(age){
  console.log(age);
};

hello  world
Uncaught TypeError: sayAge is not a function
// 首先是因为函数sayName是使用的函数声明的方式，所以声明提前到作用域最前面，所有sayName('world');正常调用函数，打印出hello world来。然后sayAge是使用的函数表达式的形式，声明必须放在调用前面，然而并没有，所以就报错了。
```

##### 11.如下代码输出什么? 写出作用域链查找过程伪代码

```javascript
var x = 10
bar() 
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo()
}

globalContetx = {
  AO: {
    x: 10,
    foo: function(){},
    bar: function(){}
  },
  Scope: null
}
bar.[[scope]] = globalContext.AO
foo.[[scope]] = globalContext.AO

barContext = {
  AO: {
    x: 30
  },
  Scope: globalContext.AO
}

fooContext = {
  AO: {
    
  },
  Scope: globalContext.AO
}

output: 10
```
##### 12.如下代码输出什么? 写出作用域链查找过程伪代码

```javascript
var x = 10;
bar() 
function bar(){
  var x = 30;
  function foo(){
    console.log(x) 
  }
  foo();
}

globalContext = {
  AO: {
    x: 10,
    bar: function(){}
  }
  Scope: null
}
bar.[[scope]] = globalContext.AO

barContext = {
  AO: {
    x: 30,
    foo: function(){}
  }
  Scope: globalContext.AO
}
foo.[[scope]] = barContext.AO

fooContext = {
  AO: {
    
  },
  Scope: barContext.AO
}
output: 30
```



##### 13.如下代码输出什么? 写出作用域链查找过程伪代码

```javascript
var x = 10;
bar() 
function bar(){
  var x = 30;
  (function (){
    console.log(x)
  })()
}

globalContext = {
  AO: {
    x: 10,
    bar: function(){}
  }
  Scope: null
}
bar.[[scope]] = globalContext.AO

barContext = {
  AO: {
    x: 30,
  }
  Scope: globalContext.AO
}
然后是一个直接执行函数，这个函数的AO为空，Scope为barContext.AO,所以找到x为30。

output: 30
```

##### 14.如下代码输出什么? 写出作用域链查找过程伪代码

```javascript
var a = 1;

function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn3()
  fn2()
  console.log(a)

  function fn2(){
    console.log(a)
    a = 20
  }
}

function fn3(){
  console.log(a)
  a = 200
}

fn()
console.log(a)


globalContext = {
  AO: {
    a: 200,
    fn: function(){},
    fn3: function(){}
  }
  Scope: null
}
fn.[[scope]] = globalContext.AO
fn3.[[scope]] = globalContext.AO

fnContext = {
  AO: {
    a: 20,
    fn2: function(){}
  }
  Scope: globalContext.AO
}
fn2.[[scope]] = fnContext.AO

fn3Context = {
  AO: {
  },
  Scope: globalContext.AO
}

fn2Context {
  AO: {
  },
  Scope: fnContext.AO
}

output: undefined 5 1 6 20 200
```

