module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        'throwIfNamespace': false, // defaults to true
        'runtime': 'automatic', // defaults to classic
        'importSource': '@lancercomet/vue2-jsx-runtime' // defaults to react
      }
    ]
  ]
}
