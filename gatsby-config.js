const siteMetaConfig = require('./gatsby-site-meta-config');

module.exports = {
  siteMetadata: siteMetaConfig,
  pathPrefix: "/babydragon", // TODO: 도메인 바꾸기 (Netlify)
  plugins: [
    /**
     * Create File nodes from files (for ''transformer' 
     * plugins to transform file nodes to specific data)
     */
    {
      /** Create "posts" directory for files in path "content" */
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    {
      /** Create "about" directory for file in path "about" */
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              destinationDir: "babydragon",
              ignoreFileExtensions: [],
            },
          },  
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetaConfig.title,
        short_name: siteMetaConfig.title,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  'gatsby-plugin-offline',
  ],
}
