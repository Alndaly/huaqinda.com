'use client';
import { codeToHtml } from 'shiki';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

const CustomCodeBlock = ({
	children,
	className,
	isBlock,
}: {
	children: any;
	className: string;
	isBlock?: boolean;
}) => {
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
		handleInitCode();
	}, []);
	if (!isBlock) {
		return <code>{children}</code>;
	}
	return (
		<>
			{html && <p dangerouslySetInnerHTML={{ __html: html }} />}
			{!html && <Skeleton className='w-full h-15' />}
		</>
	);
};

export default CustomCodeBlock;
