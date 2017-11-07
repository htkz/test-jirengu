**题目1：** 轮播的实现原理是怎样的？如果让你来实现，你会抽象出哪些函数(or接口)供使用？（比如 play()）

1. 实现原理

   首先将图片排成一行，之后设置外层容器宽度与图片宽度相同，回头用js设置内层容器的宽度与图片数量多2的图片宽度相同，之后隐藏起来超出外层容器宽度的内容。

   之后在用户点击下一张/上一张时对绝对定位的内层容器进行移动，使相应图片显示在外层容器内。

   其中比较重要的一点就是，要将图片的第一张复制一份放在内层容器最后，将图片第一张复制一份放在内层容器最前面。

   ```
   $imgs.first().clone().appendTo($imgContainer);
   $imgs.last().clone().prependTo($imgContainer);
   ```

   这样做的目的是当用户从最后一张滑动到第一张时，使用css设置滑动位置复位的时候不会出现闪烁。

   ```
   $imgContainer.css('left', -imgCount * imgWidth);
   ```

   当然还有一个要注意的点就是，在动画开始之前关闭动画锁，在动画执行完成之后打开动画锁，以及在用户点击的时候判断动画锁的情况，以免出现用户多次点击导致多次偏移的情况发生。

2. 函数

   - addPlayLock
   - removePlayLock
   - isPlaying
   - updateBullet
   - playPrev
   - playNext
   - locatePic

**题目2：** 实现视频中的左右滚动无限循环轮播效果
**题目3：** 实现一个渐变轮播效果, [效果范例478](http://book.jirengu.com/jirengu-inc/js-works/carousel/carousel-fade-jquery.html#)

实验2、3就多了一行代码，我就直接放在这里了。

```
setInterval(playNext, 2000);
```

> 代码地址
>
> https://github.com/htkz/test-jirengu/tree/master/code/advance/task17
>
> 预览地址
>
> https://htkz.github.io/test-jirengu/code/advance/task17/index.html#

