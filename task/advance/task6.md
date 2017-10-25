Math任务
1、写一个函数，返回从min到max之间的 随机整数，包括min不包括max

```
[min, max-1]
random = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
```

2、写一个函数，返回从min都max之间的 随机整数，包括min包括max

```
[min, max)
random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}
```

3、写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。

```
random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}
function getRandStr(len){
  var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
  // [0,61]
  var res = '';
  for (var i = 0; i < len; i++) {
  res += str[random(0, 61)];
    }
  return res;
}
var str = getRandStr(10); // 0a3iJiRZap
```

4、写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```
random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}
function getRandIP(){
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr.push(random(0, 255));
  }
  return arr.join(".");
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```

5、写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff

```
random = function(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min
}
function getRandColor(){
  var str = '0123456789abcdf';
  var res = '';
  for (var i = 0; i < 6; i++) {
    res += str[random(0, 15)];
  }
  return '#' + res
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```

数组任务

1、数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

push向数组的尾部增加一个元素
pop去除数组最后一个元素，数组长度减一，并返回这个元素
shift删除数组第一个元素，数组长度减一，并返回这个元素
join将数组里面的元素以参数为分隔符连接起来形成字符串
splice（开始索引，删除元素的位移，插入的新元素，当然也可以写多个）
从para1作为索引开始，连续删除para2次元素，之后插入para3（或者更多参数）。

```
push实现
arr.push = function(element) {
  arr.splice(arr.length, 0, element);
  return arr.length;
}
pop实现
arr.pop = function() {
  return arr.splice(arr.length - 1, 1);
}
shift实现
arr.shift = function() {
  return arr.splice(0, 1);
}
unshift实现
arr.unshift = function(element) {
  arr.splice(0, 0, element);
  return arr.length;
}
```



2、写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作

```
function squareArr(arr){
  arr.forEach(function(value, index) {
    arr[index] = value ** 2;
  })
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```

3、写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变

```
function filterPositive(arr){
  return arr.filter(function(value) {
    return typeof value === "number" &&  value > 0;
  });
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```

Date 任务
1、 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

```
getChIntv = function(date) {
  var now = Date.now();
  var nextDate = Date.parse(date);
  var time = nextDate - now;
  var days = Math.floor(time / (1000 * 60 * 60 * 24))
  time %= (1000 * 60 * 60 * 24);
  var hours = Math.floor(time / (1000 * 60 * 60));
  time %= (1000 * 60 * 60);
  var minutes = Math.floor(time / (1000 * 60 ));
  time %= (1000 * 60);
  var seconds = Math.floor(time / 1000);
  var res = '距除夕还有 ' + days + ' 天 '+ hours + ' 小时 ' + minutes + ' 分 ' + seconds + ' 秒';
  return res;
}

var str = getChIntv("2017-10-20");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒
```

2、把hh-mm-dd格式数字日期改成中文日期

```
getChsDate = function(date) {
   var values = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
   var time = new Date(date);
   var str = time.toLocaleDateString(); //2015/1/7
   var arr = str.split("\/");
   var res = '';
   for (var i = 0; i < arr[0].length; i++) {
     res += values[arr[0][i]];
   }
   res += "年";
   for (var i = 0; i < arr[1].length; i++) {
     res += values[arr[1][i]]
   }
   res += "月"
   for (var i = 0; i < arr[2].length; i++) {
     res += values[arr[2][i]]
   }
   res += "日"
   return res;
}

var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日
```

3、写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

刚刚（ t 距当前时间不到1分钟时间间隔）
3分钟前 (t距当前时间大于等于1分钟，小于1小时)
8小时前 (t 距离当前时间大于等于1小时，小于24小时)
3天前 (t 距离当前时间大于等于24小时，小于30天)
2个月前 (t 距离当前时间大于等于30天小于12个月)
8年前 (t 距离当前时间大于等于12个月)

```
function friendlyDate(time){
  var curDate = new Date();
  var offSet = curDate - time;
  switch (true) {
    case offSet < 60 * 1000:
      return '刚刚';
      break;
    case offSet < 60 * 60 * 1000:
      return '3分钟前'
      break;
    case offSet < 24 * 60 * 60 * 1000:
      return '8小时前'
      break;
    case offSet < 30 * 24 * 60 * 60 * 1000:
      return '3天前'
      break;
    case offSet < 12 * 30 * 24 * 60 * 60 * 1000:
      return '2个月前'
      break;
    default:
      return '8年前'
      break;
  }
}
var str = friendlyDate(new Date()) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
console.log(str);
console.log(str2);
```

