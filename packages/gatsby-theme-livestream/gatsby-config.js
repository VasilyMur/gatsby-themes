module.exports = {
  
    siteMetadata: {
    title: `Trendymoscow.com`,
    description: `Top 20 things to do and see in Moscow. Explore our Moscow attractions map and plan your visit to Russia. `,
    siteUrl: `https://www.trendymoscow.com/`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
              defaultLayouts: {
                default: require.resolve("./src/components/layout.js"),
              }
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
              path: `${__dirname}/src/pages`,
            },
          },
    ]
}