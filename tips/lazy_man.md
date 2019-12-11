# 实现一个lazyMan, 任务队列

```js
const aLazy = new LazyMan('王大锤');
aLazy.eat('苹果').eat('香蕉').sleep(5).eat('葡萄').eat('橘子').sleepFirst(2);

// 实现的流程是这样:
// 首先打印 'sleep 2s first!'
// -> 'my name is "王大锤"'
// -> '吃苹果' -> '吃香蕉'
// -> 'sleep 5s' 等待5秒钟
// -> '吃葡萄' -> 吃橘子
```

> 我早先在 [segmentfault](https://segmentfault.com/a/1190000010992917) 上分析过相关内容，这里不想多说，直接实现

```js
class LazyMan {
  constructor(name) {
    this.tasks = [];
    this.tasks.push(
      () => {
        console.log(`my name is ${name}`);
        this.next();
      }
    );
    setTimeout(() => this.next());

    return this;
  }

  eat(food) {
    this.tasks.push(
      () => {
        console.log(`吃${food}`);
        this.next();
      }
    );

    return this;
  }

  sleep(t) {
    this.tasks.push(
      () => {
        console.log(`sleep${t}s`);
        setTimeout(() => {
          this.next();
        }, t * 1000);
      }
    );

    return this;
  }

  sleepFirst(t) {
    this.tasks.unshift(
      () => {
        console.log(`sleep ${t}s first!`);
        setTimeout(() => {
          this.next();
        }, t * 1000);
      }
    );

    return this;
  }

  next() {
    const fn = this.tasks.shift();
    fn && fn();
  }
}

// test
const aLazy = new LazyMan('王大锤');
aLazy.eat('苹果').eat('香蕉').sleep(5).eat('葡萄').eat('橘子').sleepFirst(2);
```
