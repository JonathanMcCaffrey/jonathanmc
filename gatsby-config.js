module.exports = {
	pathPrefix: '/website-jonathanmc',
	siteMetadata: {
		siteName: `jonathanmc`
	},
	plugins: [
		`gatsby-transformer-sharp`, 
		`gatsby-plugin-sharp`,
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
				omitGoogleFont: true
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
				name: 'images'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content/`
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jonathan McCaffrey`,
				short_name: `jonathanmc`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
				include_favicon: true
			}
		},
	
		`gatsby-plugin-sass`,
		`gatsby-plugin-less`,
		`gatsby-plugin-postcss`,
		'gatsby-plugin-css-customs',
		{
			resolve: `gatsby-remark-images`,
			options: {
				// It's important to specify the maxWidth (in pixels) of
				// the content container as this plugin uses this as the
				// base for generating different widths of each image.
				maxWidth: 590,
				withWebp: true,
				wrapperStyle: fluidResult =>
					`flex:${_.round(fluidResult.aspectRatio, 2)};`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-autolink-headers',
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							showLineNumbers: true
						}
					},

					'gatsby-remark-copy-linked-files'
				]
			}
		}
	]
};
