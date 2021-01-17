// loader本质上是一个函数

// 同步loader
// module.exports = function (content, map, meta) {
//   console.log(222);

//   return content;
// }

// 异步loader
module.exports = function (content, map, meta) {
  console.log(222);

  const callback = this.async();

  // 异步 loader1 过 1s后再输出
  setTimeout(() => {
    callback(null, content);
  }, 1000)
}

module.exports.pitch = function () {
  console.log('pitch 222');
}
