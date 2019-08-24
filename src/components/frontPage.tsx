import * as React from 'react';
import docsHierarchy from '../data/page_order.yml';
import {
	renderImage,
	renderBackgroundImage,
	renderMarkdown,
	renderImageWithCustomType
} from '../utils';
import styles from '../styles/_global.module.scss';

const FrontPage = (props: any) => {
	const pageContent = () => {
		return (() => {
			const orderedPage: any = [];

			docsHierarchy.items.map((node: any) => {
				orderedPage.push(
					renderImage(
						node.coverBlur,
						props.data,
						'i1_' + orderedPage.length
					)
				);
				orderedPage.push(
					renderBackgroundImage(
						node.cover,
						props.data,
						'i2_' + orderedPage.length
					)
				);
				orderedPage.push(
					renderImage(
						node.coverBlur,
						props.data,
						'i3_' + orderedPage.length
					)
				);

				if (node.title === 'About') {
					orderedPage.push(
						renderImageWithCustomType(
							'face.jpg',
							props.data,
							'',
							styles.Jonathan
						)
					);
				}

				orderedPage.push(
					renderMarkdown(
						node.title,
						props.data,
						'i4_' + orderedPage.length
					)
				);
			});

			return orderedPage;
		})();
	};

	return <div>{pageContent()}</div>;
};

export default FrontPage;
