**题目1：** ajax 是什么？有什么作用？

定义：（异步JavaScript和XML）Asynchronous JavaScript + XML, 其本身不是一种新技术，而是一个在 2005年被Jesse James Garrett提出的新术语，用来描述一种使用现有技术集合的‘新’方法, 包括: [HTML](https://developer.mozilla.org/en-US/docs/HTML) or [XHTML](https://developer.mozilla.org/en-US/docs/XHTML), [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript), [The Document Object Model](https://developer.mozilla.org/en-US/docs/DOM), [XML](https://developer.mozilla.org/en-US/docs/XML), [XSLT](https://developer.mozilla.org/en-US/docs/XSLT), 以及最重要的 [XMLHttpRequest object](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest).

作用：网页程序能够逐步快速地将更新呈现在用户界面上，不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作，使用户体验更加良好。

**题目2：** 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

- 前后端开发联调需要注意事项： 
  - 约定数据：有哪些需要传输的数据，数据类型是什么；
  - 约定接口：确定接口名称及请求和响应的格式，请求的参数名称、响应的数据格式；根据这些约定整理成接口文档
- 后端接口完成前mock数据： 
  可以根据接口文档，使用假数据来验证我们制作的页面响应和接口是否正常。可以搭建php本地服务器用，php写脚本提供临时数据；也可使用使用server-mock来模拟假数据

**题目3：**点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?

设置一个变量作为状态锁

```javascript
var isDataArrive = true;
if(!isDataArrive) {
  return;
}
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    // code
    isDataArrive = true; // 状态为4，代表数据已经到了，打开状态锁
  }
}
// code
xhr.send();
isDataArrive = false; //发送完本次数据，处于数据未到的状态，关闭状态锁
```

**题目4：**实现加载更多的功能，[效果范例466](http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/1.html)，后端在本地使用server-mock来模拟数据

Html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
  <div class="content">
    <p>内容1</p>
    <p>内容2</p>
  </div>
  <a href="#" id="more">加载更多</a>
  <script src="js/main.js"></script>

</body>
</html>
```

Css

```css
body  {
  text-align: center;
}

.content {
  text-align: left;
}

p {
  border: 1px solid #999;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}

p:hover {
  color: white;
  background-color: green;
}

a {
  text-decoration: none;
  color: black;
  border: 1px solid #E17271;
  color: #E17271;
  border-radius: 3px;
  padding: 5px;
}
```

main.js

```javascript
var index = 3;
var isDataArrive = true;
var content = document.querySelector('.content')

document.querySelector('#more').addEventListener('click', function(e) {
    e.preventDefault();
    if(!isDataArrive) {
        return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
            var result = JSON.parse(xhr.responseText);
            // console.log(result);
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < result.length; i++) {
                var p = document.createElement('p');
                p.innerText = result[i];
                fragment.appendChild(p);
            }
            content.appendChild(fragment);
            index += 5;
            isDataArrive = true;
        }
    }
    xhr.open('get', '/moreContent?index='+index+'&num=5', true);
    xhr.send();
    isDataArrive = false;
})
```

Router.js

```javascript
router.get('/moreContent', function(req, res) {
    var index = req.query.index;
    var num = req.query.num;
    var arr = [];
    for (var i = index; i < parseInt(num) + parseInt(index); i++) {
        arr.push('内容'+i);
    }
    res.send(arr)
})
```

