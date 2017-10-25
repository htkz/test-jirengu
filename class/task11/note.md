1. 文档流

   内联元素从左往右流动,如果宽度不够，就

   块级元素从上往下流，另起一行

   Word-break解决英文的单词换行问题。

2. 一个块级元素的高度是有内部文档流元素的高度总和决定（不相等）

3. 内联元素的高度

   中文和英文对齐是基线对齐,span之间基线对齐。

   有的字体默认行高是字体大小(font-size)的1.4倍，有的是1.2倍，所以字体高度和字体种类是有关系的。可以设置line-height。

   line-height设置大于font-size,以免玄学问题。

4. Position:fixed脱离文档流，定位相对于当前屏幕视野。fixed之后会内缩，要设置width:100%;

5. Max-width比width更好，因为可以自适应

6. span不接受设置宽高，要先改成display:inline-block;

7. 写了高度就要设置垂直居中

8. 对于内敛元素，尽量不要设置宽度和高度，而是通过padding来达到宽度和高度。这样不管内容增加或者减少，都是好看的。固定死了宽高之后再增加内容就会出bug。

9. Top:100%优雅地到达左下角。

10. 外面不要加padding，会变胖。在里面简历一个新的div来加padding

11. 两列适应只需要设置width:50%;或者第一个30%，第二个70%来调整比例。

12. Icon-font阿里巴巴的图标网站，好处是简书、微博等国内的logo都有。

13. banner图片网站wallhaven

14. 关于banner的结构，一般来说是设置nav为的position为fixed，然后div.banner里面设置background。

    ​

    ​

