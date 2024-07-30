import express from 'express';
import routes from './router/index';

const app = express();
const port = 8000;

app.use('/api', routes);
console.log(`live on port ${port}`);

export default app;
