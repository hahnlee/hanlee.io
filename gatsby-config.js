module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stacks',
        path: `${__dirname}/src/stacks/`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
  ],
}
