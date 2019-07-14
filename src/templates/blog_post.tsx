import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import styles from '../styles/_global.module.scss';
import Menu from '../components/sidebar';
import BlogList from '../components/blogList';
import Header from '../components/header';
import { renderBackgroundImage } from '../utils';

export default ({ data }: any) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<div className={styles.blogList}>
				<BlogList data={data} />
			</div>

			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.sidebar}>
				<Menu selected='/blog/' />
			</div>

			<div className={styles.content}>
				{renderBackgroundImage(post.frontmatter.cover, data, '')}

				<div className={styles.inner}>
					<p className={styles.blogInfo}>
						<b>Created on:</b> {post.frontmatter.created} <br />
						<b>Updated on:</b> {post.frontmatter.lastUpdated}
					</p>
					<h1 className={styles.blogTitle}>
						{post.frontmatter.title}
					</h1>

					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				excerpt
				created(formatString: "MMMM Do YYYY")
				lastUpdated(formatString: "MMMM Do YYYY")
				cover
				coverBlur
			}
		}

		site {
			siteMetadata {
				siteName
			}
		}

		blog: allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "/.*blog.*/" }
				frontmatter: { isDraft: { eq: false } }
			}
		) {
			edges {
				node {
					frontmatter {
						title
						created
						lastUpdated
						excerpt
					}
					fields {
						slug
					}
					html
				}
			}
		}

		images: allFile(
			filter: {
				extension: { regex: "/(jpg)|(jpeg)|(png)|(webp)/" }
				relativeDirectory: { regex: "/.*/" }
			}
		) {
			edges {
				node {
					id
					name
					relativePath

					childImageSharp {
						fluid {
							src
							aspectRatio
							srcSet
							sizes
						}
					}
				}
			}
		}
		content: allMarkdownRemark(
			sort: { fields: [fileAbsolutePath], order: ASC }
		) {
			edges {
				node {
					html
					rawMarkdownBody
					frontmatter {
						title
						cover
						coverBlur
					}
				}
			}
		}
	}
`;
