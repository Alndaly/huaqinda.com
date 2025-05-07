import { Loader2 } from 'lucide-react';

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className='flex-1 flex justify-center items-center'>
			<div className='flex flex-row items-center gap-2'>
				<p>Content is loading...</p>
				<Loader2 className='animate-spin h-8 w-8' />
			</div>
		</div>
	);
}
