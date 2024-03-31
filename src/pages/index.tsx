import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { to } from '../common';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Typed from 'typed.js';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { Analytics } from '@vercel/analytics/react';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	// const onGetYiYan = async () => {
	//   const options = {
	//     strings: ["不要把自己限制在某个范围，这世界的人已经很爱打分数了，为什么连你都要替自己打分数？"],
	//     typeSpeed: 50,
	//     cursorChar: '_'
	//   };
	//   var typed = new Typed('.hero__subtitle', options);
	// }
	// useEffect(() => {
	//   onGetYiYan()
	// }, [])

	return (
		<div className='container' style={{ padding: '50px' }}>
			<h1 className='hero__title'>{siteConfig.title}</h1>
			<p className='hero__subtitle'>{siteConfig.tagline}</p>
		</div>
	);
}

export default function Home(): JSX.Element {
	const [tagline, setTagLine] = useState('');
	const { siteConfig } = useDocusaurusContext();
	return (
		<div>
			<Analytics />
			<Layout
				title={`Hello from ${siteConfig.title}`}
				description="Kinda's Personal Website">
				<HomepageHeader />
			</Layout>
		</div>
	);
}
