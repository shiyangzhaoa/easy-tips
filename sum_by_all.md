给定一个不重复数组`arr`, 求和为`sum`的所有排列组合

```js
const arr = [11, 2, 6, 5, 3, 2, 1, 14];
fn(arr, 3);
[1, 1, 1]
[1, 2]
[2, 1]
[3]
```

```js
const result = [];

const fn = (curArr, sum, cur = 0, nextArr = []) => {
  curArr.forEach(item => {
    if (item + cur > sum ) {}
    if (item + cur === sum) {
       result.push(nextArr.concat(item));
    }

    const realArr = curArr.slice(0, -1); 

    if (realArr.length === 1) return;

    fn(realArr, sum, item + cur, nextArr.concat(item))
  });

  return result;
};

fn(arr.sort(), 3)
```
