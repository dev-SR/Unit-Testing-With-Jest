import func from './function.js';

test('Adds 2+2 to equal 4', () => {
	expect(func.add(2, 2)).toBe(4);
});

test('Adds 2+2 to equal 4', () => {
	expect(func.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
	expect(func.isNull()).toBeNull();
});
//CHECK FOR TRUTHY AND FALSY
/**
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as tue
 * toBeFalsy matches anything that an if statement treats as false
 */
test('Should be falsy', () => {
	expect(func.checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
	expect(func.checkValue(undefined)).toBeFalsy();
});

test('User should be an Object', () => {
	// toBe is for primitive values
	expect(func.createUser()).toBe({
		name: 'Soikat',
		pass: '123'
	});
});

test('User should be an Object', () => {
	//use toEqual instead
	expect(func.createUser()).toEqual({
		name: 'Soikat',
		pass: '123'
	});
});

// Less then and greater then
test('User should be an Object', () => {
	const a = 4;
	const b = 4;
	expect(a + b).toBeLessThanOrEqual(8);
});

// Regex
test('There is no I in Team', () => {
	expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in roles', () => {
	let role = ['user', 'blocked', 'admin'];
	expect(role).toContain('admin');
});

/**  
 * describe(name, fn)#
 describe(name, fn) creates a block that groups together several related tests. For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:
*/
const myBeverage = {
	delicious: true,
	sour: false
};

describe('my beverage', () => {
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});
