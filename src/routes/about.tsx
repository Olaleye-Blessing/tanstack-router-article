console.log('_ABOUT_');

import { createFileRoute } from '@tanstack/react-router';

function About() {
	return <main className='p-2'>Hello from About!</main>;
}

export const Route = createFileRoute('/about')({
	component: About,
});
