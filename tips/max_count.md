# 某个 number 的数组，按某个特定数字的差值排序

```js
// 绝对不是最优解。。。优化的话可以手动排序处理，这个有点蠢了
const maxCount = (arr, num) => arr.sort((a, b) => Math.abs(a - num) - Math.abs(b-num))
```