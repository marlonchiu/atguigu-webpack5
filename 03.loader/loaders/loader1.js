// loader本质上是一个函数

// 同步loader
// module.exports = function (content, map, meta) {
//   console.log(111);

//   return content;
// }

// 同步loader
module.exports = function (content, map, meta) {
  console.log(111);

  this.callback(null, content, map, meta);
}

// pitch 方法按照正序执行
module.exports.pitch = function () {
  console.log('pitch 111');
}
