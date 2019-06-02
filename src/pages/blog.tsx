import { graphql } from 'gatsby';
import * as React from 'react';
import BlogSummary from '../components/blogSummary';
import BlogList from '../components/blogList';
import Layout from '../layouts';
import styles from '../styles/_global.module.scss';
import Menu from '../components/sidebar';
import Header from '../components/header';

interface PageProps {
  data: any;
  location: any;
  blog: any;
}

export default class IndexPage extends React.Component<PageProps, {}> {
  public render() {
    return (
      <Layout>
        <div className={styles.blogList}>
          <BlogList data={this.props.data} />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <Menu selected='/blog/' />
        </div>
        <div className={styles.content}>
          <BlogSummary data={this.props.data} />
        </div>
        <div className={styles.spacer} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query Blog {
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
            cover
            coverBlur
            created(formatString: "MMMM Do YYYY")
            lastUpdated(formatString: "MMMM Do YYYY")
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
