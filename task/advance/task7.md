# Task 7

**题目1：** `\d`，`\w`,`\s`,`[a-zA-Z0-9]`,`\b`,`.`,`*`,`+`,`?`,`x{3}`,`^`,`$`分别是什么?

- \d [0-9]是匹配单个数字
- \w [a-zA-Z_0-9]是匹配单个单词字符，字母、数字下划线
- \s [\t\n\x0B\f\r] 空白符
- [a-zA-Z0-9] 匹配单个字符，匹配所有大小写的英文字母以及阿拉伯数字0到9
- \b 匹配单词边界
- .等价`[^\r\n]`, 匹配除了回车符和换行符之外的所有字符
- *量词，匹配任意多次
- +量词，匹配1次或多次
- ?量词，匹配0或1次
- x{3}匹配连续3个x
- ^匹配开头
- $匹配结尾

**题目2：** 写一个函数`trim(str)`，去除字符串两边的空白字符

```javascript
trim = function(str) {
  return str.replace(/(^\s+)|(\s+$)/g, "");
}
```

**题目3：** 写一个函数`isEmail(str)`，判断用户输入的是不是邮箱

```javascript
isEmail = function(str) {
  var reg = /^\w+@\w+.com$/;
  return reg.test(str)
}
```

**题目4：** 写一个函数`isPhoneNum(str)`，判断用户输入的是不是手机号

```javascript
isPhoneNum = function(str) {
  var reg = /^1[3578]\d{9}$/
  return reg.test(str)
}
```

**题目5：** 写一个函数`isValidUsername(str)`，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）

```javascript
isValidUsername = function(str) {
  var reg = /^\w{6,20}$/;
  return reg.test(str);
}
```

**题目6：** 写一个函数`isValidPassword(str)`, 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）

```javascript
isValidPassword = function(str) {
  var reg1 = /^\w{6,20}$/;
  var reg2 = /^[a-z]{6,20}$/;
  var reg3 = /^[A-Z]{6,20}$/;
  var reg4 = /^[0-9]{6,20}$/;
  var reg5 = /^_{6,20}$/;
  return reg1.test(str) && !reg2.test(str) && !reg3.test(str) && !reg4.test(str) && !reg5.test(str)
}
```

**题目7：** 写一个正则表达式，得到如下字符串里所有的颜色

```Javascript
var re = /#[0-9a-fA-F]{6}/g;
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']
```

**题目8：** 下面代码输出什么? 为什么? 改写代码，让其输出`[""hunger"", ""world""]`.

```javascript
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);
```

输出[""hunger" , hello "world""]

因为/./会匹配除了回车和换行的所有字符，而*是贪婪模式，会尽可能的多匹配.

```javascript
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*?"/g;
str.match(pat);
```

修改的话只需要添加？形成非贪婪模式就可以了