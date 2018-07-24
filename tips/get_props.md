## 避免使用a.b && a.b.c && a.b.c.d

在实际项目中，后端返回的数据经常是多层嵌套:

  ```js
  // 例如
  const data = {
    a: {
      b: {
        c: [1, 2, 3]
      }
    }
  }
  ```

我们要渲染 a.b.c，但恐怖的是a可能为null，如果直接取data.a.b.c的话会直接报错,所以有时候我们可能为这么写:

  ```js
  if (data.a && data.a.b && data.a.b.c) {
    // ...
  }
  ```
  
如果嵌套更深，那必然是相当麻烦的，我们可以在项目的Helpers里面定义一个函数

  ```js
  const getProp = (obj, ...props) => {
    try {
      return props.reduce((acc, cur) => acc[cur], obj);
    } catch (err) {
      return undefined;
    }
  }

  // 使用
  getProp(data, 'a', 'b', 'c')
  // test
  getProp({ a: null }, 'a', 'b', 'c')
  // undefined
  ```
