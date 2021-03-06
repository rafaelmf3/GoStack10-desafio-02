import { Router } from "express";

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import SessionStore from './app/validators/SessionStore';
import UserStore from './app/validators/UserStore';
import UserUpdate from './app/validators/UserUpdate';
import RecipientStoreOrUpdate from './app/validators/RecipientStoreOrUpdate';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserStore, UserController.store);
routes.post('/sessions', SessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserUpdate, UserController.update);

routes.put('/recipients/:id', RecipientStoreOrUpdate, RecipientController.update);
routes.post('/recipients', RecipientStoreOrUpdate, RecipientController.store);

export default routes;
