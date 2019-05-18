module.exports = {
  siteMetadata : {
      title : `Romaric Fargetton`,
      description : 'A personal portfolio page',
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