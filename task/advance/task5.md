# Task 5

##### 0、对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？

符合相应语法的字符串

##### 1、使用数组拼接出如下字符串 ，其中styles数组里的个数不定

```javascript
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
    var str1 = '<dl class="product"><dt>' + data.name + '</dt><dd>';
    var str2 = data.styles.join("</dd><dd>");
    var str3 = '</dd></dl>';
    return str1 + str2 + str3
};
var result = getTpl(prod);  //result为下面的字符串
// <dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>
console.log(result);
```

##### 2、写出两种以上声明多行字符串的方法

```javascript
var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'


// 2.1 加\换行
var str = 'abcdeabcdeabcdeancdeabcdeabcdea\
           bcdeancdeabcdeabcdeabcdeancdeab\
           cdeabcdeabcdeancde'
// 2.2 使用es6中的``符号
var str = `abcdeabcdeabcdeancdeabcdeabcdea
           bcdeancdeabcdeabcdeabcdeancdeab
           cdeabcdeabcdeancde`
console.log(str);
```

##### 3、补全如下代码,让输出结果为字符串: hello\\饥人谷

```javascript
var str = "hello\\\\饥人谷";
console.log(str);
```

##### 4、以下代码输出什么?为什么


```javascript
var str = 'jirengu\nruoyu'
console.log(str.length)
//输出为13，因为\n代表换行，占一个长度

```
#####5、写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

```javascript
var str1 = "abcdcba";
var str2 = "abcdcbb";

var judge = function(str) {
  var arr1 = str.split("");
  var arr2 = arr1.reverse();
  var str2 = arr2.join("");
  if(str2 === str) {
    console.log('yes!');
  } else {
    console.log('no!');
  }
}

judge(str1);
judge(str2);
```

##### 6、写一个函数，统计字符串里出现出现频率最多的字符

```javascript
var str = "aaabbdhsajkdjaskdhsak";
var calMaxNum = function(str) {
  var dic = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if(letter in dic) {
      dic[letter] += 1;
    } else {
      dic[letter] = 1;
    }
  }
  var res = '';
  var num = 0;
  for (var i in dic) {
    if(dic[i] > num) {
      num = dic[i];
      res = i;
    }
  }
  console.log(res + ': ' + num);
  return res;
}
calMaxNum(str);
```
#####7、写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串

```javascript
camelize = function(str) {
  var arr = str.split("-");
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr.join(""));
  return arr.join("");
}
```
##### 8、写一个 ucFirst函数，返回第一个字母为大写的字符 （***）

```javascript
ucFirst = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

##### 9、写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...

```javascript
truncate = function(str, maxlength) {
  var res;
  if(str.length > maxlength) {
    res = str.slice(0, maxlength) + '...';
  } else {
    res = str;
  }
  return res;
}
```

##### 10、什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？

JSON数据格式
JSON(JavaScript Object Notation)是一种轻量级的数据交换格式。 易于人阅读和编写。同时也易于机器解析和生成。 它是JS对象语法的一个子集，JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。这些特性使JSON成为理想的数据交换语言。
JSON格式数据如何表示对象
1） 并列的数据之间用逗号（", "）分隔。
2） 映射用冒号（": "）表示。
3） 并列数据的集合（数组）用方括号("[]")表示。
4） 映射的集合（对象）用大括号（"{}"）表示。
window.JSON 是什么
用于判断浏览器是否兼容JSON的用法（IE8版本以上都内置支持JSON）。
可以用于模仿原生JSON对象，让旧版（没有原生支持JSON）浏览器可以使用JSON对象

##### 11、如何把JSON 格式的字符串转换为 JS 对象？ 如何把 JS对象转换为 JSON 格式的字符串?

JSON.parse(); 把JSON 格式的字符串转换为 JS 对象
JSON.stringify(); 把 JS对象转换为 JSON 格式的字符串