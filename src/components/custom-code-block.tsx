import { codeToHtml } from 'shiki';

const CustomCodeBlock = async ({
	children,
	className,
	isBlock,
}: {
	children: any;
	className: string;
	isBlock?: boolean;
}) => {
	if (!isBlock) {
		return <code>{children}</code>;
	}
	const element = await codeToHtml(children, {
		lang: className ? className.replace('language-', '') : 'text',
		themes: {
			light: 'catppuccin-latte',
			dark: 'vitesse-dark',
		},
	});
	return <p dangerouslySetInnerHTML={{ __html: element }} />;
};

export default CustomCodeBlock;
