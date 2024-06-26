// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
	scripts: [
		// {
		// 	src: './js/click.js',
		// 	defer: true,
		// },
		{
			src: 'https://www.youtube.com/iframe_api'
		},
		{
			src: './js/google.js',
		},
		// {
		// 	src: './js/baidu.js',
		// 	async: true
		// },
		// {
		// 	src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js',
		// 	defer: true,
		// },
		{
			src: 'https://www.googletagmanager.com/gtag/js?id=G-YREYFCFRSF',
			async: true
		}
	],
	stylesheets: [
		{
			href: 'https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css',
			type: 'text/css',
			crossorigin: 'anonymous',
		},
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity:
				'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],
	// 自定义字段
	customFields: {
		// 注意benAnField会直接当作html渲染 所以此处一定要注意xss攻击的安全性
		benAnFields: {
			beiAnId: '浙ICP备2020037204号-3',
			policeImg: '/img/police.png',
			wangAnId: '浙公网安备 33011002016712号',
			recordCode: '33011002016712',
		},
	},
	themes: [
		// ... Your other themes.
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true,
				// For Docs using Chinese, The `language` is recommended to set to:
				// ```
				language: ['en', 'zh'],
				// ```
			},
		],
	],
	title: '阡陌',
	tagline: '天空生而蔚蓝，我们生而自由。',
	url: 'https://huaqinda.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Alndaly', // Usually your GitHub org/user name.
	projectName: 'huaqinda.com', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['en', 'zh-Hans'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: ['/tags/**'],
					filename: 'sitemap.xml',
				},
				docs: {
					remarkPlugins: [math, [require('mdx-mermaid'), { sync: true }]],
					rehypePlugins: [katex],
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/alndaly/huaqinda.com/edit/master',
					showLastUpdateTime: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/alndaly/huaqinda.com/edit/master',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [],
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				hideOnScroll: true,
				title: 'Kinda',
				// logo: {
				// 	alt: 'Kinda',
				// 	src: 'img/logo.png',
				// },
				items: [
					{
						to: '/docs/frontend/React/hooks',
						label: '前端',
						position: 'left',
					},
					{
						to: '/docs/backend/Nginx/Nginx技巧和一些问题',
						label: '服务端',
						position: 'left',
					},
					{
						to: '/docs/others/Anaconda/basic-utils',
						label: '杂项',
						position: 'left',
					},
					// { href: 'https://kinda.info', label: '博客', position: 'right' },
					{ to: '/blog', label: '博客', position: 'right' },
					{
						href: 'https://uniapi.top',
						label: 'UniAPI',
						position: 'right',
					},
					{
						href: 'https://docs.unit-one.top',
						label: 'UnitOne私域社区',
						position: 'right',
					},
					{
						href: 'https://github.com/alndaly/huaqinda.com/tree/master',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								href: 'https://kinda.info'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/alndaly/huaqinda.com/tree/master',
							},
						],
					},
					{
						title: '项目列表',
						items: [
							{
								label: 'UniAPI',
								href: 'https://uniapi.top',
							},
							{
								label: 'UnitOne私域社区',
								href: 'https://doc.unit-one.top',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Kinda.`,
			},
			prism: {
				theme: prismThemes.dracula,
				additionalLanguages: ['powershell', 'swift', 'bash', 'java', 'groovy']
			},
		}),
	plugins: ['@docusaurus/theme-live-codeblock', 'docusaurus-plugin-sass'],
};

module.exports = config;
