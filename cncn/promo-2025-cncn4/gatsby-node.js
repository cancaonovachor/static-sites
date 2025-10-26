/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
let gatsbyNodeModules = require('fs').realpathSync('node_modules/gatsby')
gatsbyNodeModules = require('path').resolve(gatsbyNodeModules, '..')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [gatsbyNodeModules, 'node_modules'],
    },
  })
}
