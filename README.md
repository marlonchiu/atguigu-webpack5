# 尚 G 谷 Webpack5 高级进阶教程

创建时间：2021 年 1 月 17 日

## 前置环境参数

```bash
@vue/cli v4.5.7
create-react-app v3.4.1
webpack v5.1.3
nodejs v12.17.0
```

## react-cli 配置解析

```bash
# 暴露配置(不可逆)
yarn eject // or npm run eject
```

## vue-cli 配置解析

```bash
# 查看配置
vue inspect --mode=development > webpack.dev.js
vue inspect --mode=production > webpack.prod.js
```

## loader 处理

* webpack 默认编译入口 `src/index.js`
* loader读取校验配置

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "名称～"
    }
  },
  "additionalProperties": false
}

// additionalProperties 表示是否可以有其他属性
```

## plugins 配置

> [webpack](https://webpack.js.org/)
>
> [webpack 中文](https://webpack.docschina.org/)
>
> [webpack compiler-hooks](https://webpack.docschina.org/api/compiler-hooks/#hooks)
>
> [webpack/tapable](https://github.com/webpack/tapable#tapable)
