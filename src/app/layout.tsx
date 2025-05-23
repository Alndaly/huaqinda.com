import { Metadata } from 'next';
import Nav from '@/components/nav';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from 'siteconfig';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.siteUrl),
	generator: 'Next.js',
	applicationName: siteConfig.siteRepo,
	referrer: 'origin-when-cross-origin',
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.author }],
	creator: siteConfig.author,
	publisher: siteConfig.author,
	title: siteConfig.title,
	description: siteConfig.description,
	formatDetection: {
		email: true,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.siteUrl,
		siteName: siteConfig.siteName,
		locale: siteConfig.language,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='zh' suppressHydrationWarning>
			<body className='dark:bg-[#1E1E1E]'>
				<GoogleAnalytics gaId='G-JT60THL1FF' />
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<div className='fixed top-0 left-0 z-10 w-full'>
						<Nav />
					</div>
					<NextTopLoader />
					{children}
					<SpeedInsights />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
