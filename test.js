import test from 'ava';
import cUa from '.';

test('main', t => {
	const random = cUa([1, 2, 3, 4, 5, 6, 7]);

	let current;
	let previous;
	let i = 100;
	while (i--) {
		current = random();
		t.not(current, previous);
		previous = current;
	}
});
