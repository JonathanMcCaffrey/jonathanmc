import * as React from 'react';
import styles from '../styles/_global.module.scss';
import { faCoffee, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BannerState {
	isOpen: boolean;
}

export default class Banner extends React.Component<{}, BannerState> {
	constructor(props: any) {
		super(props);

		this.state = {
			isOpen: true
		};
	}

	closed = () => {
		this.setState({ isOpen: false });
	};

	public render() {
		return (
			<div>
				{(() => {
					if (this.state.isOpen) {
						return (
							<div className={styles.banner}>
								<div className={styles.banner_text}>
									<a onClick={this.closed}>
										<div className={styles.close}>
											<FontAwesomeIcon
												icon={faWindowClose}
											/>
										</div>
									</a>

									<div className='banner-text'>
										<FontAwesomeIcon icon={faCoffee} /> I
										work on brainCloud, a BaaS for apps,
										games and things. Check it out{' '}
										<a href='https://getbraincloud.com/'>
											here
										</a>
										.
									</div>
								</div>
							</div>
						);
					}
				})()}
			</div>
		);
	}
}
