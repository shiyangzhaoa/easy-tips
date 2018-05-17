# 求数组中和为某值的所有成员集合,不能出现重复项

[1, 2, 3, 4, 5, 6] (实际情况乱序)中和为7的成员集合 => [[1, 2, 4], [1, 6]...]

> 说实话，求东西都是一个道理，递归，掌握了这些东西其实就很简单了

```js
const getSpecItem = (arr, num) => {
  const items = [];

  void function fn(_arr, x) {
    const sum = x.reduce((acc, next) => acc + next, 0);
    if (Array.isArray(_arr) && sum < num) {
      
      })
    } else {
      
    }
  }(arr, []);

  return items;
}

// 回去看
```