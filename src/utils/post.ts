import { IPost } from '../interfaces/post';

export const fetchPosts = async () => {
	await new Promise((r) => setTimeout(r, 2000));

	const req = await fetch('https://jsonplaceholder.typicode.com/posts');

	const data: IPost[] = await req.json();

	return data;
};
