## lodash get

```js
const get = (target, path, hold) => {
  if (typeof path !== 'string' && !Array.isArray(path)) {
    return target;
  }

  let result;
  const keys = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');
  
  try {
    result =  keys.reduce((acc, cur) => acc[cur], target);
    if (result === undefined && hold !== undefined) result = hold;
  } catch {
    result = hold;
  }
  
  return result;
};
```
      
