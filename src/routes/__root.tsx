import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: () => (
		<>
			<nav>Our nav component</nav>
			<Outlet />
		</>
	),
});
