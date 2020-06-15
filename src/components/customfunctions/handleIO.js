import IntersectionObserver from 'intersection-observer-polyfill';

export const handleIO = (ref = null, threshold = 0.5, rootMargin = 0, callBack) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.intersectionRatio > 0) {
				callBack(true);
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: `${rootMargin}px`, threshold: threshold }
	);
	if (ref.current) {
		observer.observe(ref.current);
	}

	return () => observer.disconnect();
};

//handle whether intersecting a section to add an active attribute
export const handleSectionIO = (ref = null, threshold = 0.2, rootMargin = [0, 0, 0, 0], callBack) => {
	if (!rootMargin.forEach && rootMargin.map((r) => typeof r !== 'number')) {
		throw new Error('rootMargin must be an array of numbers');
	}
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				callBack(true);
			}
			if (!entry.isIntersecting) {
				callBack(false);
			}
		},
		{
			rootMargin: rootMargin.forEach((margin) => margin + 'px'),
			threshold: 0,
		}
	);
	if (ref.current) {
		observer.observe(ref.current);
	}

	return () => observer.disconnect();
};
