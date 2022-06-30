// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://thevaluecrew.com/wp-json/wp/v2/csr-charity`)
    const collection = actions.addCollection('Charity')

    for(const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title.rendered,
        slug: item.slug,
        content: item.content.rendered,
        logo: item.acf.logo,
        featured_media: item.featured_media,
        meta_head: item.yoast_head,
        category: ''
      })
    }
    
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allCharity {
        edges {
          node {
            content
            title
            id
            logo
            featured_media
            slug
            meta_head
          }
        }
      }
    }`)

    data.allCharity.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/CharityPageTemplate.vue',
        context: {
          id: node.id,
          title: node.title,
          logo: node.logo,
          content: node.content,
          featured_media: node.featured_media,
          meta_head: node.meta_head
        }
      })
    })
  })
}
