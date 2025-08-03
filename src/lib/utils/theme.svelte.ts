export function initTheme(cb: (isDark: boolean) => void) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	cb(mediaQuery.matches);
	mediaQuery.addEventListener('change', (e) => cb(e.matches));
}
