'use client';

import { useCopyToClipboard } from 'react-use';
import { Button } from '../ui/button';

const CodeCopyButton = ({ code }: { code: string }) => {
	const [copiedText, copy] = useCopyToClipboard();
	return (
		<Button
			onClick={() => copy(code)}
			variant='ghost'
			className='absolute top-2 right-2'>
			copy
		</Button>
	);
};

export default CodeCopyButton;
