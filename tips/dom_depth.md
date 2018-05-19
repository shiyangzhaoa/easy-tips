# 求dom树的最大深度

> 上面我们已经遍历了所有情况，求最大深度就可以直接根据上面求的数组就可以得到，不过肯定不能这样求

![dang](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/dom_max_depth.png)

```js
const getDomDepth = (node) => {
  let max = -1;

  void function fn(d, m) {
    m++;
    Array.from(d.children).forEach(n => {
      if (n.children.length) {
        fn(n, m);
      } else {
        if (max < m) max = m;
      }
    })
  }(node, 1);

  return max;
}
```

![pang](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/get_dom_max_depth.png)