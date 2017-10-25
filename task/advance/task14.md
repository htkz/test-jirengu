# Task 14

1. 如果使用$('.container')[0]会直接获得dom元素

   但是如果使用$('.container').eq(0)name获得的依然是jquery对象

2. jquery对dom的操作

   - 创建元素 

     ```
     var obj = $('<div><a>123</a></div>');
     ```

     再也不用费事的createElement然后setAttribute和appendChild了。

   - 添加元素

     ```
     $( ".inner" ).append( "<p>Test</p>" );
     ```


     ```
     $( "p" ).append( $( "strong" ) ); // 添加text节点
     ```
    
     .prepend()加到前面

-    删除元素

     ```
     $("#div1").remove();
     ```

     ```
     $('body').empty(); //清空所有子元素
     ```

3.jquery的小技巧

```javascript
$('.box > ul').on('click', 'li', function() {
  console.log(this);
})
// 这样写之后，时间是绑定到ul上的，那么之后你再往ul里面添加li的时候，li都会自带这个click的时间。就不用再单独添加了，很方便。
// 另外这样写的话this依然指的是li，而不是ul，多棒啊！
```

jquery的show和hide会记住你以前的display状态。也就说hide会将display设置为none，之后show会恢复成原来的状态。

**题目1：** jQuery 能做什么？

- 选择网页元素
- 改变结果集
- 元素的操作：取值和赋值
- 元素的操作：移动
- 元素的操作：复制、删除和创建
- 工具方法
- 事件操作
- 特殊效果
- AJAX

**题目2：** jQuery 对象和 DOM 原生对象有什么区别？如何转化？

- 区别

  jQuery对象有自己独有的一些方法，DOM对象也有自己独有的方法，两者的方法并不相同，不能互相调用。

  例如同样修改内容，jquery对象用.html()，而dom对象要用.innerHTML()

- 转化

  jquery到dom：使用中括号加下标获取，也就是说原生dom是jquery类数组对象里面的一个属性。

  dom到jquery：使用$()，将原生dom传递进去就可以了。也就是说$()这个函数可以把原生dom转化为jquery对象。

**题目3：**jQuery中如何绑定事件？`bind`、`unbind`、`delegate`、`live`、`on`、`off`都有什么作用？推荐使用哪种？使用`on`绑定事件使用事件代理的写法？

使用on来绑定事件

```
.on( events [,selector ][,data ], handler(eventObject) )
```

1. events：一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如"click", "keydown.myPlugin", 或者 ".myPlugin"
2. selector：一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或者忽略了该选择器，那么被选中的元素总是能触发事件
3. data：当一个事件被触发时，要传递给事件处理函数的event.data
4. handler(eventObject)：事件被触发时，执行的函数。若该函数只是要执行return false的话，那么该参数位置可以直接简写成 false

Bind代表绑定事件，unbind代表解绑事件。在旧版本jquery中使用。

On代表绑定事件，off代表解绑事件。在新版本jquery中使用。

delegate为所有匹配选择器（selector参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素。

live附加一个事件处理器到匹配目前选择器的所有元素。

推荐使用on和off。

事件代理的写法

```javascript
$('.box > ul').on('click', 'li', function() {
  console.log(this);
})
```

**题目4：**jQuery 如何展示/隐藏元素？

.hide()

.show()

**题目5：** jQuery 动画如何使用？

.animate( properties [,duration][,easing][,complete])

第一个参数properties是动画的最终效果，如宽度，位置，颜色等等

第二个参数duration是变化的一个持续时间

第三个参数easing是表示过渡使用哪种缓动函数

第四个参数complete是在动画完成时执行的函数。

**题目6：**如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

```javascript
$('.box').html() // 获取html
$('.box').text() // 获取文本
$('.box').html('123') // 设置html
$('.box').text('123') // 设置文本
```

**题目7：**如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

```javascript
$('.box').val() // 获取表单用户输入值;
$(‘'.box').val('123') // 设置输入值;
$('.box').attr('id') // 获取元素属性;
$('.box').attr('id', '123') // 设置元素属性的值;
```

**题目8：** 使用 jQuery实现如下效果

> http://js.jirengu.com/reliv/1/edit?html,output

**题目9：**. 使用 jQuery 实现如下效果

> http://js.jirengu.com/wemec

**题目10：**实现如下效果

> http://js.jirengu.com/husix

**题目11：** 模仿视频6，完成 **左右**切换的 Tab 效果

> http://js.jirengu.com/sazar/1/edit?html,output

