import express from 'express';

import authentication from './authRouter';
import users from './usersRouter';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  
  return router;
};