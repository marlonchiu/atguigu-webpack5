// loader本质上是一个函数
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const babel = require('@babel/core');
const util = require('util');

// 引入定义校验规则的文件
const schema = require('./babelSchema.json');

// babel.transform用来编译代码的方法
// 是一个普通异步方法
// util.promisify将普通异步方法转化成基于promise的异步方法
const transform = util.promisify(babel.transform);

module.exports = function (content, map, meta) {
  // 获取loader的 options
  const options = getOptions(this) || {};
  console.log(options);

  // 校验babel的options的配置
  validate(schema, options, {
    name: 'Babel Loader'
  })

  // 创建异步
  const callback = this.async();

  // 使用babel编译代码
  transform(content, options)
    .then(({ code, map }) => callback(null, code, map, meta))
    .catch((e) => callback(e))
}
