import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';

export default class Footer extends React.Component<{}, {}> {
	public render() {
		return (
			<div className={styles.footer}>
				<div className={styles.footerText}>
					Like this website? Check it out on my{' '}
					<a
						href={
							'https://github.com/JonathanMcCaffrey/website-jonathanmc'
						}
					>
						github
					</a>
					.
				</div>
			</div>
		);
	}
}
