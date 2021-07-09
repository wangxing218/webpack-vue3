module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@vue/babel-plugin-jsx',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
