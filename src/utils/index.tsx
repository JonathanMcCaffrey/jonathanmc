import * as React from 'react';
import styles from '../styles/_global.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

export const renderBackgroundImage = (
	image: string,
	data: any,
	key: string
) => {
	return data.images.edges.map((img: any) => {
		if (img.node.relativePath === image) {
			return (
				<BackgroundImage
					key={'bi_' + key}
					Tag='section'
					fluid={img.node.childImageSharp.fluid}
					className={styles.coverImg}
				/>
			);
		}
	});
};

export const renderImage = (image: string, data: any, key: string) => {
	return data.images.edges.map((img: any) => {
		if (img.node.relativePath === image) {
			return (
				<Img
					key={'i_' + key}
					Tag='section'
					fluid={img.node.childImageSharp.fluid}
					className={styles.coverImg}
				/>
			);
		}
	});
};

export const renderImageWithCustomStype = (
	image: string,
	data: any,
	key: string,
	customStype: any
) => {
	return data.images.edges.map((img: any) => {
		if (img.node.relativePath === image) {
			return (
				<Img
					key={'i_' + key}
					Tag='section'
					fluid={img.node.childImageSharp.fluid}
					className={customStype}
				/>
			);
		}
	});
};

export const renderMarkdown = (markdown: string, data: any, key: string) => {
	return data.content.edges.map((md: any) => {
		if (md.node.frontmatter.title === markdown) {
			return (
				<div className={styles.inner} key={'div_' + key}>
					<h1> {md.node.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: md.node.html }} />
				</div>
			);
		}
	});
};
