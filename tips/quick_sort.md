# 快速排序

## 基本原理

1. 基本就是找一个基准值，一般取第一个，然后分别从第一个递增和最后一个递减，i ,j

2. 找到arr[i]大于基准值，arr[j]小于基准值

3. 调换ij，swap(arr, i, j)

4. 循环，小于i的下表的值都小于基准值，大于i的值都大于基准值

5. 递归调用

## 不同版本的实现

> 通用

```js
function compare(a, b){
  return a-b;
}
function swap(arr, s, e){
  var tmp = arr[s];
  arr[s] = arr[e];
  arr[e] = tmp;
}
```

1. N.Lomuto 版本

  ```js
  function partition_lomuto(arr, start, end){
    var pivot = arr[end];
    var s = start;
    for(var g = start; g < end; g++){
      if(compare(arr[g], pivot) < 0){
        if(s != g){
          swap(arr, s, g);
        }
        s ++;
      }
    }
    if(s == end){
      return s-1;
    }else{
      swap(arr, s, end);
      return s;
    }
  }

  function qsort_lomuto(arr, start, end){
    if(start >= end){
      return;
    }
    var p = partition_lomuto(arr, start, end);
    qsort_lomuto(arr, start, p);
    qsort_lomuto(arr, p+1, end);
  }
  ```

2. Hoare 版本

  ```js
  function partition_hoare(arr, start, end){
    var pivot = arr[start];
    var s = start;
    var e = end;
    while(1){
      while(compare(arr[s], pivot) < 0){
        s ++;
      }
      while(compare(arr[e], pivot) > 0){
        e --;
      }
      if(s == e){
        return s;
      }else if(s > e){
        return s-1;
      }
      swap(arr, s, e);
      s++;
      e--;
    }
  }

  function qsort_hoare(arr, start, end){
    if(start >= end){
      return;
    }
    var p = partition_hoare(arr, start, end);
    qsort_hoare(arr, start, p);
    qsort_hoare(arr, p+1, end);
  }
  ```

3. Winter.FP

  ```js
  var y = g =>
    (f=>f(f))(
        self =>
            g( (...args)=>self(self).apply(this,args) ) 
    )

  var qSort = y(qSort =>
      (array, compare) =>
          array.length <= 1 ?
              array :
              qSort(array.slice(1).filter(e => compare(e, array[0]) > 0), compare)
                  .concat([array[0]])
                  .concat(qSort(array.slice(1).filter(e => compare(e, array[0]) <= 0),compare)))
  ```