# 求一颗dom树的最大深度

```js
document......
// emmmmmm
document......
```

我不知道有没有相关api，手写吧

```js
const getDomDepth = (node) => {
  if (!node.children.length) {
    return 0;
  }

  let m = 1;

  return (function fn(d, i = 1) {
    return Array.from(d.children).reduce((acc, cur) => {
      if (cur.children.length) {
        i++;
        fn(cur, i);
      }

      if (m < i) {
        m = i;
      }

      return m;
    })
  })(node)
}
// 晕晕晕，手头还没笔。回去写...怎么回溯，脑壳疼
```
