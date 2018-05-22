# 找出数组中重复的数字

1. 哈希, typeof 用来区别数字和字符串

  ```js
  const arr = [1, 4, 5, 6, 2, 4, 5, 1, 7, 8, '19', 19, '19', 18, '18'];
  const obj = {};
  const repeat_arr = [];
  arr.forEach(v => {
    if (obj[v + typeof v]) {
      repeat_arr.push(v);
    } else {
      obj[v + typeof v] = 1;
    }
  });

  // console.log(repeat_arr);
  // [4, 5, 1, "19"]
  ```

> 使用Map

```js
const find_dup = arr => {
  const m = new Map();

  return arr.reduce((acc, cur) => m.has(cur) ? acc.concat(cur) : m.set(cur, 1) && acc, []);
}
```

  2. 补充，去重可以用set

  ```js
  [...new Set(arr)]
  ```
  
  3. 使用数组filter方法 结合2的去重
  
  ```js
  const find_dup = arr => [...new Set(arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i)))]
```
  
