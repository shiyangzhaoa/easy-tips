# 求对象最大值的属性 {a: 1, b: 2, c: 3, d: 3} => 属性为c,值为3

## 记得是闪总的前端群有人问的（289471735），其实也挺简单的，普通的for...in基本上就能解决，但没什么亮点，自己就写了个链式的

```js
Object.entries({a: 1, b: 2, c: 3, d: 3}).reduce(
  ([accK, accV], [curK, curV]) => accV >= curV ? [accK, accV] : [curK, curV]
);

// ["c", 3]
```