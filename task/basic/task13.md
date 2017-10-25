# Task 13



##### 1.说一说你平时写代码遵守的编码规范

没有必要把自己的坏习惯再列一遍了，跟着http://codeguide.bootcss.com/正规规范慢慢改吧。

##### 2.垂直居中有几种实现方式，给出代码范例

1. 容器高度无所谓，由内容撑开，只需要设置上下padding一致，即可实现居中

   ```html
   <div class="ct">
       <p>这里是饥人谷</p>
       <p>这里是饥人谷</p>
     </div>
   ```

   ```css
   .ct{
     padding: 40px 0;
     text-align: center;
     background: #eee;
   }
   ```

2. 绝对定位

   通过绝对定位之后进行偏移，首先是left: 50%和top: 50%将元素左上角居中到父元素中心，然后通过transform: translate(-50%, -50%),再向左和上偏移自身高度／宽度的一半来达到中心居中的目的。

   ```html
   <div class="dialog">
       <div class="header">我是标题</div>
       <div class="content">我是内容</div>
     </div>
   ```

   ```css
   html,body {
     height: 100%;
   }


   .dialog {
     position: absolute;
     left: 50%;
     top: 50%;
     // margin-left: -200px;
     // margin-top: -150px;
     transform: translate(-50%, -50%)
     
     width: 400px;
     height: 300px;
     box-shadow: 0px 0px 3px #000;
   }

   .dialog .header{
     padding: 10px;
     background: #000;
     color: #fff;
   }
   .dialog .content{
     padding: 10px;
   }
   ```

3. vertical-align实现

   在元素前面添加一个高度为父元素100%的空元素，来使用vertical-align进行居中。

   ```html
   <div class="box">
       <img src="http://cdn.jirengu.com/public/logo-tiny.png" alt="">
     </div>
   ```

   ```css
   .box{
     width: 300px;
     height: 200px;
     border: 1px solid ;
     text-align: center;
   }

   .box:before{
     content: '';
     display: inline-block;
     height: 100%;
     vertical-align: middle;
   }
   .box img{
     vertical-align: middle;
     background: blue;
   }
   ```

4. table-cell实现

   通过将父元素设置display: table-cell和vertical-align: middle以及text-align: center来对元素居中。原理就是将子元素的展现方式变为table-cell，这样就可以应用vertical-align和text-align.

   ```html
   <div class="box">
       <img src="http://cdn.jirengu.com/public/logo-tiny.png" alt="">
     </div>
   ```

   ```css
   .box{
     width: 300px;
     height: 200px;
     border: 1px solid ;
     display: table-cell;
     vertical-align: middle;
     text-align: center;
   }
   ```

   代码

   http://js.jirengu.com/disab/1/edit?html,css,output

   ​