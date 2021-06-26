import func from './function.js';
/**
 * https://jestjs.io/docs/expect#expectassertionsnumber
 * 
 * expect.assertions(number)#
expect.assertions(number) verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

For example, let's say that we have a function doAsync that receives two callbacks callback1 and callback2, it will asynchronously call both of them in an unknown order. We can test this with:

test('doAsync calls both callbacks', () => {
  expect.assertions(2);
  function callback1(data) {
    expect(data).toBeTruthy();
  }
  function callback2(data) {
    expect(data).toBeTruthy();
  }

  doAsync(callback1, callback2);
});
The expect.assertions(2) call ensures that both callbacks actually get called.
*/

test('Fetch User', async () => {
	expect.assertions(2);
	const u = await func.fetchUser();
	expect(u.data.email).toEqual('janet.weaver@reqres.in');
	expect(u.data.id).toEqual(2);
});
