# 数组的扁平化

1. 二维数组

  ```js
  const arr = [[1, 2], 3];
  [].concat.apply([], arr);
  // [1, 2, 3]

  // Es6 版本...
  [].concat(...arr);
  ```

  2. 多维数组

  ```js
  const arr = [[1, 2], 3, [4, 3, [8, 9, [10, [11, [12, [13, [14, [15, [16, [17, [18]]]]]]]]]]]];
  const flatten = (arr) => arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
  const new_arr = flatten(arr);
  // console.log(new_arr);
  // [1, 2, 3, 4, 3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  ```

  > 改进，添加扁平化深度控制，默认为1，参考MDN Flatten 参数

  ```js
  const flatten = (arr, depth = 1)  => arr.reduce((a, b) => {
    let i = 1;
    if (Array.isArray(b) && i < depth) {
      i++;
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
  // flatten([1, [2, 3, [4, 5], 6], 7])
  // [1, 2, 3, [4, 5], 6, 7]
  // flatten([1, [2, 3, [4, 5], 6], 7], 5)
  // [1, 2, 3, 4, 5, 6, 7]


  // 你也可以这样（逃
  Array.prototype.flatten = function(depth = 1) {
    return this.reduce((a, b) => {
      let i = 1;
      if (Array.isArray(b) && i < depth) {
        i++;
        return a.concat(flatten(b));
      }
      return a.concat(b);
    }, []);
  }

  // [1, [2, 3, [4]], 5].flatten();
  // [1, 2, 3, [4], 5]
  ```

> 或者这样(老大版本)

```js
function flatten(arr) {
  return Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
}
```