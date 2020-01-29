const siteMetaConfig = require('./gatsby-site-meta-config');

module.exports = {
  siteMetadata: siteMetaConfig,
  pathPrefix: "/babydragon", // TODO: 도메인 바꾸기
  plugins: [
    /**
     * Create File nodes from files (for 'transformer' 
     * plugins to transform file nodes to specific data)
     */
    {
      /** Create "posts" directory for files in path "content" */
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    {
      /** Create "about" directory for file in path "about" */
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/about`,
        name: `about`,
      },
    },
    /**
     * Transform markdown files into MarkdownRemark (using Remark)
     */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          /**
           * Syntax highlighting using VS Code's extensions and themes
           * rendered for code snippets in markdown files.
           */
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
          {
            /**
             * Processes images in markdown so they can be used in the production build.
             */
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590, // TODO: 블로그 콘텐츠의 가로길이만큼 설정
              wrapperStyle: {
                margin: 0,
              },
              linkImagesToOriginal: false,
            },
          },
          /** 
           * Creates copies of local files linked to/from markdown files
           * to the public folder (public/hash.../file). The generated HTML
           * page from the markdown file will be modified to point to it.
          */
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    /** 
     * Support server-rendering data by React Helmet to provide
     * control to add title, meta attributes to your document head
     * for SEO purposes.
     */
    'gatsby-plugin-react-helmet',
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
