import { app } from './index.js';
/**
 * 
    listen EADDRINUSE: address already in use :::4000

       6 | app.use('/api/v1', UserRoute);
       7 |
    >  8 | app.listen(4000, () => {
         |     ^
*/
app.listen(4000, () => {
	console.log('server started at http://localhost:4000');
});
