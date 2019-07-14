import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';

interface ComponentProps {
	selected: string;
}

export default class Sidebar extends React.Component<ComponentProps, {}> {
	menu = (selected: string) => {
		return (
			<div className={styles.menu}>
				{this.menuItem('/', 'About', selected)}
				{this.menuItem('/blog/', 'Blog', selected)}
				{
					//this.menuItem('/projects/', 'Projects', selected)
				}
				{
					//this.menuItem('/contact/', 'Contact', selected)
				}
			</div>
		);
	};

	menuItem = (link: string, name: string, selected: any) => {
		return (
			<div>
				<Link to={link}>
					<div
						className={
							styles.item +
							' ' +
							styles.name +
							(link === selected ? ' ' + styles.selected : '')
						}
					>
						{name}
					</div>
				</Link>
			</div>
		);
	};

	public render() {
		return <div>{this.menu(this.props.selected)}</div>;
	}
}
