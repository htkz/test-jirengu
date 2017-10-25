# CSS学习

#### 视频总结

##### 1.border大法

在每一个css文件前面加上*{border:1px solid black;}来看清每一个元素所占的位置，观察儿不是猜

##### 2.学习路线

直接研究前端框架，如bootstrap等，跟着官网学习他的css实现。因为css较为独立，所以不需要连贯的知识。

#### 题目回答

##### 1.CSS的全称是什么

层叠样式表

##### 2.CSS有几种引入方式? link 和@import 有什么区别?

##### 2.1四种引入方式。

- 内联方式：直接在 HTML 标签中的 `style` 属性中添加 CSS。
- 嵌入方式：在 HTML 头部中的 `<style>` 标签下书写 CSS 代码。
- 链接方式：在 HTML 头部的 `<head>` 中使用`<link>`标签引入外部的 CSS 文件。
- 导入方式：使用 CSS 规则引入外部 CSS 文件，@import url(style.css)。

##### 2.2link和import的区别

- link 属于 HTML，通过 `<link>` 标签中的 href 属性来引入外部文件，而 [@import](https://segmentfault.com/u/import) 属于 CSS，所以导入语句应写在 CSS 中，要注意的是导入语句应写在样式表的开头，否则无法正确导入外部文件；
- [@import](https://segmentfault.com/u/import) 是 CSS2.1 才出现的概念，所以如果浏览器版本较低，无法正确导入外部样式文件；
- 当 HTML 文件被加载时，link 引用的文件会同时被加载，而 [@import](https://segmentfault.com/u/import) 引用的文件则会等页面全部下载完毕再被加载；

##### 3.以下这几种文件路径分别用在什么地方，代表什么意思?

- css/a.css 获取当前目录的css文件夹下的a.css，相对路径，适用于本地和服务器
- ./css/a.css同上，知识换了一个写法，相对路径，适用于本地和服务器
- b.css 获取当前目录下的b.css文件，相对路径，适用于本地和服务器
- ../imgs/a.png获取上一目录下的imgs文件夹下的a.png图片，相对路径，适用于本地和服务器
- /Users/hunger/project/css/a.css 获取当前操作系统下的a.css，绝对路径，适用于本地。
- /static/css/a.css 获取网站当前路径下的static文件夹中css文件中的a.css文件，网站路径。
- http://cdn.jirengu.com/kejian1/8-1.png 获取链接地址中的图片，网站路径。

##### 4.如果我想在js.jirengu.com上展示一个图片，需要怎么操作?

将图片上传到图床上，然后获取改图片的地址，在src中引用该地址。

##### 5.列出5条以上html和 css 的书写规范

- 统一使用小写
- 不使用内联的style属性定义样式
- id和class使用有意义的词汇，分隔符使用-
- 属性为0的值省略单位
- 属性名冒号后面添加一个空格
- 块内容锁进

##### 6.截图介绍 chrome 开发者工具的功能区

![B6930BCD-4B7D-446F-8ABC-7057AAF0FD2E](/Users/htkz/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/Users/457997235/QQ/Temp.db/B6930BCD-4B7D-446F-8ABC-7057AAF0FD2E.png)

- Elements中展示的是当前页面的html元素
- Console中是针对js的命令行
- source中存储的事当前页面加载的文件
- network则是现实页面加载过程各个文件在不同时间加载的一个过程
- Elements左边的toggle device可以模拟不同的上网终端
- styles展示css样式
- event listener展示不同元素的event事件

![Imgur](https://i.imgur.com/3Qb03D0.jpg)