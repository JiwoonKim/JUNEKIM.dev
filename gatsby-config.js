const siteMetaConfig = require('./gatsby-site-meta-config');

module.exports = {
  siteMetadata: siteMetaConfig,
  pathPrefix: "/babydragon", // TODO: 도메인 바꾸기 (Netlify)
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
    /**
     * Transform markdown files into MarkdownRemark (using Remark)
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          /**
           * gatsby-remark-vscode로 대체하기
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
          */
         /*
         Copies local files linked to/from Markdown files to the public directory
          => maybe don't need...?
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
          */
        ],
      },
    },
    /** Transform image files into ImageSharp nodes (using Sharp)
     *  to provide fields for GraphQL to process images (ex. create responsive images) 
    */
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    /** Support server-rendering data by React Helmet
     *  to provide control to add title, meta attributes to your document head for SEO purposes.
     */
    `gatsby-plugin-react-helmet`,
    {
      /** PWA Configuration */
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
    /** Support offline and more resistant to bad network connections */
  'gatsby-plugin-offline',
  ],
}
