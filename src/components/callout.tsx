'use client';

import cn from 'clsx';
import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import GitHubWarningIcon from '@/components/icon/github-warning';
import GitHubCautionIcon from '@/components/icon/github-caution';
import GitHubTipIcon from '@/components/icon/github-tip';
import GitHubImportantIcon from '@/components/icon/github-important';
import GitHubNoteIcon from '@/components/icon/github-note';

const TypeToEmoji = {
	default: <GitHubTipIcon height='.8em' className='mt-[.3em]' />,
	error: <GitHubCautionIcon height='.8em' className='mt-[.3em]' />,
	info: <GitHubNoteIcon height='.8em' className='mt-[.3em]' />,
	warning: <GitHubWarningIcon height='.8em' className='mt-[.3em]' />,
	important: <GitHubImportantIcon height='.8em' className='mt-[.3em]' />,
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
	default: cn(
		'bg-green-100 dark:bg-green-900/30',
		'text-green-700 dark:text-green-500',
		'border-green-700 dark:border-green-800'
	),
	error: cn(
		'bg-red-100 dark:bg-red-900/30',
		'text-red-700 dark:text-red-500',
		'border-red-700 dark:border-red-600'
	),
	info: cn(
		'bg-blue-100 dark:bg-blue-900/30',
		'text-blue-700 dark:text-blue-400',
		'border-blue-700 dark:border-blue-600'
	),
	warning: cn(
		'bg-yellow-50 dark:bg-yellow-700/30',
		'text-yellow-700 dark:text-yellow-500',
		'border-yellow-700'
	),
	important: cn(
		'bg-purple-100 dark:bg-purple-900/30',
		'text-purple-600 dark:text-purple-400',
		'border-purple-600'
	),
};

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
	type?: CalloutType | null;
	emoji?: ReactNode;
};

export const Callout: FC<CalloutProps> = ({
	className,
	type = 'default',
	emoji = type && TypeToEmoji[type],
	...props
}) => {
	return (
		<div
			className={cn(
				'overflow-x-auto not-first:mt-[1.25em] flex rounded-lg border py-[.5em] pe-[1em]',
				'contrast-more:border-current!',
				type && classes[type]
			)}>
			<div
				className='select-none text-[1.25em] ps-[.6em] pe-[.4em]'
				style={style}
				data-pagefind-ignore='all'>
				{emoji}
			</div>
			<div className={cn('w-full min-w-0', className)} {...props} />
		</div>
	);
};

const style: CSSProperties = {
	fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};
