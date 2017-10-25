**题目1：** jQuery 中， $(document).ready()是什么意思？

当DOM准备就绪时，指定一个函数来执行。

在大多数情况下，只要DOM结构已完全加载时，脚本就可以运行。传递处理函数给`.ready()`方法，能保证DOM准备好后就执行这个函数，因此，这里是进行所有其它事件绑定及运行其它 jQuery 代码的最佳地方。

如果执行的代码需要在元素被加载之后才能使用时，（例如，取得图片的大小需要在图片被加载完后才能知道），就需要将这样的代码放到 load 事件中。

**题目2：** $node.html()和$node.text()的区别?

$node.html()设置和获取元素内部 HTML 内容

$node.text()设置和获取元素内部文本

**题目3：** $.extend 的作用和用法? 

jQuery.extend([deep,] target [, object1 ][, objectN ] )

1. 当我们提供两个或多个对象给`$.extend()`，对象的所有属性都添加到目标对象（target参数）。
2. 如果只有一个参数提供给`$.extend()`，这意味着目标参数被省略。在这种情况下，jQuery对象本身被默认为目标对象。这样，我们可以在jQuery的命名空间下添加新的功能。这对于插件开发者希望向 jQuery 中添加新函数时是很有用的

目标对象（第一个参数）将被修改，并且将通过$.extend()返回。然而，如果我们想保留原对象，我们可以通过传递一个空对象作为目标对象：

```
var object = $.extend({}, object1, object2);

```

在默认情况下，通过`$.extend()`合并操作不是递归的;

如果第一个对象的属性本身是一个对象或数组，那么它将完全用第二个对象相同的key重写一个属性。这些值不会被合并。如果将 `true`作为该函数的第一个参数，那么会在对象上进行递归的合并。

```javascript
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};

// Merge object2 into object1
$.extend( object1, object2 ); // 新对象的banana属性为{price:200}
$.extend( true, object1, object2 ); // 新对象的banana属性为{weight: 52, price:200}
```

**题目4：** jQuery 的链式调用是什么？

- jQuery链式调用：在对象上一次性调动多个方法
  - `$(this).addClass("active").siblings().removeClass("active")`
- 因为大部分对象方法的最后是return this。

**题目5：** jQuery 中 data 函数的作用

data：发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后面，POST请求作为表单数据

**题目6：**

- 写出以下功能对应的 jQuery 方法：

  - 给元素 $node 添加 class `active`，给元素 $noed 删除 class `active`

    $node.addClass('active')

    $node.removeClass('active')

  - 展示元素$node, 隐藏元素$node

    $node.show()

    $node.hode()

  - 获取元素$node 的 属性: id、src、title， 修改以上属性

    $node.attr('id')

    $node.attr('src')

    $node.attr('title')

    $node.attr('id', '123')

    $node.attr('src', '/123.png')

    $node.attr('title', '123')

  - 给$node 添加自定义属性`data-src`

    $node.attr('data-src', '1234')

  - 在$ct 内部最开头添加元素$node

    $ct.prepend($node)

  - 在$ct 内部最末尾添加元素$node

    $ct.append($node)

  - 删除$node

  - $node.remove()

  - 把$ct里内容清空

    $ct.empty()

  - 在$ct 里设置 html `<div class="btn"></div>`

    $ct.html('<div class="btn"></div>')

  - 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)

    $node.height() // 不包括内边距的高度
    $node.width() // 不包括内边距的宽度
    $node.innerHeight() // 包括内边距的高度
    $node.innerWidth() // 包括内边距的宽度
    $node.outerHeight() // 包括边框的高度
    $node.outerWidth() // 包括边框的宽度
    $node.outerHeight(true) // 包括外边距的高度
    $node.outerWidth(true) // 包括外边距的宽度

    .height()和.width()是原始的高度和宽度

    .innerHeight()和.innerWidth()是包括了padding的高度和宽度

    .outerHeight()和.outerWidth()是包括了padding和border的高度和宽度

    .outerHeight(true)和.outerWidth(true)是包括了padding和border和margin的高度和宽度

  - 获取窗口滚动条垂直滚动距离

    $(document).scrollTop()

  - 获取$node 到根节点水平、垂直偏移距离

    $node.offset().top;//获取 $node 到根节点垂直偏移距离

    $node.offset().left;//获取 $node 到根节点水平偏移距离

  - 修改$node 的样式，字体颜色设置红色，字体大小设置14px

    $node.css('color', 'red')

    $node.css('font-size', '14px')

  - 遍历节点，把每个节点里面的文本内容重复一遍

    $node.each(function(index, el){

    ​	var text = $(el).text();

    ​	$(el).text(text + text)

    })

  - 从$ct 里查找 class 为 `.item`的子元素

    $ct.find('.item')

  - 获取$ct 里面的所有孩子

    $ct.children();

  - 对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子

    $node.parents('.ct').find('.panel')

  - 获取选择元素的数量

    $node.length

  - 获取当前元素在兄弟中的排行

    $node.index()

**题目7：**

- 用jQuery实现以下操作
  - 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色

    ```javascript
    $btn.on('mousedown', function(event) {
        event.preventDefault();
        $(this).css('background-color', 'red');
    });

    $btn.on('mouseup', function(event) {
        event.preventDefault();
        $(this).css('background-color', 'blue');
    });
    ```

  - 当窗口滚动时，获取垂直滚动距离

    ```javascript
    $(document).scroll(function(event) {
        console.log($(this).scrollTop());
    });
    ```

  - 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色

    ```javascript
    $div.on('mouseenter', function(event) {
        event.preventDefault();
        $(this).css('background-color', 'red');
    });

    $div.on('mouseleave', function(event) {
        event.preventDefault();
        $(this).css('background-color', 'white');
    });
    ```

  - 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字

    ```javascript
    $input.on('focus', function(event) {
        event.preventDefault();
        $(this).css('border', '1px solid blue');
    });

    $input.on('input', function() {
        var text = $(this).val();
        $(this).val(text.toUpperCase());
    });

    $input.blur(function(event) {
        $(this).css('border', '1px solid black');
        console.log($(this).val());
    });
    ```

  - 当选择 select 后，获取用户选择的内容

    ```javascript
    $('select').on('change', function() {
      console.log(this.value);
    })
    ```

  **题目8：** 用 jQuery ajax 实现如下效果。`当点击加载更多会加载数据展示到页面[效果预览](http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/1.html)

  https://github.com/htkz/ajax-mock

  ​