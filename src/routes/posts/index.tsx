import {
	createFileRoute,
	ErrorComponentProps,
	Link,
} from '@tanstack/react-router';
import { fetchPosts } from '../../utils/post';

export const Route = createFileRoute('/posts/')({
	component: Posts,
	loader: fetchPosts,
	errorComponent: ({ error }: ErrorComponentProps) => {
		return <p>{(error as Error).message}</p>;
	},
	pendingComponent: () => <p className='text-lime-600'>Loading...</p>,
});

function Posts() {
	const posts = Route.useLoaderData();

	return (
		<main className='p-2'>
			<header className='mb-4'>
				<h1 className='font-extrabold'>Posts</h1>
			</header>
			<ul>
				{posts.map((post) => (
					<li key={post.id} className='flex flex-col mb-4'>
						<h3 className=' font-extrabold'>{post.title}</h3>
						<p className='line-clamp-4'>{post.body}</p>
						<Link
							to='/posts/$postId'
							params={{
								postId: String(post.id),
							}}
							className='text-green-700 font-semibold'
						>
							Read more
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
