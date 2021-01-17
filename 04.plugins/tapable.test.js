const { SyncHook, SyncBailHook, AsyncParallelHook, AsyncSeriesHook } = require('tapable');

class Lesson {
  constructor() {
    // 初始化hooks容器
    this.hooks = {
      // 同步hooks，任务回依次执行
      // go: new SyncHook(['address'])

      // SyncBailHook：一旦有返回值就会退出～
      go: new SyncBailHook(['address']),

      // 异步hooks
      // AsyncParallelHook：异步并行 (效果是 1s 到了输出 class0610,2s 到了 class0518 , 一共2秒)
      // leave: new AsyncParallelHook(['name', 'age']),
      // AsyncSeriesHook: 异步串行(同步执行 效果是先 2s class0518 ,再等1s 输出 class0610, 一共3秒)
      leave: new AsyncSeriesHook(['name', 'age'])
    }
  }

  tap () {
    // 往hooks容器中注册事件/添加回调函数
    this.hooks.go.tap('class0318', (address) => {
      console.log('class0318', address);
      return 111;
    })
    this.hooks.go.tap('class0410', (address) => {
      console.log('class0410', address);
    })

    // 异步写法一 tapAsync 需要callback
    this.hooks.leave.tapAsync('class0518', (name, age, cb) => {
      setTimeout(() => {
        console.log('class0518', name, age);
        cb()
      }, 2000);
    })
    // 异步写法二 tapPromise
    this.hooks.leave.tapPromise('class0610', (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('class0610', name, age);
          resolve();
        }, 1000);
      })
    })
  }

  start () {
    // 触发hooks
    this.hooks.go.call('c318');
    this.hooks.leave.callAsync('jack', 23, function () {
      // 代表所有leave容器中的函数触发完了，才触发
      console.log('end~~~');
    });
  }
}

const l = new Lesson();
l.tap();
l.start();
