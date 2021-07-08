/***
 * @file:
 * @author: wangxing
 * @Date: 2021-07-07 20:36:04
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env'
      // {
      //   useBuiltIns: "usage",
      //   corejs: 3
      // }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@vue/babel-plugin-jsx',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
}