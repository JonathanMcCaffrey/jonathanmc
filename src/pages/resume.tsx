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

export default class ResumePage extends React.Component<PageProps, {}> {
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
	query Resume {
		site {
			siteMetadata {
				siteName
			}
		}
	}
`;
