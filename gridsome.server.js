// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://thevaluecrew.com/wp-json/csr/v1/charities`)
    const collection = actions.addCollection('Charity')

    for(const item of data) {
      collection.addNode({
        id: item.id,
        name: item.name,
        slug: item.slug,
        content: item.content,
        featured_media_large: item.featured_image.large,
        featured_media_medium: item.featured_image.medium,
        featured_media_thumbnail: item.featured_image.thumbnail,
        category: '',
        logo: item.logo,
        canonical: item.metadata.canonical,
        og_locale: item.metadata.og_locale,
        og_type: item.metadata.og_type,
        og_title: item.metadata.og_title,
        og_description: item.metadata.og_description,
        og_url: item.metadata.og_url,
        og_site_name: item.metadata.og_site_name,
        article_publisher: item.metadata.article_publisher,
        article_modified_time: item.metadata.article_modified_time,
        author: item.metadata.author,
        twitter_card: item.metadata.twitter_card,
        reading_time: item.metadata.twitter_misc["Est. reading time"],
        robots: item.metadata.robots.index + ', ' 
                + item.metadata.robots.follow + ', ' 
                + item.metadata.robots['max-snippet'] + ', ' 
                + item.metadata.robots['max-image-preview'] + ', '
                + item.metadata.robots['max-video-preview']
      })
    }
    
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allCharity {
        edges {
          node {
            id
            name
            slug
            content
            featured_media_large
            featured_media_medium
            featured_media_thumbnail
            logo
            category
            canonical
            og_locale
            og_type
            og_title
            og_description
            og_url
            og_site_name
            article_publisher
            article_modified_time
            author
            twitter_card
            reading_time
            robots
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
          name: node.name,
          logo: node.logo,
          content: node.content,
          featured_media_medium: node.featured_media_medium,
          category: node.category,
          featured_media_medium: node.featured_media_medium,
          featured_media_large: node.featured_media_large,
          featured_media_thumbnail: node.featured_media_thumbnail,
          canonical: node.canonical,
          og_locale: node.og_locale,
          og_type: node.og_type,
          og_title: node.og_title,
          og_description: node.og_description,
          og_url: node.og_url,
          og_site_name: node.og_site_name,
          article_publisher: node.article_publisher,
          article_modified_time: node.article_modified_time,
          author: node.author,
          twitter_card: node.twitter_card,
          reading_time: node.reading_time,
          robots: node.robots
        }
      })
    })
  })
}
