module.exports = {
  siteMetadata : {
      title : `Gatsby Wordpress`,
      description : 'A personal portfolio template for Gatsby and Wordpress.',
      author : 'Romaric Fargetton'

  },
  plugins : [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/src/`
        }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve : `gatsby-source-wordpress`,
      options : {
        baseUrl : `wp.romaricfargetton.com`,
        protocol : `https`,
        hostingWPCOM : false,
        useACF : true
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`
  ]
}
