# 深克隆其实挺麻烦的，要分很多种情况，写了个简单的，好的办法还是借助第三方成熟的库

```js
const cloneDeep = (obj) => {
  if (typeof obj !== 'object') {
    return obj;
  }

  switch(Object.prototype.toString.call(obj)) {
    case '[object Array]':
      return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = cloneDeep(value);
        return acc;
      }, []);
    case '[object RegExp]':
      return new RegExp(obj);
    case '[object Date]':
      return new Date(obj);
    default:
      return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = cloneDeep(value);
        return acc;
      }, {});
  }
}

// test:
const a = [{a: 3}, /ff/, new Date(), []];
const b = cloneDeep(a);
console.log(a[0] === b[0], a[1] === b[1], a[2] === b[2], a[3] === b[3]);
// false false false false
```