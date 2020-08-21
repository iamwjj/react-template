module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      // 这里配置polyfill会污染全局作用域，直接挂载在全局对象上，修改类的原型。对一般的业务代码没啥影响。
      useBuiltIns: "usage", // 根据目标浏览器和代码中真正使用到的api来动态引入所需的polyfill
      corejs: 3,
    }],
    "@babel/preset-react"
  ],
  plugins: [
    // 从同一个文件中引入辅助函数，避免在每个js文件都定义一遍转译时需要的辅助函数，以此减小输出的代码体积。
    ["@babel/plugin-transform-runtime", {
      // 但如果是写第三方库，最好就是在这里配置polyfill。这样配置会打包全部polyfill，不会根据目标浏览器动态调整polyfill的内容
      // corejs: 3
    }]
  ]
}