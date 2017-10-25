# Task 5

##### 1.form表单有什么作用？有哪些常用的input 标签，分别有什么作用？

##### 1.1 form表单作用

form表单用于获取用户输入并向服务器提交

1.2 常用input标签及其作用

- <input type="text" name="username" > 用于输入单行信息
- <input id="password" type="password"> 用于输入密码，输入内容以黑色圆点显示
- <input type="checkbox" name="hobby"> 用于用户勾选，有两种状态（勾选／未勾选）
- <input type="radio" name="sex" value="man"> 单选框，同一个name下的radio框用户只能勾选一个
- <input type="file" name="myfile" accept="image/png"> 用于上传文件
- <input type="button" value="Buttom" /> 不会提交
- <input type="submit" value="Submit" /> 会提交
- <input type="reset" value="Reset" /> 重置输入

##### 2.post 和 get 方式的区别？

get方式更多用于向服务器查询内容，提交内容较少，不适合提交过多内容。同时因为提交内容会被串联到url的尾部，所以不太安全，不适合提交保密内容。

post方式更多用于向服务器提交内容，适合提交大容量的消息。同时提交内容不会被串联到url尾部，更加安全，适合提交保密内容。

##### 3.在input里，name 有什么作用？

name在我理解首先是代表这个input的键，也就是在向服务器提交的数据里面的键值对的键。

另一个就是针对向radio、checkbox这种有多个选项的输入进行分组。

##### 4.radio 如何分组?

根据name分组。

##### 5.placeholder属性有什么作用?

用于提示用户。会在用户输入前显示在输入框里，在用户开始输入后消失。

##### 6.type=hidden隐藏域有什么作用? 举例说明

可以用于存储数值。例如csrf验证，现在当前页面使用type=hidden的输入框存储下来一个数值，之后在用户提交信息后，对这个值进行验证，来判断是否为正常输入，而非恶意攻击。

##### 7.博客链接

> http://www.jianshu.com/p/b2dacb3b47b0

##### 8.预览地址

> https://htkz.github.io/demos/test/index.html