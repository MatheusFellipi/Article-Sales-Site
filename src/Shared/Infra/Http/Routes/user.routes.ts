import multer from 'multer';
import { CreateUsersController } from '@Modules/Accounts/UseCases/CreateUser/CreateUsersController';
import { UpdateUseAvatarController } from '@Modules/Accounts/UseCases/UpdateUseAvatar/UpdateUseAvatarController';

import { Router } from 'express';

import uploadConfig from '@Config/upload';
import { ensureAuthenticated } from '../Middlewares/ensureAuthenticated';

const routeUsers = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUsersController = new CreateUsersController();
const updateUseAvatarController = new UpdateUseAvatarController();

routeUsers.post('/', createUsersController.handle);

routeUsers.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUseAvatarController.handle
);

export { routeUsers };
