import request from 'supertest';
import { app } from '../index.js';
describe('Test GET /users', () => {
	test('It should respond with 200 success', async () => {
		const res = await request(app)
			.get('/api/v1/users')
			.expect('Content-Type', /json/)
			.expect(200);
		// console.log(res.body);
		expect(res.body).toMatchObject([
			{
				name: 'A',
				pass: '123'
			},
			{
				name: 'B',
				pass: '123'
			}
		]);
	});

	test('sub test...', () => {
		expect(null).toBeFalsy();
	});
});

describe('Test POST /user', () => {
	test('It should respond with 201 created', async () => {
		const res = await request(app)
			.post('/api/v1/user')
			.send({
				name: 'C',
				pass: '123'
			})
			.expect('Content-Type', /json/)
			.expect(201);

		// console.log(res.body);

		expect(res.body).toMatchObject({
			name: 'C',
			pass: '123'
		});
	});
});

//! Error_Cases

/**
 * .toStrictEqual(value)#
Use .toStrictEqual to test that objects have the same types as well as structure.

** Differences from .toEqual:

	Keys with undefined properties are checked. e.g. {a: undefined, b: 2} does not match {b: 2} when using .toStrictEqual.
	Array sparseness is checked. e.g. [, 1] does not match [undefined, 1] when using .toStrictEqual.
	Object types are checked to be equal. e.g. A class instance with fields a and b will not equal a literal object with fields a and b.
*/

describe('Test POST /error', () => {
	test('It should catch missing pass property error', async () => {
		const res = await request(app)
			.post('/api/v1/error')
			.send({
				name: 'D'
			})
			.expect('Content-Type', /json/)
			.expect(201);

		// console.log(res.body);
		expect(res.body).toStrictEqual({
			error: 'Pass property missing'
		});
	});

	test('It should catch missing Name property error', async () => {
		const res = await request(app)
			.post('/api/v1/error')
			.send({
				pass: 'D'
			})
			.expect('Content-Type', /json/)
			.expect(201);

		// console.log(res.body);
		expect(res.body).toStrictEqual({
			error: 'Name property missing'
		});
	});
});
