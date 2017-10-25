# Task8

#### 课程任务

##### 1.块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别

##### 1.1块级元素

div h1 h2 h3 h4 h5 h6 p hr form ul dl ol pre table li dd dt tr td th

##### 1.2行内元素

em strong span a br img button iput label select textarea code script 

##### 1.3区别

- 块级可以包含块级和行内，行内只能包含行内和文本
- 块级占据一整行的空间，行内占据自身宽度的空间
- 宽高设置只对块级元素生效，对行内元素无效
- 行内元素的内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;块级元素的padding和margin都能调整。

##### 2.什么是 CSS 继承? 哪些属性能继承，哪些不能？

css继承就是子元素可以继承部分父元素的属性

不可继承的：display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi。
所有元素可继承：visibility和cursor。
内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
终端块状元素可继承：text-indent和text-align。
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
表格元素可继承：border-collapse。

##### 3.如何让块级元素水平居中？如何让行内元素水平居中?

块级元素 `margin:0 auto;`

行内元素 `text-align:center;`

##### 4.用 CSS 实现一个三角形

首先html中添加一个div

```html
<div class="triangle"></div>
```

之后调整这个div的css

```css
.triangle {
  height: 0;
  width: 0;
  border-top:solid 20px red;
  border-left:solid 20px transparent;
  border-right:solid 20px transparent;
  border-bottom:solid 20px blue;
}
```

然后根据自己需要来调整就好了，想要上三角的话就把border-top设置颜色，其他三个border设置为 transparent。想要其他三角的话调整颜色就行了。

##### 5.单行文本溢出加 `...`如何实现?

```css
white-space: nowrap;     用于文本不折行
overflow: hidden;		 用于隐藏超出边界的文本
text-overflow: ellipsis; 将超出边界的文本转化成...
```

##### 6.px, em, rem 有什么区别

- px是是固定的像素单位
- em是相对于父元素字体大小的比例，比如1.5em就是指父元素的1.5倍
- rem是相对于根元素字体大小(html)的比例

##### 7.解释下面代码的作用?为什么要加引号? 字体里`\5b8b\4f53`代表什么?

```css
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
font: 12px/1.5是指设置字体大小为12px,行高为1.5倍
tahoma,arial 这两个是两个不同的字体
'Hiragino Sans GB'这个也是字体，不过因为有空格会导致浏览器解析出错，所以用单引号括起来了
'\5b8b\4f53'这个也是字体，不过是用unicode表示的，转码为中午的"宋体"
sans-serif 是无衬线体
然后字体是按照从左到右的优先级查找的，查找到哪个字体在浏览器或操作系统里，就展示哪个。
```

作业代码

> http://js.jirengu.com/zufin/1/edit

> http://js.jirengu.com/cohaq/1/edit

> http://js.jirengu.com/zixu/1/edit

> http://js.jirengu.com/yomit/1/edit

> http://js.jirengu.com/qosij/1/edit

