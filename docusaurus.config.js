// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
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
	title: '陌上花开',
	tagline: '生活在自由而蔚蓝的天空之下。',
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
						to: '/docs/interview/JavaScript/== _===',
						label: '面试',
						position: 'left',
					},
					{
						to: '/docs/photograph/A6400说明',
						label: '摄影',
						position: 'left',
					},
					{
						to: '/docs/health/绪论',
						label: '健康',
						position: 'left',
					},
					{
						to: '/docs/finance/real-estate',
						label: '金融',
						position: 'left',
					},
					{
						to: '/docs/backend/Django/base',
						label: '服务端',
						position: 'left',
					},
					{
						to: '/docs/artificial-intelligence/',
						label: '人工智能',
						position: 'left',
					},
					{
						to: '/docs/others/Anaconda/basic-utils',
						label: '杂项',
						position: 'left',
					},
					{
						to: '/docs/travel/HangZhou/Fuyang',
						label: '旅游',
						position: 'left',
					},
					{ to: '/blog', label: '博客', position: 'right' },
					{
						href: 'https://uniapi.top',
						label: 'UniAPI',
						position: 'right',
					},
					{
						href: 'https://docs.zuowu.cc',
						label: '微校WeSmile',
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
								to: '/blog',
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
								label: '微校WeSmile高校社区',
								href: 'https://docs.zuowu.cc',
							},
							{
								label: '微校WeSmile高校社区管理台',
								href: 'https://manage.weixiao.zuowu.cc',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Kinda.`,
			},
			prism: {
				additionalLanguages: ['powershell', 'swift', 'bash', 'java', 'groovy'],
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
	plugins: ['@docusaurus/theme-live-codeblock', 'docusaurus-plugin-sass'],
};

module.exports = config;
