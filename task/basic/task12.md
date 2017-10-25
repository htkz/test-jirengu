# Task 12

##### 1.什么是 CSS hack

针对不同的浏览器写不同的css,即针对不同浏览器来对css进行修改。

CSS Hack大致有3种表现形式，`CSS属性前缀法`、`选择器前缀法`以及`IE条件注释法`（即HTML头部引用if IE）Hack

- 属性前缀法(即类内部Hack)：例如 IE6能识别下划线"*"和星号" \* "，IE7能识别星号" * "，但不能识别下划线"*"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识
- 选择器前缀法(即选择器Hack)
- IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： `<!--[if IE]>IE浏览器显示的内容 <![endif]-->`，针对IE6及以下版本：`<!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->`。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效

##### 2.谈一谈浏览器兼容的思路

- 要不要做
  - 产品的角度（产品的受众、受众的浏览器比例、效果优先还是基本功能优先）
  - 成本的角度 (有无必要做某件事)
- 做到什么程度
  - 让哪些浏览器支持哪些效果
- 如何做
  - 根据兼容需求选择技术框架/库(jquery)
  - 根据兼容需求选择兼容工具([html5shiv.js](https://github.com/aFarkas/html5shiv)、[respond.js](https://github.com/scottjehl/Respond)、[css reset](https://segmentfault.com/a/1190000003021766)、[normalize.css](https://github.com/necolas/normalize.css)、[Modernizr](https://github.com/Modernizr/Modernizr))
  - [postCSS](https://github.com/postcss/postcss)
  - 条件注释、CSS Hack、js 能力检测做一些修补

##### 3.列举5种以上浏览器兼容的写法

1.条件注释

是指于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。

```Html
<!–-[if IE 7]>
<link rel="stylesheet" href="ie7.css" type="text/css" />
<![endif]–->
```

2.属性前缀

针对不同浏览器对属性的识别方式的区别

```css
.box{
  color: red;
  _color: blue; /*ie6*/
  *color: pink; /*ie67*/
  color: yellow\9;  /*ie/edge 6-8*/
}
```

3.清除浮动

```css
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
.clearfix{
  *zoom: 1; /* 仅对ie67有效 */
}
```

4.inline-block

```css
.target{
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
```

5.htmlshive&response

```css
 <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
```

##### 4.以下工具/名词是做什么的

- 条件注释：是指于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。
- IE Hack：针对ie的css hack
- js 能力检测：使用js检测浏览器是否支持某些属性和方法
- html5shiv.js：让一些自身不支持html5标签的浏览器支持html5。具体方式是使用createElement()来创建标签。
- respond.js：为了响应式的页面，为ie6／7／8模拟css3的媒体查询。
- css reset：因为浏览器自身有默认的样式，如padding和margin等， 不方便我们使用，所以我们要重置这些属性，如将margin设为0，字体设置为xx等等。
- normalize.css：是css发展到后期的产物，针对不同的标签的不同初始属性进行改良。
  - 保护有用的浏览器默认样式
  - 为大部分html元素提供一般化的样式
  - 修复浏览器自身bug并保证个浏览器一致性
  - 优化css可用性
  - 用注释和详细的文档来解释代码
- Modernizr：探测用户浏览器html5和css3的一些特性，根据用户浏览器是否支持这些特性来向html元素中添加不同的class。
- postCSS：PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。PostCSS的目标是通过自定义插件和工具这样的生态系统来改造CSS。与Sass和Less这些预编译器相同的原则，PostCSS把扩展的语法和特性转换成现代的浏览器友好的CSS。

##### 5.一般在哪个网站查询属性兼容性？

http://caniuse.com/