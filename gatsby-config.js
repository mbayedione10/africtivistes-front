// require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Africtivistes`,
    description: `Ligue Africaine des Blogueurs et Web activistes pour la Démocratie`,
    author: `@africtivistes`,
    email: [`info@africtivistes.org`],
    tels: ['(+221) 33 837 51 24'],
    adresse: 'BP 19968 Dakar , Cite Sofraco , VDN 3 prolongee',
    siteUrl: `https://www.africtivistes.org/`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `artists/` ,
    //     context: true,
    //     tags: true,
    //     maxResults: 50
    //   }
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://update.africtivistes.org/graphql`,
        presets: [
          {
            presetName: `DEVELOP`,
            useIf: () => process.env.NODE_ENV === `development`,
            options: {
              develop: {
                nodeUpdateInterval: 60000, // Update nodes every 60 seconds 
                hardCacheMediaFiles: true,
                hardCacheData: false,
              },
              type: {
                MediaItem: {
                  localFile: {
                    requestConcurrency: 10, // Amount of images to download concurrently. Try lowering this if wordpress server crashes on import.
                  },
                },
              },
            },
          },
          {
            presetName: `PRODUCTION`,
            useIf: () => process.env.NODE_ENV === `production`,
            options: {
              production: {
                hardCacheMediaFiles: true,
                allow404Images: true,
                allow401Images: true,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/asset/images`,
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
        icon: `src/asset/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
           trackingId: 'UA-228721643-1', // G-TTYKL1PX7V leave empty if you want to disable the tracker
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`fr`, `en`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: ["/js/"],
      },
    },
    `gatsby-plugin-netlify`
  ],
}
