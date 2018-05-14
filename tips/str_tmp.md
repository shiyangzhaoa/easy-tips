# 写一个方法，实现ES6字符模版的功能<code/>format('hello ${name}', {name: 'word'}) => hello, world</code>

```js
function format(str, obj) {
  return str.replace(/\$\{([^{]+)\}/gm, (match, name) => name ? obj[name] : '');
}

// format('hello ${name}', {name: 'word'})
// 'hello, world'
```

> 补充

实现连字符转驼峰写法

```js
'aa-bb-99_tert biubiubiu'.replace(/[-_][^-_]/gm, match => match.charAt(1).toUpperCase());
// 'aaBb99Tert biubiubiu'
```

trim(绝对不是最优解)

```js
' fdsf '.replace(/^\s*/, '').replace(/\s*$/, '');
// 'fdsf'
```