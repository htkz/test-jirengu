**题目1：** dom对象的`innerText`和`innerHTML`有什么区别？

innerText对应的是文本节点，innerHTML对应的就直接是相应的html语句。也就是说，你向innerText里面的插入的任何文字都会被解析为普通文字展示，而你向innerHTML里面插入的任何内容都会被当做html语句解析运行。

**题目2：** `elem.children`和`elem.childNodes`的区别？

children是子元素列表（HTMLCollection）

childNodes是子元素列表（NodeList）

例如

```html
<div id="element">
	<a>123</a>
	<a>456</a>
</div>
var e = document.getElementById('element')
e.children 为 (2) [a, a]
e.childNodes 为 (5) [text, a, text, a, text]
```

**题目3：**查询元素有几种常见的方法？ES5的元素选择方法是什么?

- getElementById() 根据id查找，找不到返回null
- getElementsByClassName()根据类名查找，返回类数组对象，参数可以是多个空格分隔的class名字，返回同时具有这些节点的元素。
- getElementsByTagName()根据标签查找，返回值是一个HTMLCollection对象，搜索结果是一个动态集合，任何元素的变化都会实时反映在返回的集合中
- getElementsByName()根据name属性查找，返回一个NodeList格式的对象，不会实时反映元素的变化。

ES5

- querySelector()返回匹配指定的CSS选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null。无法选中CSS伪元素。
- querySelectorAll()返回匹配指定的CSS选择器的所有节点，返回的是NodeList类型的对象。NodeList对象不是动态集合，所以元素节点的变化无法实时反映在返回结果中。参数可以是逗号分隔的多个CSS选择器，返回所有匹配其中一个选择器的元素。

**题目4：**如何创建一个元素？如何给元素设置属性？如何删除属性

创建元素

- createElement方法用来生成HTML元素节点。

- createTextNode方法用来生成文本节点，参数为所要生成的文本节点的内容。

- createDocumentFragment方法生成一个DocumentFragment对象。

  DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。

设置属性

- setAttribute()方法用于设置元素属性

删除元素

- removeAttribute()用于删除元素属性

**题目5：**如何给页面元素添加子元素？如何删除页面元素下的子元素?

添加子元素

- appendChild在元素末尾添加元素
- insertBefore在某个元素之前插入元素

删除子元素

- 删除元素使用removeChild()方法即可

**题目6：** `element.classList`有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?

```javascript
有add\remove\toggle\contains等方法
添加一个class
nodeBox.classList.add('active')   //新增 class
删除一个class
nodeBox.classList.remove('active')  //删除 class
判断包含某个class
node.classList.contains('active')   // 判断是否拥有 class
```

**题目7：** 如何选中如下代码所有的`li`元素？ 如何选中`btn`元素？

```
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
```

```javascript
var listItems = document.querySelectorAll(".mod-tabs li");
var btn = document.querySelector(".btn")
```

