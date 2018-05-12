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

  2. 补充，去重可以用set

  ```js
  [...new Set(arr)]
  ```