import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { to } from '../common'
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Typed from 'typed.js';
import Layout from '@theme/Layout';
import { Analytics } from '@vercel/analytics/react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.bg}>
        {/* <video autoPlay loop muted> */}
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VNu15Qqomt8?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&controls=0&modestbranding=1&iv_load_policy=1&start=5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <source src="https://vodpub6.v.news.cn/yhfb-original/20230427/126aae6e-2065-4b1a-bc26-8549dac382ff.mp4" type="video/mp4" /> */}
        {/* </video> */}
      </div>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <span className="hero__subtitle" /> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const [tagline, setTagLine] = useState('')
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Analytics />
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Kinda's Personal Website">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
