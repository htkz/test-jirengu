# Task7

#### 听课记录

##### 1.点击事件

```css
a {
  color:red;
}
a:visited {
  color: yellow;
}
a:hover {
  color:blue;
}
a:active {
  color:black;
}
```

因为越往下优先级越高，所以我们把active放在最下面，也就是鼠标点击上去但还没有松开的时候，我们是有普通状态+hover状态+active状态的，此时我们需要active的状态，所以我们把active写在最下面。



#### 任务回答 

##### 1.class和id的使用场景

class用于具有一类属性的标签上，换句话html中可以有很多元素具有相同的class。

id则适用于独一无二的标签，即html中的元素的id是不能够重复的。

##### 2.CSS选择器常见的有几种?

##### 2.1基础选择器

| 选择器     | 含义                             |
| ------- | ------------------------------ |
| *       | 通用元素选择器，匹配页面任何元素（这也就决定了我们很少使用） |
| #id     | id选择器，匹配特定id的元素                |
| .class  | 类选择器，匹配class**包含**(不是等于)特定类的元素 |
| element | 标签选择器                          |

##### 2.2组合选择器

| 选择器            | 含义                                       |
| -------------- | ---------------------------------------- |
| E,F            | 多元素选择器，用`,`分隔，同时匹配元素E或元素F                |
| E F            | 后代选择器，用空格分隔，匹配E元素所有的**后代**（不只是子元素、子元素向下递归）元素F |
| E>F            | 子元素选择器，用`>`分隔，匹配E元素的所有**直接子元素**          |
| E+F            | 直接相邻选择器，匹配E元素之后的相邻的同级元素F                 |
| E~F            | 普通相邻选择器（弟弟选择器），匹配E元素之后的同级元素F（无论直接相邻与否）   |
| .class1.class2 | id和class选择器和选择器连写的时候中间没有分隔符，`.`和 `#` 本身充当分隔符的元素 |
| element#id     | id和class选择器和选择器连写的时候中间没有分隔符，`.`和 `#` 本身充当分隔符的元素 |

##### 2.3属性选择器

| 选择器              | 含义                                       |
| ---------------- | ---------------------------------------- |
| E[attr]          | 匹配所有具有属性attr的元素，div[id]就能取到所有有id属性的div   |
| E[attr = value]  | 匹配属性attr值为value的元素，div[id=test],匹配id=test的div |
| E[attr ~= value] | 匹配所有属性attr具有多个空格分隔、其中一个值等于value的元素       |
| E[attr ^= value] | 匹配属性attr的值以value**开头**的元素                |
| E[attr $= value] | 匹配属性attr的值以value**结尾**的元素                |
| E[attr *= value] | 匹配属性attr的值**包含**value的元素                 |

##### 2.4伪类选择器

| 选择器           | 含义                        |
| ------------- | ------------------------- |
| E:first-child | 匹配作为长子（第一个子女）的元素E         |
| E:link        | 匹配所有未被点击的链接               |
| E:visited     | 匹配所有已被点击的链接               |
| E:active      | 匹配鼠标已经其上按下、还没有释放的E元素      |
| E:hover       | 匹配鼠标悬停其上的E元素              |
| E:focus       | 匹配获得当前焦点的E元素              |
| E:lang(c)     | 匹配lang属性等于c的E元素           |
| E:enabled     | 匹配表单中可用的元素                |
| E:disabled    | 匹配表单中禁用的元素                |
| E:checked     | 匹配表单中被选中的radio或checkbox元素 |
| E::selection  | 匹配用户当前选中的元素               |

| 选择器                   | 含义                                       |
| --------------------- | ---------------------------------------- |
| E:root                | 匹配文档的根元素，对于HTML文档，就是HTML元素               |
| E:nth-child(n)        | 匹配其父元素的第n个子元素，第一个编号为1                    |
| E:nth-last-child(n)   | 匹配其父元素的倒数第n个子元素，第一个编号为1                  |
| E:nth-of-type(n)      | 与:nth-child()作用类似，但是仅匹配使用同种标签的元素         |
| E:nth-last-of-type(n) | 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素   |
| E:last-child          | 匹配父元素的最后一个子元素，等同于:nth-last-child(1)      |
| E:first-of-type       | 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)   |
| E:last-of-type        | 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1) |
| E:only-child          | 匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1) |
| E:only-of-type        | 匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1) |
| E:empty               | 匹配一个不包含任何子元素的元素，文本节点也被看作子元素              |
| E:not(selector)       | 匹配不符合当前选择器的任何元素                          |

##### 2.5伪元素选择器

| 选择器             | 含义            |
| --------------- | ------------- |
| E::first-line   | 匹配E元素内容的第一行   |
| E::first-letter | 匹配E元素内容的第一个字母 |
| E::before       | 在E元素之前插入生成的内容 |
| E::after        | 在E元素之后插入生成的内容 |

##### 3.选择器的优先级是怎样的?对于复杂场景如何计算优先级？

##### 3.1选择器的优先级

- 在属性后面使用 `!important` 会覆盖页面内任何位置定义的元素样式 `p {color:red!important;}`
- 作为style属性写在元素标签上的内联样式  `<style>p {color:white;}</style>`
- id选择器 `#test {color: red;}`
- 类选择器`.test {color: red;}`
- 伪类选择器`a:hover {color: red;}`
- 属性选择器`a[href="123"] {color:blue;}`
- 标签选择器`p {color:red;}`
- 通配符选择器`*{padding:0; margin:0;}`
- 浏览器自定义

##### 3.2复杂场景计算

将选择器分为四个等级abcd，优先级a最高，依次递减。之后根据选择器的数量进行加权计算，先计算a的数量，a的数量多的优先，如果a类数量相同，再计算b的数量，依次类推。

行内样式  ==> a

ID 选择器 ==> b

类，属性选择器和伪类选择器 ==> c

标签选择器、伪元素 ==> d

##### 4.a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？

```css
a {
  color:red;
}
a:visited {
  color: yellow;
}
a:hover {
  color:blue;
}
a:active {
  color:black;
}
```

顺序如上图所示。因为越往下优先级越高，所以我们把active放在最下面，也就是鼠标点击上去但还没有松开的时候，我们是有普通状态+hover状态+active状态+visited状态（如果点击过）的，此时我们需要展示的是active的状态，所以我们把active写在最下面。其他的同理。

##### 5.以下选择器分别是什么意思?

```css
#header{} 选择id为header的元素 
.header{} 选择class为header的元素 
.header .logo{} 选择class为header的元素的后代中class为logo的元素
.header.mobile{} 选择class中同时包含header和mobile的元素
.header p, .header h3{} 选择clas为header的元素的后代中标签为p的h3的元素
#header .nav>li{} 选择id为header的元素的后代中class为nav的元素的子元素中标签为li的元素
#header a:hover{} 选择id为header的元素的后代中标签为a的元素被鼠标hover时的状态
#header .logo~p{} 选择id为header的元素的后代中class为logo的元素的同级的标签为p的元素
#header input[type="text"]{}选择id为header的元素的后代中标签为input且type属性为text的元素
```

##### 6.列出你知道的伪类选择器

| 选择器           | 含义                        |
| ------------- | ------------------------- |
| E:first-child | 匹配作为长子（第一个子女）的元素E         |
| E:link        | 匹配所有未被点击的链接               |
| E:visited     | 匹配所有已被点击的链接               |
| E:active      | 匹配鼠标已经其上按下、还没有释放的E元素      |
| E:hover       | 匹配鼠标悬停其上的E元素              |
| E:focus       | 匹配获得当前焦点的E元素              |
| E:lang(c)     | 匹配lang属性等于c的E元素           |
| E:enabled     | 匹配表单中可用的元素                |
| E:disabled    | 匹配表单中禁用的元素                |
| E:checked     | 匹配表单中被选中的radio或checkbox元素 |
| E::selection  | 匹配用户当前选中的元素               |

##### 7.div:first-child、div:first-of-type、div :first-child和div :first-of-type的作用和区别 **（注意空格的作用）**

- div:first-child选择所有标签为div且位于父元素第一个子元素位置的元素
- div:first-of-type选择所有标签为div且是其父元素的同类型第一个的子元素的元素
- div :first-child 选择标签为div的元素的第一个子元素
- div :first-of-type 选择标签为div的元素的同类型的第一个元素

##### 8.运行如下代码，解析下输出样式的原因

首先`.item1:first-child{color: red;}`这行代码让class为item1的占有第一个子元素位置的元素颜色变为红色，因为p是div.ct的三个子元素的第一个子元素，所以p元素就变成了红色。

然后`.item1:first-of-type{background: blue;}`这行代码让class为item1的元素中同类型的第一个元素的背景变为蓝色。所以div.ct的三个元素中，第一个p和第一个h3背景都变色了，而第二个h3就没有变化。