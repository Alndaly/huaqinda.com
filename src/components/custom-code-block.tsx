'use client';
import { codeToHtml } from 'shiki';
import { useEffect, useState } from 'react';

const CustomCodeBlock = ({
	children,
	className,
	isBlock,
}: {
	children: any;
	className: string;
	isBlock?: boolean;
}) => {
	const [isClient, setIsClient] = useState(false);
	const [html, setHtml] = useState<any>();
	const handleInitCode = async () => {
		const element = await codeToHtml(children, {
			lang: className ? className.replace('language-', '') : 'text',
			themes: {
				light: 'catppuccin-latte',
				dark: 'vitesse-dark',
			},
		});
		setHtml(element);
	};
	useEffect(() => {
		setIsClient(true);
	}, []);
	useEffect(() => {
		handleInitCode();
	}, []);
	if (!isClient) return null;

	if (!isBlock) {
		return <code>{children}</code>;
	}

	return <p dangerouslySetInnerHTML={{ __html: html }} />;
};

export default CustomCodeBlock;
