import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { codeToHtml } from 'shiki';
import CodeCopyButton from './CodeCopyButton';

const CodeBlock = async ({ block }: { block: CodeBlockObjectResponse }) => {
	// 把异步任务移到副作用中执行，例如使用 useEffect 或者直接处理异步数据
	const codeHtmlPromises = block.code.rich_text.map(async (richText) => {
		return await codeToHtml(richText.plain_text, {
			lang: block.code.language === 'plain text' ? 'text' : block.code.language,
			themes: {
				light: 'catppuccin-latte',
				dark: 'vitesse-dark',
			},
		});
	});

	// 等待所有代码块的 HTML 转换完成
	const codeHtmlArray = await Promise.all(codeHtmlPromises);

	// 把所有代码块的 HTML 内容连接起来
	const codeHtml = codeHtmlArray.join('\n');

	const element = (
		<div className='relative'>
			<CodeCopyButton
				code={block.code.rich_text
					.map((richText, index) => {
						return richText.plain_text;
					})
					.join('\n')}
			/>
			<p dangerouslySetInnerHTML={{ __html: codeHtml }} />
		</div>
	);
	return element;
};

export default CodeBlock;
