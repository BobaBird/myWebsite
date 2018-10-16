module.exports = {
  siteMetadata: {
    title: 'Leo-T',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Leo Torres',
        short_name: 'Leo-T',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/fav-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
