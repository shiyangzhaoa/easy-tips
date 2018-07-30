# 一些小的知识点吧

1. 判断中文和英文，早先的时候一个中文的字符串的长度为2，现在已经是算做1了

  ```js
  str.charCodeAt() > 255
  ```

2. 当函数参数涉及到 any rest parameters, any default parameters or any destructured parameters 的时候, 这个 arguments 就不在是一个 mapped arguments object

  ```js
  function sidEffecting(ary) {
    ary[0] = ary[2];
  }
  function bar(a,b,c=3) {
    c = 10
    sidEffecting(arguments);
    return a + b + c;
  }
  bar(1,1,1);

  // 12
  ```

3. 关于 reduce 的使用，<code>arr.reduce</code>当arr不确定是否为空数组时，一定给定初始值

  ```js
  [].reduce(() => {});
  ```

  ![pang](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/reduce_init.png)
  
4. 千分位
  ```js
  // 1
  str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // 2
  while (/(\d+)(\d{3})/.test(str.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  ```
