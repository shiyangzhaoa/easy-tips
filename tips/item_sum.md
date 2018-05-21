# 求数组中和为某值的所有成员集合,不能出现重复项

[1, 2, 3, 4, 5, 6] (实际情况乱序)中和为7的成员集合 => [[1, 2, 4], [1, 6]...]

> 这个，真不简单，来自老大的代码

```js
function getSpecItem(arr, target) {
  const stack = [];
  const result = [];
  arr.sort((a, b) => b - a);

  let index = 0, oldIndex;

  while (true) {
    const sum = stack.reduce((prev, cur) => prev + cur.value, 0);
    if (sum >= target) {
      if (sum === target) {
        result.push(stack.map(x => x.value));
      }
      do {
        index = stack.pop().index + 1;
      } while (index >= arr.length);

    }
    stack.push({ index, value: arr[index] });
    if (index >= arr.length) {
      index = stack[0].index;
      if (index === arr.length - 1) return result;
      stack.length = 0;
    }
    ++index;
  }
}

getSpecItem([1, 2, 3, 5, 7], 8);
```