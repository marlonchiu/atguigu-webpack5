// loader本质上是一个函数

// 同步loader
module.exports = function (content, map, meta) {
  console.log(222);

  return content;
}

module.exports.pitch = function () {
  console.log('pitch 222');
}
