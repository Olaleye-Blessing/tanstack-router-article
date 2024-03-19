import { createFileRoute } from '@tanstack/react-router';

function Index() {
	return (
		<div className='p-2'>
			<header>
				<h1>Welcome Home!</h1>
			</header>
		</div>
	);
}

export const Route = createFileRoute('/')({
	component: Index,
});
