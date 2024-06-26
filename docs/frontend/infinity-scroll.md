---
title: 前端无限滚动实现
description: 在基于NextJS写一个社区项目的时候，发现基于原来的useEffect和onScroll的分页写法，存在较为严重的异步并发导致的请求重复发起的问题并且难以解决，考虑换一种思路，在查阅之后发现IntersectionObserver API似乎可以拿来试试，最终完美解决问题，于是决定使用IntersectionObserver API来替代原来的onScroll事件。
---

## 传统方式

通过绑定元素的 `onScroll` 事件，原生的话是 `scroll` 事件，然后判断元素的 `scrollTop`，`clientHeight` 二者之和是否大于等于元素的 `scrollHeight`，如果是则表示滚动到了底部，触发加载更多操作。

```tsx title="完整的组件示例"
import React, { useRef, useEffect, useState } from 'react';

function YourComponent() {
	const containerRef = useRef(null);
	const [isBottom, setIsBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
			if (scrollTop + clientHeight >= scrollHeight) {
				setIsBottom(true);
			} else {
				setIsBottom(false);
			}
		};

		const container = containerRef.current;
		container.addEventListener('scroll', handleScroll);

		return () => {
			container.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div ref={containerRef} style={{ overflowY: 'auto', height: '300px' }}>
			{/* Your content here */}
			{isBottom && <p>You've reached the bottom!</p>}
		</div>
	);
}
```

## 现代化方式

借助 `IntersectionObserver` API 来实现

> IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发，性能消耗极低。

```tsx title="基础用法"
const box = document.querySelector('.box');
const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((item) => {
		if (item.isIntersecting) {
			console.log('进入可视区域');
		}
	});
});
intersectionObserver.observe(box);
```

```tsx title="实际应用"
'use client';

import { searchPost } from '@/services/post';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { useGetState } from 'ahooks';

export default function Post() {
	const [post, setPost] = useState<any>(null);
	const [pageNum, setPageNum, getPageNum] = useGetState(0);
	const [keyword, setKeyword] = useState('');
	const topElement = useRef<HTMLDivElement>(null);
	const bottomElement = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const getNextPageData = async () => {
		setIsLoading(true);
		const [res, err] = await searchPost({
			keyword,
			pageNum: getPageNum(),
			pageSize: 10,
		});
		setPost((prevPost: any) => {
			if (!prevPost) {
				return res;
			}
			return {
				...prevPost,
				content: [...prevPost.content, ...res.content],
			};
		});
		setIsLoading(false);
		!res.empty && setPageNum((prevPageNum) => prevPageNum + 1);
	};

	useEffect(() => {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.id === 'bottom' && getNextPageData();
				}
			});
		});

		bottomElement.current && io.observe(bottomElement.current);
		topElement.current && io.observe(topElement.current);

		return () => {
			io.disconnect();
		};
	}, []);

	return (
		<div className='h-full overflow-auto'>
			<div id='top' ref={topElement}></div>
			<ul className='space-y-4'>
				{post &&
					post.content.map((item: any, index: number) => {
						return <li>{item.title}</li>;
					})}
			</ul>
			<div id='bottom' ref={bottomElement}></div>
			{isLoading && <div className='p-5 text-center'>加载中</div>}
		</div>
	);
}
```
