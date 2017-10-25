# Task 9

**题目1：** DOM0 事件和DOM2级在事件监听使用方式上有什么区别？

1. DOM0级事件监听就是把一个方法赋值给一个元素的事件处理程序属性。将这些属性的值设置为一个函数，就可以指定事件处理程序。一个事件只能绑定一次，并且新方法会覆盖老方法。例如`btn.onclick=function(){}`
2. DOM2级事件监听定义了两个方法用于处理指定和删除事件处理程序的操作：addEventListener、removeEventListener。所有的DOM节点都包含这两个方法，并且它们都接受三个参数：事件类型、事件处理方法、布尔参数。例如`addEventListener`、`removeEventListener`。可以选择按照冒泡的顺序处理还是捕获的顺序处理。

**题目2：** `attachEvent`与`addEventListener`的区别？

1. **参数个数不相同**，这个最直观，addEventListener有三个参数，attachEvent只有两个，attachEvent添加的事件处理程序只能发生在冒泡阶段，addEventListener第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）
2. **第一个参数意义不同**，addEventListener第一个参数是事件类型（比如click，load），而attachEvent第一个参数指明的是事件处理函数名称（onclick，onload）
3. **事件处理程序的作用域不相同**，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window，所以刚才例子才会返回undefined，而不是元素id
4. **为一个事件添加多个事件处理程序时，执行顺序不同**，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器

**题目3：** 解释IE事件冒泡和DOM2事件传播机制？

事件冒泡：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的元素

事件捕获：不太具体的节点更早接收事件，而最具体的元素最后接收事件，和事件冒泡相反

IE只支持事件冒泡

DOM事件流：DOM2级事件规定事件流包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段

**题目4：**如何阻止事件冒泡？ 如何阻止默认事件？

使用preventDefault()来阻止默认事件

使用stopPropagation()来阻止时间进一步冒泡或捕获

**题目5：**有如下代码，要求当点击每一个元素`li`时控制台展示该元素的文本内容。不考虑兼容

```Html
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>前端6班</li>
</ul>
<script>
  var ct = document.querySelector(".ct");
  ct.addEventListener('click', function(event) {
    console.log(event.target.innerText);
  })
</script>

```

**题目6：** 补全代码，要求：

- 当点击按钮`开头添加时`在`<li>这里是</li>`元素前添加一个新元素，内容为用户输入的非空字符串；当点击`结尾添加`时在最后一个 li 元素后添加用户输入的非空字符串.
- 当点击每一个元素`li`时控制台展示该元素的文本内容。

```Html
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script type="text/javascript">
  var iptAddContent = document.querySelector('.ipt-add-content');
  var btnAddStart = document.querySelector('#btn-add-start');
  var btnAddEnd = document.querySelector('#btn-add-end');
  var ul = document.querySelector('.ct')
  btnAddStart.addEventListener('click', function() {
    if(iptAddContent.value) {
      var firstChild = document.querySelector('li:first-child');
      var parent = firstChild.parentNode;
      var li = document.createElement('li');
      var text = document.createTextNode(iptAddContent.value);
      li.appendChild(text);
      parent.insertBefore(li, firstChild);
    }
  })
  btnAddEnd.addEventListener('click', function() {
    if(iptAddContent.value) {
      var li = document.createElement('li');
      var text = document.createTextNode(iptAddContent.value);
      li.appendChild(text);
      ul.appendChild(li);
    }
  })
  ul.addEventListener('click', function(event) {
    console.log(event.target.innerText);
  })
</script>
```

**题目7：** 补全代码，要求：当鼠标放置在`li`元素上，会在`img-preview`里展示当前`li`元素的`data-img`对应的图片。

```javascript
<ul class="ct">
    <li data-img="1.png">鼠标放置查看图片1</li>
    <li data-img="2.png">鼠标放置查看图片2</li>
    <li data-img="3.png">鼠标放置查看图片3</li>
</ul>
<div class="img-preview"></div>
<script type="text/javascript">
  var ct = document.querySelector('.ct');
  var preview = document.querySelector('.img-preview')
  var img = document.createElement('img');
  preview.append(img);
  for (var i = 0; i < ct.children.length; i++) {
    let li = ct.children[i];
    console.log(li);
    li.addEventListener('mouseenter', function() {
      img.setAttribute('src', li.getAttribute('data-img'))
    })
  }
</script>
```

