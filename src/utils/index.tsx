import * as React from 'react';
import styles from '../styles/_global.module.scss';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import styled from 'styled-components';

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

export const renderImageWithCustomType = (
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
				<Inner key={'div_' + key}>
					<h1> {md.node.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: md.node.html }} />
				</Inner>
			);
		}
	});
};

const CoverImg = styled.div`
	@keyframes example2 {
		from {
			z-index: 4;
			opacity: 100;
		}
		to {
			opacity: 0;
		}
	}

	.coverImg {
		filter: brightness(60%);
		background-attachment: fixed;
		width: 100vw;
		margin-right: -100vw;
		margin-left: -20px;
	}

	@media only screen and (max-width: 920px) {
		.coverImg {
			margin-left: 0px;
			width: 200vw;
		}
	}

	.coverImg + .coverImg + .coverImg {
		filter: blur(50px);

		opacity: 0.02;
	}

	@media only screen and (min-width: 1024px) {
		.coverImg {
			height: 60vw;
		}

		.coverImg + .coverImg {
			margin-top: -60vw;
		}
	}

	@media only screen and (max-width: 1023px) {
		.coverImg {
			height: 800px;
		}

		.coverImg + .coverImg {
			margin-top: -800px;
		}
	}
`;

const Inner = styled.div`
	padding: 30px;
	margin: auto;
	background-color: #333;

	background-image: linear-gradient(
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#333,
		#3a3a3a
	);
`;
