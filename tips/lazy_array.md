## 工业聚巨在群里发的一个问题

[原题](http://lisperator.net/blog/a-little-javascript-problem/)

我当时写了个渣版本

```js
// 处理 0
const isOver = t => t === 'over';

const range = (start, end) => () => start < end ? start++ : 'over';

const map = (f, cb) => {
  let i = f();
  return () => !isOver(i) ? cb(i, i = f()) : i;
}

const foreach = (f, cb) => {
  const i = f();
  if (!isOver(i)) {
    cb(i);
    foreach(f, cb);
  }
}

foreach(map(map(map(range(0, 10), i => i * 2), t => t + 1), y => y * 1.5), console.log)
// 1.5
// 4.5
// ...
```

reverse的实现当时也没有思路，写的代码也耍了一些小聪明，打算补补Haskell的知识，聚巨一直在群里安利，等我看完了再回来优化自己的代码吧🍉

聚巨 后来在群里发了他写的版本(要翻墙)
[聚](https://gist.github.com/Lucifier129/1172cbefce49205e0391be2c69aa5921)

这里防止有的人木有翻墙，我直接截图了
![laopo](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/lazy_array.jpg)

聚巨 写的
