/***
 * @file:
 * @author: wangxing
 * @Date: 2021-06-16 18:32:50
 */
// prod env config

const config = {
  inQiankun: !!window.__POWERED_BY_QIANKUN__,
  apiUrl: '/api',
  env: 'prod',
}

const env = {}

// dev env config
env.dev = {
  env: 'dev',
}

// test env config
env.test = {
  env: 'testing',
}

Object.assign(config, env[process.env.APP_ENV] || {})

export default config
