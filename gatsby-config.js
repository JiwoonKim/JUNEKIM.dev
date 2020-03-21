const siteMetaConfig = require('./gatsby-site-meta-config');

module.exports = {
  siteMetadata: siteMetaConfig,
  plugins: [
    /**
     * Create File nodes from files (for 'transformer' 
     * plugins to transform file nodes to specific data)
     */
    {
      /** Create "posts" directory for files in path "content" */
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `pages`,
      },
    },
    /**
     * Transform markdown files into MarkdownRemark (using Remark)
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          /**
           * Syntax highlighting using VS Code's extensions and themes
           * rendered for code snippets in markdown files.
           */
          /*
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Andromeda',
              extensions: [
                {
                  identifier: 'EliverLara.andromeda',
                  version: '1.6.0',
                }
              ],
            },
          },
          */
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
          /** 
           * Creates copies of local files linked to/from markdown files
           * to the public folder (public/{hash #}/file). The generated HTML
           * page from the markdown file will be modified to point to it.
          */
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
              ignoreFileExtensions: [],
            },
          },  
        ],
      },
    },
    /** 
     * Transform image files into ImageSharp nodes (using Sharp)
     * to provide fields for GraphQL to process images.
     * (ex. create responsive images) 
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /** 
     * Support server-rendering data by React Helmet to provide
     * control to add title, meta attributes to your document head
     * for SEO purposes.
     */
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-catch-links',
    /** 
     * PWA Configuration 
     */
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
