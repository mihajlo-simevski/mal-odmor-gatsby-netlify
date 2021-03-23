module.exports = {
  siteMetadata: {
    title: `Мал Одмор`,
     menuLinks: [
            {
               id:'home',
               name:'Почетна',
               link:'/'
            },
            {
               id: 'about-us',
               name:'За Нас',
               link:'/about-us'
            },
            {
              id: 'logo',
              name: 'logo',
              link: '/',
              imageUrl: './images/logoMalOdmor.png/'
            },
            {
              name:'Мени',
              link:'/menu'
           },
           {
            name:'Контакт',
            link:'/contact'
          }
          ],
        
    description: `Home is where the heart is`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
