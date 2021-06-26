import { Router } from 'express';

const route = Router();

route.get('/users', (req, res) => {
	res.json([
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

route.post('/user', (req, res) => {
	res.status(201).json({ ...req.body });
});

route.post('/error', (req, res) => {
	if (!req.body.name)
		return res.status(201).json({ error: 'Name property missing' });
	if (!req.body.pass)
		return res.status(201).json({ error: 'Pass property missing' });
});

export default route;
