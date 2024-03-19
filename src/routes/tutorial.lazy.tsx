console.log('_TUTORIAL_');

import { createLazyFileRoute } from '@tanstack/react-router';

function Tutorial() {
	return <main className='p-2'>Hello from Tutorial!</main>;
}

export const Route = createLazyFileRoute('/tutorial')({
	component: Tutorial,
});
