**题目1：** HTML5是什么？有哪些新特性？有哪些新增标签？如何让低版本的 IE 支持 HTML5新标签

1.1 定义

HTML5是超文本标记语言的第五次重大修改，2014年10月29日标准规范制定完成

1.2 新特性

- 语义特性

  HTML5赋予网页更好的意义和结构。更加丰富的标签将随着对RDFa的，微数据与微格式等方面的支持，构建对程序、对用户都更有价值的数据驱动的Web。

- 本地存储特性

  基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。Indexed DB（html5本地存储最重要的技术之一）和API说明文档。

- 设备兼容特性

  从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。

- 连接特性

  更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。

- 网页多媒体特性

  支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

  三维、图形及特效特性（Class: 3D, Graphics & Effects）

  基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。

- 性能与集成特性

  没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，解决以前的跨域等问题，帮助您的Web应用和网站在多样化的环境中更快速的工作。

1.3 新标签

| 元素         | 描述                                       |
| ---------- | ---------------------------------------- |
| canvas     | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API |
| audio      | 定义音频内容                                   |
| video      | 定义视频（video 或者 movie）                     |
| source     | 定义多媒体资源 `<video>` 和`<audio>`             |
| embed      | 定义嵌入的内容，比如插件                             |
| track      | 为诸如 `<video>` 和 `<audio>` 元素之类的媒介规定外部文本轨道 |
| datalist   | 定义选项列表。与 input 元素配合使用该元素，来定义 input 可能的值  |
| keygen     | 规定用于表单的密钥对生成器字段                          |
| output     | 定义不同类型的输出，比如脚本的输出                        |
| article    | 定义页面正文内容                                 |
| aside      | 定义页面内容之外的内容                              |
| bdi        | 设置一段文本，使其脱离其父元素的文本方向设置                   |
| command    | 定义命令按钮，比如单选按钮、复选框或按钮                     |
| details    | 用于描述文档或文档某个部分的细节                         |
| dialog     | 定义对话框，比如提示框                              |
| summary    | 标签包含 details 元素的标题                       |
| figure     | 规定独立的流内容（图像、图表、照片、代码等等）                  |
| figcaption | 定义 `<figure>` 元素的标题                      |
| footer     | 定义 section 或 document 的页脚                |
| header     | 定义了文档的头部区域                               |
| mark       | 定义带有记号的文本                                |
| meter      | 定义度量衡。仅用于已知最大和最小值的度量                     |
| nav        | 导航                                       |
| progress   | 定义任何类型的任务的进度                             |
| ruby       | 定义 ruby 注释（中文注音或字符）                      |
| rt         | 定义字符（中文注音或字符）的解释或发音                      |
| rp         | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容     |
| section    | 定义文档中的节（section、区段）                      |
| time       | 定义日期或时间                                  |
| wbr        | 规定在文本中的何处适合添加换行符                         |

1.4 如何让低版本的 IE 支持 HTML5新标签

对于html5中一些新增加的标签，如aside,article，可以引入html5shiv.js等库,能让低版本IE识别html5标签。

**题目2：** input 有哪些新增类型？

- email
- url
- number
- range
- Date Picker
  - Date
  - month
  - week
  - time
  - datatime

**题目3：** 浏览器本地存储中 cookie 和 localStorage 有什么区别？ localStorage 如何存储删除数据。

cookie比较小，主要用途是保存登录信息，localStorage 是 HTML5 标准中新加入的技术

| 特性      | Cookie                                   | localStorage                        |
| ------- | ---------------------------------------- | ----------------------------------- |
| 数据的生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                        |
| 存放数据大小  | 4K左右                                     | 一般为5MB                              |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题    | 仅在客户端（即浏览器）中保存，不参与和服务器的通信           |
| 易用性     | 需要程序员自己封装，源生的Cookie接口不友好                 | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |

localStorage删除数据

```
  localStorage.removeItem('image');//删除单个
  localStorage.clear();//清空全部
```

**题目4：** 写出如下 CSS3效果的简单事例

```css
1. 圆角， 圆形
border-redius: 5px;
border-radius: 50%;
2. div 阴影
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
3. 2D 转换：放大、缩小、偏移、旋转
旋转 transform: rotate(30deg);
偏移 transform: translate(x, y);
放大\缩小 scale(x, y)
4. 3D 转换：移动、旋转
旋转 rotateX rotateY rotateZ
移动 transform: perspective()
5. 背景色渐变
background: linear-gradient(to bottom right, rgba(255,0,0,0), rgba(255,0,0,1));
6. 过渡效果
transition: 1s;
7. 动画
@keyframes rainbow {
  0% {background: #c00;}
  50% {background: #fff;}
  100% {background: #d00;}
}
animation: 3s rainbow;
```

**题目5：** 实现如下全屏图加过渡色的效果（具体效果随意）[DEMO230](http://book.jirengu.com/jirengu-inc/js-works/css3/big-cover.html)

> http://js.jirengu.com/nogox

**题目6：** 写出如下 loading 动画效果 [DEMO1236](http://book.jirengu.com/jirengu-inc/js-works/css3/loading1.html) [DEMO2223](http://book.jirengu.com/jirengu-inc/js-works/css3/loading2.html)

> http://js.jirengu.com/vemot/3/edit

