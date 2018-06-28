const path = require('path')
const { getLoader, loaderNameMatches } = require('react-app-rewired')

function createRewireLess(lessLoaderOptions = {}) {
  return function(config, env) {
    const lessExtension = /\.less$/

    const fileLoader = getLoader(config.module.rules, rule => loaderNameMatches(rule, 'file-loader'))
    fileLoader.exclude.push(lessExtension)

    const cssRules = getLoader(config.module.rules, rule => String(rule.test) === String(/\.css$/))

    let lessRules
    if (env === 'production') {
      lessRules = {
        test: lessExtension,
        loader: [
          // TODO: originally this part is wrapper in extract-text-webpack-plugin
          //       which we cannot do, so some things like relative publicPath
          //       will not work.
          //       https://github.com/timarney/react-app-rewired/issues/33
          ...cssRules.loader,
          { loader: 'less-loader', options: { ...{ lessLoaderOptions }, javascriptEnabled: true } },
        ],
      }
    } else {
      lessRules = {
        test: lessExtension,
        use: [
          ...cssRules.use,
          { loader: 'less-loader', options: { ...{ lessLoaderOptions }, javascriptEnabled: true } },
        ],
      }
    }

    const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined)
    if (oneOfRule) {
      oneOfRule.oneOf.unshift(lessRules)
    } else {
      // Fallback to previous behaviour of adding to the end of the rules list.
      config.module.rules.push(lessRules)
    }

    return config
  }
}

module.exports = function override(config, env) {
  // const oneOf = config.module.rules.find(conf => {
  //   return conf.oneOf
  // }).oneOf
  // const tsLoader = oneOf.find(conf => {
  //   return conf.loader && conf.loader.includes('ts-loader');
  // })
  // tsLoader.loader = require.resolve('awesome-typescript-loader')
  // tsLoader.query = {
  //   useBabel: true,
  // }

  const oneOf = config.module.rules.find(conf => {
    return conf.oneOf
  }).oneOf
  const rule = oneOf.find(conf => {
    return (
      conf.use &&
      conf.use.find(use => {
        return use.loader && use.loader.includes('ts-loader')
      })
    )
  })
  const tsLoader = rule.use[0] // this doesn't feel right.
  tsLoader.loader = require.resolve('awesome-typescript-loader')
  tsLoader.options = {
    useBabel: true,
    useCache: true,
    errorsAsWarnings: env === 'development',
  }

  // const tsLintLoader = config.module.rules.find(conf => {
  //   return conf.loader && conf.loader.includes('tslint-loader');
  // })
  // tsLintLoader.options = tsLintLoader.options || {}
  // // FIXED Warning: The 'no-use-before-declare' rule requires type infomation.
  // tsLintLoader.options.typeCheck = true

  const rewireLess = createRewireLess()
  // const rewireLess = require('react-app-rewire-less')
  config = rewireLess(config, env)

  const path = require('path')
  // For import with absolute path
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules)

  // config = rewireIdx(config, env)

  return config
}
