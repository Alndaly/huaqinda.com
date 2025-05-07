import ArticleCard from '@/components/article-card';
import { posts } from '#velite';
import type { Post } from '#velite';

function groupByMonth(posts: Post[]): Record<string, any[]> {
	return posts.reduce((acc, post) => {
		const date = new Date(post.lastModified);
		const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1)
			.toString()
			.padStart(2, '0')}`; // 生成 "YYYY-MM" 格式的键

		if (!acc[monthKey]) {
			acc[monthKey] = [];
		}
		acc[monthKey].push(post);

		return acc;
	}, {} as Record<string, any[]>);
}

const Page = async () => {
	const monthGroup = groupByMonth(posts);
	return (
		<div className='grid grid-cols-1 container items-center px-8 py-8 mx-auto sm:flex-row gap-5'>
			{Object.entries(monthGroup).map(([month, posts], index) => {
				return (
					<div key={index}>
						<h1 className='font-bold text-2xl mb-5'>{month}</h1>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
							{posts.map((post, index) => {
								return <ArticleCard key={index} post={post} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Page;
