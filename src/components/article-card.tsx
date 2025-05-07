import React from 'react';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { zhCN } from 'date-fns/locale/zh-CN';
import type { Post } from '#velite';

interface Props {
	post: Post;
}

const postCard = (props: Props) => {
	const { post } = props;
	return (
		<div className='flex flex-col gap-2 rounded transition-all duration-300 bg-muted p-5'>
			<Link href={`/${post.slug}`}>
				<div className='font-bold text-xl line-clamp-2'>{post.title}</div>
			</Link>
			<div className='line-clamp-3 text-sm'>{post.excerpt}</div>
			<div className='flex flex-row justify-between'>
				<div className='text-muted-foreground text-xs'>
					<span>
						上次更新
						{formatDistance(new Date(post.lastModified), new Date(), {
							addSuffix: true,
							locale: zhCN,
						})}
					</span>
				</div>
				{post.tags && post.tags.length > 0 && (
					<div className='flex flex-row gap-2'>
						{post.tags.map((tag: string, index: number) => {
							return (
								<Link
									key={index}
									href={'/tag/' + tag}
									className='no-underline text-xs text-muted-foreground'>
									{'#' + tag}
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default postCard;
