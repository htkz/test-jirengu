# Task 4

##### 1.HTML、XML、XHTML 有什么区别

HTML，超文本标记语言，是语法较为松散的、不严格的Web语言；

XML，可扩展标记语言，主要用于存储数据和结构；

XHTML，可扩展超文本标记语言，基于XML，作用与HTML类似，但语法更严格。

##### 2.怎样理解 HTML 语义化

语义化HTML是一种编写HTML的方式

选择合适的标签、使用合理的代码结构，便于开发者阅读，同时让浏览器的爬虫和机器很好地解析。

##### 3.怎样理解内容与样式分离的原则

写 HTML 的时候先不管样式, 重点放在HTML的结构和语义化上，让 HTML 能体现页面结构或者内容。之后再去写样式。

写 JS 的时候，尽量不要用 JS 去直接操作样式，而是通过给元素添加删除class来控制样式变化

HTML 内不允许出现属性样式，尽量不要出现行内样式

##### 4.有哪些常见的meta标签

```Html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

##### 5.文档声明的作用?严格模式和混杂模式指什么?<!doctype html> 的作用?

##### 5.1文档声明的作用

声明位于文档中的最前面的位置，处于标签之前。

此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。

##### 5.2严格模式和混杂模式指什么

严格模式的排版和 JS 运作模式是以该浏览器支持的最高标准运行。

在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

##### 5.3<!doctype html> 的作用

DOCTYPE是document type(文档类型)的简写，用来说明你用的XHTML或者HTML是什么版本。 其中的DTD叫文档类型定义，里面包含了文档的规则，浏览器就根据你定义的DTD来解释你页面的标识，并展现出来。

##### 6.浏览器乱码的原因是什么？如何解决

##### 6.1产生原因

下面这个流程是我们写入文件到展示文件的简单描述： 

1. 我们使用编辑器编写 HTML 文件 
2. 保存编写的HTML文件 
3. 使用浏览器打开HTML文件 
4. HTML文件在浏览器展示

乱码产生的根源就在与第2步骤和第4步。

在第2步保持文件时会把我们写入的文字使用编辑器默认的编码方式进行保存。

在第4步浏览器打开网页时，它并不知道你的这个文件是使用什么编码方式，于是自作主张使用了默认解码方式，导致编码和解码不匹配，产生乱码。 

##### 6.2解决方法

如果你的文件是保存为utf-8格式，那么一定要在html 的 `<head>`里添加`<meta charset="utf-8">`，这句话的意思是告诉浏览器在打开这个页面的时候不要去猜了，直接用utf-8去解码。 同理，如果你的文件保存为gbk格式，一定在文件里添加`<meta charset="gbk">`。

##### 6.3总结

乱码产生的根本原因是你保存的编码格式和浏览器解析时的解码格式不匹配导致的。 

##### 7.常见的浏览器有哪些，什么内核

常见浏览器有IE、Google Chrome、Safari、opera、Firefox等，还有世界之窗、傲游浏览器、360安全浏览器、搜狗告诉浏览器、QQ安全浏览器、猎豹安全浏览器等。
**Trident(IE内核)**：IE浏览器，很多国内浏览器，以及很多双核浏览器的其中“一核”都是Trident。
**Gecko**：FireFox浏览器等。
**Webkit**：Chrome浏览器，Safari浏览器等。
**Chromium/Blink**：Chromium fork 自开源引擎 WebKit，却把 WebKit 的代码梳理得可读性提高很多，Chrome浏览器就使用Chromium内核，搜狗、360、QQ浏览器等等双核浏览器的一核都是Chromium。2013年谷歌宣布 Chromium 项目中研发 Blink 渲染引擎，内置于 Chrome 浏览器之中。
**Presto**：Opera浏览器先前使用的内核，Opera 在 2013 年 2 月宣布放弃 Presto后使用 WebKit 分支的 Chromium 引擎作为自家浏览器核心引擎，在 Chrome 推出 Blink 引擎之后，Opera也转而使用Blink 作为浏览器核心引擎。
目前移动端系统内置浏览器的内核， iOS 平台主要是 WebKit，
Android 4.4 之前的系统浏览器内核是 WebKit；Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink；Windows Phone 8 系统浏览器内核则是 Trident.

##### 8.列出常见的标签，并简单介绍这些标签用在什么场景

- H1-h6 标题
- p 段落
- a 链接
- img 图片
- div 区域块
- ul unordered list无序列表
- ol ordered list 有序列表
- li list item 用于嵌套在列表中
- button 按钮
- strong em 强调
- iframe 嵌入页面
- table 表格





