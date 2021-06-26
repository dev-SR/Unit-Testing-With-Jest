import axios from 'axios';

const functions = {
	add: (a, b) => a + b,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => ({
		name: 'Soikat',
		pass: '123'
	}),
	fetchUser: () =>
		axios
			.get('https://reqres.in/api/users/2')
			.then((res) => res.data)
			.catch((e) => 'error')
};

export default functions;
