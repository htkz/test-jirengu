##### linux指令复习

pwd 查看当前路径

ls 不包含隐藏文件

Ls - l 查看详细信息

ls -a 查看所有文件，包含隐藏文件

ls -al 查看当前目录所有文件的详细信息

touch readme.md   创建文件

rm -rf node_modules 删除文件夹

mv readme.md README.md 重命名

cd / 	root

cd ~		home

域名解析流程

- 浏览器缓存 – 浏览器会缓存DNS记录一段时间
- 系统缓存 - 从 Hosts 文件查找是否有该域名和对应 IP。
- 路由器缓存 – 一般路由器也会缓存域名信息。
- ISP DNS 缓存 – 比如到电信的 DNS 上查找缓存。
- 如果都没有找到，则向根域名服务器查找域名对应 IP，根域名服务器把请求转发到下一级，知道找到 IP

浏览器处理

- HTML字符串被浏览器接受后被一句句读取解析
- 解析到link 标签后重新发送请求获取css
- 解析到 script标签后发送请求获取 js，并执行代码
- 解析到img 标签后发送请求获取图片资源

渲染网页

- 浏览器根据 HTML 和 CSS 计算得到渲染树，绘制到屏幕上
- js 会被执行

