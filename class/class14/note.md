## 常见排序的javascript实现

#### 0.前言

大学上完，感觉学到的排序方法基本都还给老师了，今天正好复习一波。顺道写一篇博客简单记录一下，回头忘了也可以拿出来复习一下。

当然能够理解原理就可以了，没事去扣这种i+1还是j-1的细节就太无聊了。

#### 1.冒泡排序

##### 1.1原理

首先有一个数组[1,2,3,4,5,3,2,1]有n个元素,那么我们就从第一个元素开始，依次比较元素和它后一个元素的值，如果前面的大于后面的，那么就交换两个元素，这样一轮过后就把最大的元素冒泡了最后面，这样第一轮就执行了n-1个次，第二轮就只需要执行n-2次（因为最大的已经排到最后面了）。

##### 1.2复杂度

所以复杂度就是(n-1) + (n-2) + … + 1 = (n-1) * (n-2) / 2 = O(n^2)

##### 1.3代码实现

```javascript
bubbleSort = function(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}
```

#### 2.插入排序

##### 2.1原理

首先从数组的第二个元素开始，每次都将前面的元素视为已经排好序的队列，所以只需要和前面的元素一次比较找到自己的位置插入进去就可以了。

##### 2.2复杂度

因为每个元素都要查找他前面所有的元素（最坏情况）或者前面所有元素的一半（平均情况），所以复杂度也是(n-1) + (n-2) + … + 1 = (n-1) * (n-2) / 2 = O(n^2)。

##### 2.3代码实现

```javascript
insertionSort = function(array) {
    for (var i = 1; i <= array.length - 1; i++) {
        var toBeInseted = array[i];
        for (var j = i - 1; j >= 0 ; j--) {        
            if (toBeInseted < array[j]) {
                array[j + 1] = array[j];
            } else {
                array[j + 1] = toBeInseted;
                break;
            }
        }
    }
    return array;
}
```

#### 3.快速排序

##### 3.1原理

快速排序就是首先选取一个随机选取一个基准元素，然后遍历全体，将所有小于基准元素的放到基准元素左边，把所有大于基准元素的放在基准元素右边。之后在左右两个区间内再分别选取基准元素重复这个过程即可。

##### 3.2复杂度

快速排序的每一次划分把一个 问题分解成两个子问题，其中的关系可以表示为 T[n] = 2T[n/2] + O(n) 

其中O(n)为PARTITION()的时间复杂度，也就是（将所有小于基准元素的放到基准元素左边，把所有大于基准元素的放在基准元素右边）的时间。

根据数学定理（是哪个数学定理我忘了，回头看算法导论的时候再补充吧）可以得到快速排序的复杂度为 O(nlogn)。

##### 3.3代码实现

```javascript
quickSort = function(array) {
    swap = function(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    partition = function(array, left, right) {
        var storeIndex = left;
        var pivot = array[right];
        for (var i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, i, storeIndex);
                storeIndex += 1;
            }
        }
        swap(array, storeIndex, right)
        return storeIndex;
    }
    qsort = function(array, left, right) {
        if(left > right) {
            return;
        }
        var storeIndex = partition(array, left, right);
        qsort(array, left, storeIndex - 1);
        qsort(array, storeIndex + 1, right);
    }
    qsort(array, 0, array.length - 1);
    return array;
}
```