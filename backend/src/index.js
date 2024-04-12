import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { accessRouter } from './routes/access';
import { cors } from 'hono/cors';
export const app = new Hono();
app.use('/*', cors());
app.route('/api/v1/user', userRouter);
app.route('/api/v1/access', accessRouter);
export default app;
