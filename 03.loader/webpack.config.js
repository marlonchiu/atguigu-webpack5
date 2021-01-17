const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: path.resolve(__dirname, 'loaders', 'loader1')
        // 配置了 resolveLoader
        // loader: 'loader1'
        use: [
          'loader1',
          'loader2',
          'loader3'
        ]
      }
    ]
  },
  // 配置loader解析规则
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
}
