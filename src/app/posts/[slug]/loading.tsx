import { Loader2 } from 'lucide-react';

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className='flex justify-center items-center h-[calc(100vh-64px)]'>
			<div className='flex flex-col items-center gap-2'>
				<Loader2 className='animate-spin h-6 w-6' />
				<p>Content is loading, please wait for a while...</p>
			</div>
		</div>
	);
}
