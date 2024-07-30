import express from 'express';
import processingImage from '../controllers/file.controller';
import logger from '../Middleware/loger.Middleware';

const routes = express.Router();

routes.get('/images', logger, processingImage);

export default routes;
