# task10

##### 1.浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响?

特征：浮动元素可以向左或向右浮动，直到它的外边缘碰到包含框或者另一个浮动元素的框的边缘。

对父容器，如果所有子元素都浮动的话，父容器就会失去宽度，宽度为0.

对普通元素，因为浮动元素不在文档的普通流中，所以普通元素会表现的好像浮动元素不存在一样。

对文字，文字会移动来给浮动元素让出空间，如果文字较多，会形成文字包裹住浮动元素的感觉。

##### 2.清除浮动指什么? 如何清除浮动? 两种以上方法

是指解决父容器塌陷问题。

两种方法，一种是使用clear属性，另一种是形成bfc

使用clear属性的话，那么被设置clear：both的元素左右两边都不能有浮动元素，所以它就会到浮动元素的下面一行，从而撑开父元素。

bfc的话不会重叠浮动元素，且可以包含浮动。

所以只要设置父元素形成bfc，那么就可以包含浮动。设置以下属性即可形成bfc

`float`为 left|right

`overflow`为 hidden|auto|scroll

`display`为 table-cell|table-caption|inline-block

`position`为 absolute|fixed

##### 3.有几种定位方式，分别是如何实现定位的，参考点是什么，使用场景是什么？

| 值        | 属性                                       |
| -------- | ---------------------------------------- |
| inherit  | 规定应该从父元素继承 position 属性的值                 |
| static   | 默认值,没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明） |
| relative | 生成相对定位的元素，相对于元素本身正常位置进行定位,因此，`left:20px` 会向元素的 left 位置添加20px |
| absolute | 生成绝对定位的元素，相对于`static`定位以外的第一个祖先元素（offset parent）进行定位,元素的位置通过 `left`, `top`, `right` 以及 `bottom` 属性进行规定 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 `left`, `top`, `right` 以及 `bottom` 属性进行规定 |
| sticky   | CSS3新属性，表现类似`position:relative`和`position:fixed`的合体，在目标区域在屏幕中可见时，它的行为就像position:relative; 而当页面滚动超出目标区域时，它的表现就像position:fixed，它会固定在目标位置 |

常用的有relative，absolute，fixed三种

- relative 生成相对定位，参考点为元素本身的位置，使用场景：为绝对定位设定参照物或对元素自身位置进行局部调整
- absolute 生成绝对定位，参考点为第一个不是static定位的祖先元素（最高追溯到html标签），使用场景：当想让元素参照特定参照物进行定位时使用。
- fixed 生成绝对定位，参考点为浏览器窗口

##### 4.z-index 有什么作用? 如何使用?

因为绝对定位与文档流无关，所以绝对定位的元素可以覆盖页面上的其他元素，可以通过`z-index`属性控制叠放顺序，z-index越高，元素位置越靠上

所以z-index可以用于调整绝对定位元素的叠放顺序。使用方法是设置z-index数值，数值越高，元素位置越靠上。

##### 5.`position:relative`和负`margin`都可以使元素位置发生偏移?二者有什么区别

position:relative的话只是视觉上发生了移动，但是其所占据的位置是不变的，也就是不会影响周围元素的排列。

但是margin的话是带着位置一起移动的，会影响到周围元素的排列。

##### 6.BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明

BFC的全称是 [Block Format Content](http://www.w3.org/TR/CSS21/visuren.html#block-formatting)

设置以下属性即可形成BFC

- `float`为 left|right
- `overflow`为 hidden|auto|scroll
- `display`为 table-cell|table-caption|inline-block
- `position`为 absolute|fixed

BFC的作用

- BFC会阻止垂直外边距（margin-top、margin-bottom）折叠
- BFC不会重叠浮动元素
- BFC可以包含浮动

关于组织垂直外边距

按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。

因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠

关于包含浮动，只要设置父元素形成BFC,那么父元素就可以包含子元素的浮动，也就是达到了清除浮动的效果。

BFC的缺陷

使用BFC使用float的时候会使父容器长度缩短，overflow属性会影响滚动条和绝对定位的元素；position会改变元素的定位方式等等

##### 7.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例

定义：块的顶部外边距和底部外边距有时被组合(折叠)为单个外边距，其大小是组合到其中的最大外边距

三种常见情况

1.相邻的兄弟姐妹元素

```html
<p style="margin-bottom: 30px;">这个段落的下外边距被合并...</p>
<p style="margin-top: 20px;">...这个段落的上外边距被合并。</p>
```

可以发现这两个段落中间的距离，不是 ”上面段落的下边距“ 与 ”下面段落的上边距“ 的 求和 ，而是两者中的较大者（在此示例中为30px）。

2.块级父元素与其第一个/最后一个子元素

如果块级父元素中，不存在上边框、上内边距、内联元素、清除浮动这四条属性（也可以说，当上边框宽度及上内边距距离为0时），那么这个块级元素和其第一个子元素的上边距就可以说”挨到了一起“。此时这个块级父元素和其第一个子元素就会发生上外边距合并现象，换句话说，此时这个父元素对外展现出来的外边距将直接变成这个父元素和其第一个子元素的margin-top的较大者。

类似的，若块级父元素的 [`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom) 与它的最后一个子元素的[`margin-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom) 之间没有父元素的 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)、[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)、inline content、**height**、***min-height***、 **max-height** 分隔时，就会发生 下外边距合并现象。

父子外边距合并示例

```html
<div class=”parent”>
    <div class=”child”>
    </div>
</div>

.parent{
	width: 200px;
	height: 100px;
	margin-top:10px;
	background-color: red;
}
.child{
       width: 100px;
       height: 100px;
       margin-top:30px;
       background-color: yellow;
 }
这个例子中，父子元素上边距就都变成了30px
```

3.空块元素

如果存在一个空的块级元素，其 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)、[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)、inline content、[`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)、[`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height) 都不存在。那么此时它的上下边距中间将没有任何阻隔，此时它的上下外边距将会合并。例如：

```html
<p style="margin-bottom: 0px;">这个段落的和下面段落的距离将为20px</p>

<div style="margin-top: 20px; margin-bottom: 20px;"></div>

<p style="margin-top: 0px;">这个段落的和上面段落的距离将为20px</p>
```

BFC会组织外边距合并，所以形成BFC即可。

##### 代码题目

http://js.jirengu.com/fofeh/3/edit

http://js.jirengu.com/lotel/9/edit

http://js.jirengu.com/faruj/2/edit

http://js.jirengu.com/licim/1/edit

