import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';
import { renderBackgroundImage } from '../utils';

interface ComponentProps {
  data: any;
}

export default class BlogSummary extends React.Component<ComponentProps, {}> {
  renderBlogList = () => {
    var index = 0;
    return this.props.data.blog.edges.map((content: any) => {
      index++;
      return (
        <div key={index}>
          {renderBackgroundImage(
            content.node.frontmatter.cover,
            this.props.data,
            'i' + index
          )}
          <div className={styles.inner}>
            <p className={styles.blogInfo}>
              <b>Created on:</b> {content.node.frontmatter.created} <br />
              <b>Updated on:</b> {content.node.frontmatter.lastUpdated}
            </p>
            <Link to={content.node.fields.slug}>
              <h1 className={styles.blogTitle}>
                {content.node.frontmatter.title}
              </h1>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: content.node.html }} />
          </div>
        </div>
      );
    });
  };

  public render() {
    return <div> {this.renderBlogList()}</div>;
  }
}
