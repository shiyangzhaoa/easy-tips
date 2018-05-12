# 不许用for + push...

> 误区

```js
new Array(100).map((v, i) => i);
// [empty × 100]
// 跳过undefined
```

> 正确的姿势

```js
Array.from({length: 100}, (v, i) => i);

new Array(100).fill(undefined).map((v, i) => i);

new Array.apply(null, {length}).map((v, i) => i);

[...new Array(100)].map((v, i) => i);

(function fill(i, arr) {
  return i > 99 ? arr : fill(i + 1, arr.concat(i));
})(0, []);

// 骚操作版本，来自知乎大佬
(function (excited) {
   return function (f) {
      return f(f);
   }(function (f) {
      return excited(function (x) { return (f(f))(x); });
   });
})(function (excited) {
   return function(i) {
       return (i < 0) ? [] : excited(i - 1).concat(i);
   }
})(99);
```