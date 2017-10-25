# Task 4

##### 1.引用类型有哪些？非引用类型有哪些

- 基本类型值（数值、布尔值、字符串、null和undefined）：指的是保存在栈内存中的简单数据段；
- 引用类型值（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象

##### 2.如下代码输出什么？为什么

```javascript
var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};
console.log(obj1 == obj2); //false 因为obj是引用类型，obj1保存的变量指针和obj2保存的变量指针并不相同
console.log(obj1 = obj2);  //{a: 1, b: 2} 将obj2的地址赋给了obj1，赋值语句最终返回了obj2地址对应存储的数据
console.log(obj1 == obj2);  //true 因为上一个语句将obj2的地址赋给了obj1，所以两者相等，返回true
```

##### 3.如下代码输出什么？为什么

```javascript
var a = 1
var b = 2
var c = { name: '饥人谷', age: 2 }
var d = [a, b, c]

var aa = a
var bb = b
var cc = c
var dd = d

a = 11
b = 22
c.name = 'hello'
d[2]['age'] = 3

console.log(aa)  // 1 因为aa=a将a的值1赋给了aa
console.log(bb)  // 2 因为bb=b将b的值2赋给了bb
console.log(cc)  // {name: "hello", age: 3} 首先cc = c将c的地址赋给了cc，然后通过通过c.name='hello'这个语句将c的地址对应的数据name修改为'hello',再然后d[2]['age']=3这一句,d[2]的值为c，所以这一句等价于c['age'] = 3,将c的地址对应的数据age修改为3,因为cc的地址和c的地址一样，所以输出的数据就是{name: "hello", age: 3}了
console.log(dd)  // (3) [1, 2, {name: "hello", age: 3}] d对应的是数组，其中a为1，b为2，c地址对应数据为{name: "hello", age: 3}，所以结果如上所示
```

##### 4.如下代码输出什么？为什么
```javascript
var a = 1
var c = { name: 'jirengu', age: 2 }

function f1(n){
  ++n
}
function f2(obj){
  ++obj.age
}

f1(a) 
f2(c) 
f1(c.age) 
console.log(a) // 1 f1(a)这个函数调用等于在函数里面隐式声明var n = a;然后修改了n的值，并没有对a造成影响
console.log(c) // {name: "jirengu", age: 3} f2(c)这个调用中将c的地址传递过去，然后对等价于c.age进行了自加运算，所以c得age属性变成了3，然后f1(c.age)等于传递了一个3进去，var n =3, 然后++n对c没有任何影响
```

##### 5.过滤如下数组，只保留正数，直接在原数组上操作

```javascript
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] <= 0) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
}
filter(arr)
console.log(arr) // [3,1,2]
```

##### 6.过滤如下数组，只保留正数，原数组不变，生成新数组

```javascript
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-3,2,-5]
```

##### 7.写一个深拷贝函数，用两种方式实现

```javascript
function deepCopy(oldObj) {
  var newObj = {};
  for(var key in oldObj) {
    if(typeof oldObj[key] === 'object') {
      newObj[key] = deepCopy(oldObj[key]);
    }else{
      newObj[key] = oldObj[key];
    }
  }
  return newObj;
}

function deepCopy(obj){
  var newobj = JSON.parse(JSON.stringify(obj));
  return newobj;
}
```

