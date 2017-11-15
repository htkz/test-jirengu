### MDN-HTTP阅读笔记

[TOC]

#### 0.前言

以下内容整理自mdn上的http协议。确切的说就是把内容看了一遍， 然后把自己不熟悉的地方做了一个简单的记录和摘抄。

#### 1.概述

##### 1.1 定义

超文本传输协议（HTTP）是用于传输诸如HTML的超媒体文档的[应用层协议](https://en.wikipedia.org/wiki/Application_Layer)。它被设计用于Web浏览器和Web服务器之间的通信。HTTP遵循经典的[客户端-服务端模型](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。HTTP是[无状态协议](http://en.wikipedia.org/wiki/Stateless_protocol)，意味着服务器不会在两个请求之间保留任何数据（状态）。

##### 1.2 出现时间

http被设计与20世纪90年代初期

##### 1.3 渲染流程

要渲染出一个网页，浏览器首先要发送第一个请求来获取这个页面的HTML文档，再解析它并根据文档中的资源信息发送其他的请求来获取脚本信息，或者CSS来进行页面布局渲染，还有一些其它的页面资源（如图片和视频等）。然后，它把这些资源结合到一起，展现出来一个完整的文档，也就是网页。打开一个网页后，浏览器还可以根据脚本内容来获取更多的资源来更新网页。

##### 1.4 请求响应

经典的http请求和回应

![request](https://mdn.mozillademos.org/files/13687/HTTP_Request.png)

请求由下面的元素组成：

- 一个HTTP的[method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)，经常是由一个动词像[`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET), [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 或者一个名词像[`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)，[`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)来定义客户端的动作行为的。通常客户端的操作都是获取资源（用GET方法）或者发送一个[HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)表单的值（用POST方法），虽然在一些情况下也会有其他的操作。
- 要获取的资源的路径，通常是上下文中就很明显的元素资源的URL，它没有[protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol) （`http://），`[domain](https://developer.mozilla.org/en-US/docs/Glossary/domain)（`developer.mozilla.org）`，或是TCP的[port](https://developer.mozilla.org/en-US/docs/Glossary/port)（HTTP是80端口）。
- HTTP协议的版本号。
- 为服务端表达其他信息的可选择性的[headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)。
- 对于一些像POST这样的方法，报文的body就包含了发送的资源，这个body与回应报文的body类似。

![response](https://mdn.mozillademos.org/files/13691/HTTP_Response.png)

回应报文包含了下面的元素：

- HTTP的版本号。
- 一个状态码（[status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)），来告知对应的请求发送成功或失败，以及失败的原因。
- 一个状态信息，这个信息是非权威的状态码描述信息，也就是说可以由服务端自行设定的。
- HTTP [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)，与请求的很像。
- 可选的，但是比在请求报文中更加常见地包含获取资源的body。

#### 2.典型的HTTP会话

##### 2.1 会话流程

在像 HTTP 这样的客户端-服务器协议中, 会话分为三个阶段:

1. 客户端建立一条 TCP 连接 (如果传输层不是 TCP, 也可以是其他适合的连接)。
2. 客户端发送请求并等待应答。
3. 服务器处理请求并送回应答, 包括一个状态码和对应的数据。

从 HTTP/1.1 开始, 连接在完成第三阶段后不再关闭, 客户端可以再次发起新的请求: 这意味着第二步和第三步可以进行数次。

##### 2.2 http请求

客户端请求由一系列文本指令组成, 并使用 CRLF 分隔, 它们被划分为三个块:

1. 第一行包括请求方法及其参数:
   - 文档路径, 即不包括协议和域名的绝对路径 URL
   - 使用的 HTTP 协议版本
2. 接下来的行每一行都表示一个 HTTP 首部, 为服务器提供关于所需数据的信息 (例如语言, 或 MIME 类型)，或是一些改变请求行为的数据 (例如当数据已经被缓存时就不再应答). 这些 HTTP 首部组成以一个空行结束的一个块。
3. 最后一块是可选的数据块, 包括了更多数据, 这主要被 POST 方法使用.

请求实例1

```
GET / HTTP/1.1  				// 第一块
Host: developer.mozilla.org 	// 第二块
Accept-Language: fr 			// 第二块
                    			// 空行
```

注意最后的空行，它把首部与数据块分隔开。由于在 HTTP 首部中没有 `Content-Length`，数据块是空的，所以服务器可以在收到代表首部结束的空行后就开始处理请求。

请求实例2

```
POST /contact_form.php HTTP/1.1 								// 第一块
Host: developer.mozilla.org     								// 第二块
Content-Length: 64              								// 第二块
Content-Type: application/x-www-form-urlencoded					// 第二块
																// 空行
name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue // 第三块
```

注意要点

GET 方法请求指定的资源。GET请求应该只被用于获取数据。

##### 2.3 http响应

当用户代理发送请求之后, web 服务器会处理它, 并最终送回一个响应. 与客户端请求很类似地, 服务器响应由一系列文本指令组成, 并使用 CRLF 分隔, 但它们被划分为三个不同的块:

1. 第一行是 *状态行*, 包括使用的 HTTP 协议版本, 状态码和一个状态描述 (可读的文本).
2. 接下来的行每一行都表示一个 HTTP 首部, 为客户端提供关于所发送数据的一些信息 (如数据大小, 使用的压缩算法, 缓存指示). 与客户端请求的头部块类似, 这些 HTTP 首部组成一个块, 并以一个空行结束.
3. 最后一块是数据块, 包括响应的数据 (如果有的话).

响应实例1-成功

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (这里是 29769 字节的网页信息)
```

响应实例2-资源不存在

```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (包含一个站点自定义的页面, 帮助用户找到丢失的资源)
```

