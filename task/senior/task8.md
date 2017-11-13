**题目1：** 用媒体查询实现如下要求

```
1. 在页面宽度> 1200px 时页面背景为红色 
2. 在页面1200px>=宽度> 900px  时页面背景为绿色
3. 在页面900px>=宽度> 600px  时页面背景为黄色
4. 宽度<=600px 背景为灰色
```

```Css
html {
    background: grey;
}

@media (min-width: 600px) {
  html {
    background: yellow;
  }
}

@media (min-width: 900px) {
  html {
    background: green;
  }
}

@media (min-width: 1200px) {
  html {
    background: red;
  }
}
```

**题目2：** 实现一个简单的栅格系统(可选题目)

算起来sm、md、lg、xs要写48个属性，太麻烦了。

懒，不做了。