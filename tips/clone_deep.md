# 深克隆其实挺麻烦的，要分很多种情况，写了个简单的，好的办法还是借助第三方成熟的库(lodash)

```js
const cloneDeep = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  switch(Object.prototype.toString.call(obj)) {
    case '[object Array]':
      return Object.entries(obj).reduce(
        (acc, [key, value]) => Object.assign(acc, {[key]: cloneDeep(value)}),
        [],
      );
    case '[object RegExp]':
    case '[object Date]':
    case '[object Boolean]':
    case '[object String]':
    case '[object Number]':
      return new obj.constructor(obj)
    default:
      return Object.entries(obj).reduce(
        (acc, [key, value]) => Object.assign(acc, {[key]: cloneDeep(value)}),
        {},
      );
  }
}

// test:
const a = [{a: 3}, /ff/, new Date(), [], new Boolean(true)];
const b = cloneDeep(a);
console.log(b, a[0] === b[0], a[1] === b[1], a[2] === b[2], a[3] === b[3], a[4] === b[4]);
// [{…}, /ff/, Tue May 15 2018 14:57:47 GMT+0800 (CST), Array(0), Boolean] false false false false false
```