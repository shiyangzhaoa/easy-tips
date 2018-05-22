# 某个 number 的数组，按某个特定数字的差值排序

```js
// 这个刚开始有点蠢了，脑子没转过来
const sortByDiff = (arr, num) => arr.sort((a, b) => Math.abs(a - num) - Math.abs(b - num))
```