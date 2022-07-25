import React, { useEffect, useState } from 'react';

export default function Nav() {
	const [navHeight, setNavHeight] = useState(20);
	useEffect(() => {
		const bodyContainer = document.querySelector('.flex-body');

		window.addEventListener('scroll', (event) => {
			let scroll = event.currentTarget.scrollY;

			console.log(scroll);
			if (scroll >= 0 && scroll <= 100) {
				setNavHeight(100 - scroll);
			}
		});
	}, []);

	return (
		<nav>
			<div
				style={{
					height: `${navHeight}%`,
					minHeight: '11vh',
				}}
				className='nav__content container'>
				<div className='nav__image'>
					<img src='/images/fruit-collection.png' />
				</div>
			</div>
		</nav>
	);
}
