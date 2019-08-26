import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';

const MainLayout = (props: any) => (
	<div>
		<Helmet>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<title>Jonathan McCaffrey</title>
			<link rel='canonical' href='https://jonathanmc.dev/' />
		</Helmet>

		{props.children}
	</div>
);

export default MainLayout;
