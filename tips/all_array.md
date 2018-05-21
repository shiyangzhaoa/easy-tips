# 用程序写排列组合

```js
const getAll = (arr) => {
  const tArr = [];

  void function fn(a, cur) {
    a.forEach((v, i) => {
      if (a.length > 1) {
        const _a = [].concat(a);
        _a.splice(i, 1)
        fn(_a, cur ? cur + '-' + v : v)
      } else {
        tArr.push(cur ? cur + '-' + v : v);
      }
    });
  }(arr, '');

  return tArr;
}

// getAll([1, 2, 3]);
```

![getAll](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/get_all.png)