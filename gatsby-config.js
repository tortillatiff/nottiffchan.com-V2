module.exports = {
  siteMetadata: {
    siteUrl: "https://nottiffchan.com",
    title: "Tiffany Chan",
    description: 'Tiffany Chan is a Front-End Developer and UX/UI Designer and who loves building beautiful interfaces & experiences.',
    image: `/banner.png`,
    // keywords: 'Tiffany Chan, front-end developer, uiux designer, freelance, singapore'
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TiffanyChan',
        short_name: 'TiffanyChan',
        start_url: '/',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};