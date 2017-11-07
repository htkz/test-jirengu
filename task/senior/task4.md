**题目1：** 为什么要使用模块化？

- 解决命名冲突
- 依赖管理
- 提高代码可读性
- 代码解耦，提高复用性

**题目2：** CMD、AMD、CommonJS 规范分别指什么？有哪些应用

---

AMD 即`Asynchronous Module Definition`，中文名是**异步模块定义**的意思。它是一个在浏览器端模块化开发的规范，由于不是JavaScript原生支持，使用AMD规范进行页面开发需要用到对应的库函数，也就是大名鼎鼎`RequireJS`，实际上AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出

requireJS主要解决两个问题

1. 多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
2. js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长

语法

```
define(id?, dependencies?, factory);

```

- id: 定义中模块的名字，可选；如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字。。
- 依赖dependencies：是一个当前模块依赖的，已被模块定义的模块标识的数组字面量。 依赖参数是可选的，如果忽略此参数，它应该默认为["require", "exports", "module"]。然而，如果工厂方法的长度属性小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。
- 工厂方法factory，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值。

示例:

```
define('modal', ['jQuery', 'dialog'], function($, Dialog){
    $('.modal').show();
    Dialog.open();
});

```

实现AMD的库有｀RequireJS｀ 、｀curl｀ 、｀Dojo｀ 等。

---

CMD 即`Common Module Definition`通用模块定义，CMD规范是国内发展出来的，就像AMD有个requireJS，CMD有个浏览器的实现SeaJS，SeaJS要解决的问题和requireJS一样，只不过在模块定义方式和模块加载（可以说运行、解析）时机上有所不同

CMD（Common Module Definition）是 SeaJS推广过程中产生的。

在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：

```
define(factory);

```

示例:

math.js

```
define(function(require, exports, module) {
  exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
      sum += args[i++];
    }
    return sum;
  };
});

```

increment.js

```
define(function(require, exports, module) {
  var add = require('math').add;
  exports.increment = function(val) {
    return add(val, 1);
  };
});

```

program.js

```
define(function(require, exports, module) {
  var inc = require('increment').increment;
  var a = 1;
  inc(a); // 2

  module.id == "program";
});
```

---

我们先从CommonJS谈起，因为在网页端没有模块化编程只是页面JavaScript逻辑复杂，但也可以工作下去，在服务器端却一定要有模块，所以虽然JavaScript在web端发展这么多年，第一个流行的模块化规范却由服务器端的JavaScript应用带来，[CommonJS规范](http://wiki.commonjs.org/wiki/Modules/1.1)是由NodeJS发扬光大，这标志着JavaScript模块化编程正式登上舞台。

1. 定义模块 根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性
2. 模块输出： 模块只有一个出口，`module.exports`对象，我们需要把模块希望输出的内容放入该对象
3. 加载模块： 加载模块使用`require`方法，该方法读取一个文件并执行，返回文件内部的`module.exports`对象

CommonJS是服务器端模块的规范，Node.js采用了这个规范。Node.JS首先采用了js模块化的概念。

1. 在一个模块中，存在一个自由的变量”require”，它是一个函数。
   - 这个”require”函数接收一个模块标识符。
   - “require”返回外部模块所输出的API。
   - 如果出现依赖闭环(dependency cycle)，那么外部模块在被它的传递依赖（transitive dependencies）所require的时候可能并没有执行完成；在这种情况下，”require”返回的对象必须至少包含此外部模块在调用require函数（会进入当前模块执行环境）之前就已经准备完毕的输出。
   - 如果请求的模块不能返回，那么”require”必须抛出一个错误。
2. 在一个模块中，会存在一个名为”exports”的自由变量，它是一个对象，模块可以在执行的时候把自身的API加入到其中。
3. 模块必须使用”exports”对象来做为输出的唯一表示。

示例:

math.js

```
exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};

```

increment.js

```
var add = require('math').add;
exports.increment = function(val) {
    return add(val, 1);
};

```

program.js

```
var inc = require('increment').increment;
var a = 1;
inc(a); 
// 2
```

**题目3：** 使用 requirejs 完善入门任务15，包括如下功能：

```
 1. 首屏大图为全屏轮播
 2. 有回到顶部功能
 3. 图片区使用瀑布流布局（图片高度不一），下部有加载更多按钮，点击加载更多会加载更多数据(数据在后端 mock)
```

> 预览地址（需要后端mock的部分没法预览了）
>
> https://htkz.github.io/test-jirengu/code/senior/task4/index.html
>
> 代码地址
>
> https://github.com/htkz/test-jirengu/tree/master/code/senior/task4