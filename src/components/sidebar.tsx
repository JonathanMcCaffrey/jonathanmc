import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { Link } from 'gatsby';

const Sidebar = (props: any) => {
	const menu = (selected: string) => {
		return (
			<div className={styles.menu}>
				{menuItem('/', 'About', selected)}
				{menuItem('/blog/', 'Blog', selected)}
			</div>
		);
	};

	const menuItem = (link: string, name: string, selected: any) => {
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

	return <div>{menu(props.selected)}</div>;
};

export default Sidebar;
