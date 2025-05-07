import { siteConfig } from 'siteconfig';

export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
	};
}
