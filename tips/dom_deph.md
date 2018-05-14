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

  let i = 1;
  let arr = [];
  let t = 0;

  return (function fn(d) {
    return Array.from(d.children).reduce((acc, cur) => {
      if (cur.children.length) {
        i++;
        fn(cur);
      }
      if (i > t) {
        t = i;
      }
      i = 1;
      return t;
    })
  })(node)
}
// 晕晕晕，手头还没笔。回去写...怎么回溯，脑壳疼
```
