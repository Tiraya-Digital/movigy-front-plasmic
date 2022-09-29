module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "s4YbRnYcJikwWD4N4V9Xwb",
        token: "0Q0jnuwFC9SyOjlwJRonrmdkGQNV1tlyPGWttLyn8epbn18Rb0MhmurERYd5lUZkgywscAdfHQKTmjS5iw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
