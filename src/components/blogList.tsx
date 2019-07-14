import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';

interface ComponentProps {
	data: any;
}

export default class BlogList extends React.Component<ComponentProps, {}> {
	renderBlogList = () => {
		var index = 0;
		return this.props.data.blog.edges.map((content: any) => {
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

	public render() {
		return <div> {this.renderBlogList()}</div>;
	}
}
