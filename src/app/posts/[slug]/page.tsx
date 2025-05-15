import { posts } from '#velite';
import Comments from '@/components/comments';
import { MDXContent } from '@/components/mdx-content';
import Link from 'next/link';
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
			<Link
				className='no-underline'
				href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
				target='_blank'>
				<p className='py-2 text-sm text-right sm:text-left text-zinc-500 dark:text-zinc-400'>
					CC BY-NC-SA 4.0
				</p>
			</Link>
			<Comments />
		</article>
	);
};

export default PostPage;
