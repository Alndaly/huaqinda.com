import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { Analytics } from '@vercel/analytics/react';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={styles.bg}>
			<div className={styles.text}>
				<h1>{siteConfig.title}</h1>
				<p>{siteConfig.tagline}</p>
			</div>
		</div>
	);
}

export default function Home(): JSX.Element {
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
