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
export const handleSectionIO = (ref = null, threshold = 0.5, rootMargin = 0, callBack) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				console.log(ref.current);
				callBack(true);
			}
		},
		{ rootMargin: `${rootMargin}px`, threshold: threshold }
	);
	if (ref.current) {
		observer.observe(ref.current);
	}

	return () => observer.disconnect();
};
