# Task 2

1. JavaScript 定义了几种数据类型? 哪些是原始类型?哪些是复杂类型?原始类型和复杂类型的区别是什么?
2. typeof和instanceof的作用和区别?
3. 如何判断一个变量是否是数字、字符串、布尔、函数
4. `NaN`是什么? 有什么特别之处?
5. 如何把非数值转化为数值?
6. `==`与`===`有什么区别
7. `break`与`continue`有什么区别
8. void 0 和 undefined在使用场景上有什么区别
9. 以下代码的输出结果是?为什么?

##### 1.JavaScript 定义了几种数据类型?哪些是原始类型?哪些是复杂类型?原始类型和复杂类型的区别是什么?

- 数值（number）：整数和小数（比如1和3.14）
- 字符串（string）：字符组成的文本（比如"Hello World"）
- 布尔值（boolean）：`true`（真）和`false`（假）两个特定值
- undefined：表示“未定义”或不存在，即此处目前没有任何值
- null：表示空缺，即此处应该有一个值，但目前为空
- 对象（object）：各种值组成的集合

数值、字符串、布尔值称为原始类型（primitive type）的值

将对象称为复杂类型（complex type）的值

区别：原始类型最基本的数据类型，不能再细分了。复杂类型往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。

##### 2.typeof和instanceof的作用和区别?

typeof运算符可以返回一个值的数据类型，对于数值、字符串、布尔值分别返回`number`、`string`、`boolean`，函数返回`function`，`undefined`返回`undefined`，除此以外，其他情况都返回`object`。

`instanceof`用于判断一个变量是否某个对象的实例，运算符返回一个布尔值。instanceof只能用来判断对象和函数，不能用来判断字符串和数字等。

##### 3.如何判断一个变量是否是数字、字符串、布尔、函数

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
function f() {}
typeof f// "function"
```

##### 4.`NaN`是什么? 有什么特别之处?

NaN含义是Not a Number，表示非数字，NaN和任何值都不相等，包括自己

##### 5.如何把非数值转化为数值?

```javascript
1. Number()
2. parseInt()
3. parseFloat()
```

parseInt parseFloat

1. 忽略字符串前面的空白字符，找到第一个非空白字符
2. 如果第一个字符不是`-`或者数字返回`NaN`
3. 如果是继续解析，直到非数值模式为止
4. `0`开头会当做八进制，`0x`开头会当做十六进制，但是可以指定第二个参数指定基数

##### 6.`==`与`===`有什么区别

==是近似相等，只判断数值，不判断类型。

===是严格相等，既判断数值，也判断类型。

对于==的注意点

- NaN和NaN不等(两种判断都不等)

- 如果两个值类型相同，则执行严格相等的运算
- 如果两个值的类型不同
- 如果一个是null，一个是undefined，那么相等
- 如果一个是数字，一个是字符串，先将字符串转为数字，然后比较
- 如果一个值是true/false则将其转为1/0比较
- 如果一个值是对象，一个是数字或字符串，则尝试使用valueOf和toString转换后比较
- 其它就不相等了

不过一般意义来说最好不要使用==。

##### 7.`break`与`continue`有什么区别

- break 用于强制退出循环体，执行循环后面的语句
- continue 用于退出本次循环，执行下次循环

##### 8.void 0 和 undefined在使用场景上有什么区别

如果你在函数中对undefined进行了赋值操作，那么var a这种不赋值的情况下a就不再等于undefined了。但是你仍然可以通过void 0 来来得到真实的undefined。

##### 9.以下代码的输出结果是?为什么?

```javascript
console.log(1+1);    // 2 两个数字相加  
console.log("2"+"4");  // "24" 两个字符串直接连接
console.log(2+"4");  // "24"  字符串和数字相加，先把数字转为字符传，然后连接
console.log(+"4");   // 4   加号将字符串转为数字
```

##### 10.以下代码的输出结果是?

```javascript
var a = 1;  // 语句结果为undefined,a为1
a+++a;      // 语句结果为3,等价于(a++)+a,a++的结果为1，但是执行完后a的值变成了2，所以1+2的结果为3,语句执行完后a为2
typeof a+2; // "number2" 先执行typeof a 结果为"number", 再加2为"number2"
```

##### 11.以下代码的输出结果是? 为什么

```javascript
var a = 1;
var b = 3;
console.log( a+++b );
//结果为4，因为执行a+++b等同于(a++)+b, a++会在语句执行完给a+1，但是在语句中a++的结果还是1，所以1+3的结果为4
```

##### 12.遍历数组，把数组里的打印数组每一项的平方

```javascript
var arr = [3,4,5];
for (var i = 0; i < arr.length; i ++) {
  console.log(arr[i] * arr[i]);
}
```

##### 13.遍历 JSON, 打印里面的值

```javascript
var obj = {
 name: 'hunger', 
 sex: 'male', 
 age: 28 
}
for (var i in obj) {
  console.log(obj[i]);
}
```