# 斐波那契数列

写一个函数，输入n，求斐波那契数列的第n项。

## 什么是斐波那契数列

  定义: f(n) = f(n-1) + f(n-2); f(0) = 0; f(1) = 1;

> 问题来源

问：有一个10级的阶梯，你一次只能跨1级或者2级，求你走到10级有多少种走法？暴力枚举，最多要走10步，循环遍历所有的可能行，加起来比较，等于10就让计数器加1，面试官听了想打人系列。

早先是在看动态规划的时候看到这个问题的，过程大概是这样的：

1. 假设你只差最后一步就走到10级，会是几种情况？只有两种，因为你只能走1级或者2级，那么最后一步必然也只可能是从第8级或者第9级走的。
2. 延伸出的问题：已知0到9有<code>x</code>种走法，0到8有<code>y</code>种，求0到10的走法。0到10最后一步只能是从8或9出发，而0到8和0到9的方法我们都知道了，那么很明显，0到10的所有走法应该就是<code>x + y</code>;就是最后一步走1的有<code>y</code>,最后一步走2的有<code>x</code>;函数表达就是<code>f(10) = f(9) + f(8)</code>,同理<code>f(8) = f(7) + f(6)</code>。

根据上面的可推导出:

```js
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n-1) + fibonacci(n-2);
}

// fibonacci(10);
// 55
```

乍看起来貌似没什么问题，仔细观察还是会发现问题的，打个比方，求f(10)，f(10) = f(9) + f (8), f(9) = f(8) + f(7);问题暴露出来了，我在求f(10)的时候球了一次f(8)，求f(9)的时候又求了一次f(8)，有图表示是这样的：
![图](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/fibonacci.jpg)
既然我在求f(9)的时候已经算了一遍f(8)的值，为何还要再在求f(10)的时候再算一遍f(8)，这一看就很不合理。

用哈希表来缓存，使用Map来存储，n为 key。

```js
function fibonacci(n) {
  const m = new Map();
  function fn(x) {
    if (x <= 0) return 0;
    if (x === 1) return 1;

    if (m.has(x)) {
      return m.get(x);
    }
    const v = fn(x-1) + fn(x-2);
    m.set(x, v);
    return v;
  }

  return fn(n);
}

// fibonacci(10);
// 55
```

> 比较一下时间

```js
console.time('map/slow');
fibonacci(20);
console.timeEnd('map/slow');
// 100的时候已经把我的浏览器卡死了
```

![差距](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/fib_map.jpg)

> 提问：能否继续优化了呢？

其实我们并不一定必须自顶向下做递归运算，我们可以尝试自下向上的方式，为什么呢？举个例子，f(3) = f (2) + f(1), f(4) = f(f3) + f(2), f(3)依赖f(1)和f(2)的值，f(4)依赖f(3)和f(2)的值，看的出来，到了了f(4)的时候，后面的运算都不需要用到f(1)了，自下而上以后我们每次运算只需要保留前面的两个值就好了，代码如下：

```js
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let t = 0;

  for (let i = 2; i <= n; i++) {
    t = a + b;
    a = b;
    b = t;
  }

  return t;
}
// fibonacci(10);
// 55
```

>比较一下性能

```js
console.time('a/b');
fibonacci(1000);
console.timeEnd('a/b');
// 性能都不错，用10000测试
```

![差距](https://github.com/shiyangzhaoa/easy-tips/blob/master/img/fib_best.jpg)

到此为止，性能基本上提高了非常多了