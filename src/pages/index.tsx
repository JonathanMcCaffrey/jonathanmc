import { graphql } from 'gatsby';
import * as React from 'react';
import FrontPage from '../components/frontPage';
import BlogList from '../components/blogList';
import Layout from '../layouts';
import styles from '../styles/_global.module.scss';
import Menu from '../components/sidebar';
import Header from '../components/header';

interface PageProps {
  data: {
    imageTitle: any;
    content: any;
    images: any;
  };
  blog: any;
  location: any;
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
          <Menu selected='/' />
        </div>
        <div className={styles.content}>
          <FrontPage data={this.props.data} />
        </div>

        <div className={styles.spacer} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query Index {
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
