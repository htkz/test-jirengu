# Task 9



##### 1.text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中

作用是使文本居中，只能作用于行内元素（p、span等）上，不能作用于块级元素上。

##### 2.IE 盒模型和W3C盒模型有什么区别?

IE盒模型中width = content-width + padding(左右padding之和) + border(左右border之和)

W3C盒模型中width = content-width

height同理

##### 3.*{ box-sizing: border-box;}的作用是什么？

设置全局所有盒模型为ie盒模型。

##### 4.line-height: 2和line-height: 200%有什么区别?

Line-height: 2是让行高变成他自身font-size的两倍

line-height: 200%是让行高变成设置line-height：200%的那个父元素的font-size的两倍，也就是不随自身行高变化。换句话说，假设a的font-size为10，a设置line-height为200%，那么a和a的所有子元素的行高都是20（如果没有其他修改的话）。

##### 5.inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?

既呈现 inline 特性(不占据一整行，宽度由内容宽度决定)

又呈现 block 特性 (可设置宽高，内外边距)

只需要用一个块级元素将inline-block的元素抱起来，然后设置改会块级元素font-size为0，在针对inline-block元素设置font-size。本质来讲就是让两个inline-block元素之间的类似空格的这种造成缝隙的元素的font-size为0就可以了。

顶端对齐可以使用vertical-align: top.

##### 6.CSS sprite 是什么?

指将不同的图片/图标合并在一张图上。

这样就可以只传输一张图片，然后使用的时候通过位移来显示这张图片的不同部分。

可以减少网络请求，提高网页加载性能。

##### 7.让一个元素"看不见"有几种方式？有什么区别?

`opacity: 0` ; 透明度为0，整体

`visibility: hidden` ; 和opacity:0 类似

`display:none`; 消失，不占用位置

opacity和visibility都是让元素隐形，也就是看不见，但是元素仍然占用它原来的位置。

而display：none是直接让元素消息，也就是不占用它原来的位置。

##### 编程题目

> http://js.jirengu.com/hijet/1/edit

> http://js.jirengu.com/xowaq/2/edit