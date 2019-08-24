import React, { useContext, useState } from 'react';
import styles from '../styles/_global.module.scss';
import { faCoffee, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = (props: any) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div>
			{(() => {
				if (isOpen) {
					return (
						<div className={styles.banner}>
							<div className={styles.banner_text}>
								<a onClick={() => setIsOpen(false)}>
									<div className={styles.close}>
										<FontAwesomeIcon icon={faWindowClose} />
									</div>
								</a>

								<div className='banner-text'>
									<FontAwesomeIcon icon={faCoffee} /> I work
									on brainCloud, a BaaS for apps, games and
									things. Check it out{' '}
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
};

export default Banner;
