import { graphql } from 'gatsby';
import * as React from 'react';
import Page from '../components/frontPage';
import BlogList from '../components/blogList';
import Layout from '../layouts';
import styles from '../styles/_global.module.scss';
import Menu from '../components/sidebar';
import Header from '../components/header';

export default (props: any) => (
  <Layout>
    <div className={styles.blogList}>
      <BlogList data={props.data} />
    </div>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.sidebar}>
      <Menu selected='/about/' />
    </div>
    <div className={styles.content}>
      <Page data={props.data} />
    </div>
    <div className={styles.spacer} />
  </Layout>
);

export const pageQuery = graphql`
  query Error {
    site {
      siteMetadata {
        siteName
      }
    }

    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*blog.*/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
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
