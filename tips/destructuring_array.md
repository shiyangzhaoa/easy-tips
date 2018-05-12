# destructuringArray([1, [2, 3], 4], '[a, [b], c]') => {a: 1, b: 2, c: 3}

## 貌似在思否还是掘金上面看到的，别人分享的面试题

首先就是把 '[a, [b ], c]' 转换成由key组成的数组 ['a', ['b'], 'c'] 的形式

剩下的就还是老一套，递归

```js
const destructuringArray = function(arr, keyStr) {
  const keyArr = JSON.parse(keyStr.replace(/(\w+)/g, '"$1"'));
  return (function resolveKey(keyA, valueA) {
    return keyA.reduce((accObj, curObj, i) => {
      if (Array.isArray(curObj)) {
        return {...accObj, ...resolveKey(curObj, valueA[i])};
      } else {
        accObj[curObj] = valueA[i];
        return accObj;
      }
    }, {})
  })(keyArr, arr);
};
destructuringArray([1,[2,4],3], '[a,[b],c]');

// {a: 1, b: 2, c: 3}
```