import ArticleCard from '@/components/article-card';
import { posts } from '#velite';

type Params = Promise<{ slug: string }>;

const TagPage = async ({ params }: { params: Params }) => {
	const { slug } = await params;
	const tag = decodeURIComponent(slug[0]);
	const articles = posts.filter((item) => {
		if (!item.tags) return false;
		return item.tags.includes(tag);
	});
	return (
		<div className='prose dark:prose-invert grid grid-cols-1 gap-4 w-full mx-auto p-5 sm:px-0'>
			<div className='font-bold text-2xl italic py-5'>Tag: {tag}</div>
			{articles.map((post, index) => {
				return (
					<div key={index}>
						<ArticleCard post={post} />
					</div>
				);
			})}
		</div>
	);
};
export default TagPage;
