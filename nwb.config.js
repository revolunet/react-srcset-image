module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSrcsetImage',
      externals: {
        react: 'React'
      }
    }
  }
}
