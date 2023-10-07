import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string;
  path: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '微校WeSmile小程序',
    path: 'https://docs.zuowu.cc',
    description: (
      <>
        <div>
          高校学生的一站式社区
        </div>
        <div>
          当前聚焦于杭州师范大学
        </div>
      </>
    ),
  },
  {
    title: '微校WeSmile管理台',
    path: 'https://manage.weixiao.zuowu.cc',
    description: (
      <>
        <div>
          微校WeSmile小程序的管理台
        </div>
        <div>
          基于vue3和flask构建
        </div>
      </>
    ),
  },
  {
    title: 'UniAPI',
    path: 'https://uniapi.top',
    description: (
      <>
        <div>
          接口库
        </div>
        <div>
          工具调用从未如此简单
        </div>
      </>
    ),
  },
];

function Feature({ title, path, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link to={path}>{title}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.title}>项目列表</div>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
