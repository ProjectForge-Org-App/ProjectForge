import User from '../models/usersModel.js';
import { Request, Response, NextFunction } from 'express';

type LoginControllerType = {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
};

const userController: LoginControllerType = {} as LoginControllerType;

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next({
        log: 'userController.createUser: Missing username or password!',
        status: 400,
        message: { err: 'Missing username or password!' },
      });
    }
    if (password.length < 6) {
      return next({
        log: 'userController.create: password must be at least 6 characters long!',
        status: 400,
        message: { err: 'password must be at least 6 characters long' },
      });
    }
    const data = await User.create({ username, password });
    res.locals.userNew = data;
    console.log('🦾🦾 New user saved', data);
    return next();
  } catch (err) {
    return next({
      log: 'createUser: Error creatUser',
      status: 500,
      message: { err: 'Anerror occurred createUser' },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next({
        log: 'missing username or password',
        status: 400,
        message: { err: 'missing username or password' },
      });
    }
    const data = await User.findOne({ username, password });
    if (!data) {
      res.status(400).json({ message: 'Invalid username or password' });
    }
    res.locals.user = data;
    console.log('🍺🍺🍺🍺 User verified success', data);
    return next();
  } catch (err) {
    console.error('Error verifying user!', err);
    return next({
      log: 'verifyUser: Error: verifyUser',
      status: 500,
      message: { err: 'An error occurred when verifying user' },
    });
  }
};

export default userController;
