import { posts } from '#velite';
import { MDXContent } from '@/components/mdx-content';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

const PostPage = async ({ params }: { params: Params }) => {
	const slug = (await params).slug;
	const post = posts.find((i) => {
		return i.slug === `posts/${slug}`;
	});
	if (!post) notFound();
	return (
		<article className='prose dark:prose-invert mx-auto p-5 sm:py-10'>
			<h1>{post.title}</h1>
			<MDXContent code={post.code} />
		</article>
	);
};

export default PostPage;
