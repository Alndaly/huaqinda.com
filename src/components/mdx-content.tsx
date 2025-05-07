import * as runtime from 'react/jsx-runtime';
import CustomImageBlock from './custom-image-block';
import CustomCodeBlock from './custom-code-block';
import React from 'react';

const sharedComponents = {
	// Add your global components here
	img: CustomImageBlock,
	code: CustomCodeBlock,
	pre: ({ children }: { children: React.ReactElement }) => {
		// fallback
		return <>{React.cloneElement(children, { isBlock: true })}</>;
	},
};

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

interface MDXProps {
	code: string;
	components?: Record<string, React.ComponentType>;
}

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
	const Component = useMDXComponent(code);
	return <Component components={{ ...sharedComponents, ...components }} />;
};
