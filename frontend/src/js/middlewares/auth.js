function authMiddleware(to, from, next) {
	const isAuthenticated = !!localStorage.getItem('userid');
	if ((to.name === 'Login' && to.name === 'Home') && isAuthenticated) {
		next({ name: 'Workspace' });
	} else if (to.name === 'Workspace' && !isAuthenticated) {
		next({ name: 'Login' });
	} else {
		next();
	}
}

export default authMiddleware;
