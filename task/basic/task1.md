# Task1

##### 1.课程大纲

> https://www.processon.com/view/link/58317957e4b0645c0ed01fe3

##### 2.书籍推荐

若愚

- JavaScript 高级程序设计
- JavaScript 权威指南
- 高性能网站建设指南
- JavaScript 设计模式
- 图解 HTTP

方方

> https://zhuanlan.zhihu.com/p/23700861

##### 3.当你输入url到看到网页，这之间都发生了什么

我们考虑一个比较简化的情况，假定一个最简单的http请求，没有代理／ipv4，并且在连接过程中没有发生问题。

1. 浏览器检查缓存，如果请求的东西在缓存里并且没有没有过期，跳到第九步。
2. 浏览器向操作系统询问服务器的ip地址
3. 操作系统执行dns查询并向浏览器返还ip地址给浏览器
4. 浏览器和服务器建立tcp连接（如果用https的话，这一步会更加复杂）
5. 浏览器通过tcp连接发送http请求
6. 浏览器接受http响应，之后可能关闭tcp连接，或者重用于其他请求
7. 浏览器检查响应是否是重定向还是条件响应（3xx结果状态码），或者授权请求（401），或者错误代码（4xx和5xx）。以上这些响应结果的处理和正常响应（2xx）的处理是不同的。
8. 如果允许缓存的话，响应会被存储在缓存里。
9. 浏览器解码响应。
10. 浏览器根据响应结果决定做什么（响应可能是一个html页面，一张图片等等）
11. 浏览器渲染响应结果，如果是无法辨别类型的响应，就提供下载对话框。

以上内容只是一个简单的总结。与此同时还有很多其他事情并行发生，例如处理输入地址，添加历史记录，向用户显示进度，检查恶意内容等等，并且整个操作的复杂度将会上升一个数量级如果你使用https（证书和密码等等）的话。

##### 4.w3c

万维网联盟（W3C）是万维网（简称WWW或W3）的主要国际标准组织。

##### 5.ECMA

Ecma，信息通信技术和消费电子国际标准组织。 以前是“欧洲计算机制造商协会”。