/**
 * 接口文档
 */
const { api, resp } = require('apite')

/**
 * @name 获取首页资源
 * @param {number} [pageSize=10] 页数
 */
api.post(
  '/getHomeResource',
  () => {
    return resp.mock({
      name: '@cname',
      id: '@id',
      'num|1-100000': 12,
    })
  },
  true,
)

// 获取列表数据
api.get('/list', (ctx) => {
  ctx.body = resp.mock({
    'list|10': [
      {
        id: '@id',
        name: '@cname',
      },
    ],
  })
})
