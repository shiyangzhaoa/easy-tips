# 遍历一颗dom树

```js
document......
// emmmmmm
document......
```

我不知道有没有相关api，手写吧

```js
const getDomStructure = (node) => {
  if (!node.children.length) {
    return 0;
  }

  const arr = [];

  void function fn(d, t) {
    Array.from(d.children).forEach(n => {
      if (n.children.length) {
        fn(n, t ? `${t}->${n.tagName}` : `${d.tagName}->${n.tagName}`);
      } else {
        arr.push(t ? `${t}->${n.tagName}` : `${d.tagName}->${n.tagName}`);
      }
    })
  }(node);

  return arr;
}
// 晕晕晕，手头还没笔。回去写...怎么回溯，脑壳疼,我真是SB！！！这个也想半天

// 试试掘金的网页, $0为<html>
// getDomStructure($0);
```

![dang](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/dom_structure.png)