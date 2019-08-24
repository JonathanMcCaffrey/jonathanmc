import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';

const BlogList = (props: any) => {
	const renderBlogList = () => {
		var index = 0;
		return props.data.blog.edges.map((content: any) => {
			index++;
			return (
				<div className={styles.inner} key={index}>
					<Link to={content.node.fields.slug}>
						<h1>{content.node.frontmatter.title}</h1>
					</Link>
					<p>{content.node.frontmatter.excerpt} </p>
				</div>
			);
		});
	};

	return <div> {renderBlogList()}</div>;
};

export default BlogList;
