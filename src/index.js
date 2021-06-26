import express from 'express';
const app = express();
app.use(express.json());
import UserRoute from './routes/user.route.js';
app.use('/api/v1', UserRoute);

export { app };
