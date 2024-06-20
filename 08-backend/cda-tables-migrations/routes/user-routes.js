import express from 'express';
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

router
  .route("/")
  .get(userController.index)
  .post(userController.add);

router
  .route("/:id")
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.remove);

router
  .route("/:id/posts")
  .get(userController.posts);

export default router;