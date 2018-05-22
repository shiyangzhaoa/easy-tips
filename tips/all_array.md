# [1, 2, 3] => ["1-2-3", "1-3-2", "2-1-3", "2-3-1", "3-1-2", "3-2-1"]

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

> 老大版本

```js
function* permutate(arr, length = arr.length) {
  if (!length) return yield arr;
  for (let i = 0; i < length; ++i) {
    yield* permutate([...arr.slice(0, i), ...arr.slice(i + 1), arr[i]], length - 1);
  }
}

console.log(...[...permutate([1,2,3])].map(x => x.join('-')));
```