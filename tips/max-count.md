# 某个 number 的数组，按某个特定数字的差值排序

```js
// 绝对不是最优解。。。优化的话可以手动排序处理
const maxCount = (arr, num) => arr
  .map((v, i) => ({
    i,
    c: Math.abs(v - num),
  }))
  .sort((a, b) => a.c - b.c).map(item => arr[item.i]);
```