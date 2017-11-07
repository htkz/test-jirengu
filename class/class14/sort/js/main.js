var array = [1,3,2,5,3,2,2,3,1,3,21,31,3,12,];
//i = 2 j=0 toBeInseted=2
// [1,3,3,5,6]
// offset = true



// 冒泡排序
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

// 插入排序
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

// 快速排序
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



console.log(quickSort(array));
