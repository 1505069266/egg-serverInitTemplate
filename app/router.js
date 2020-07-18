'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  router.get('/', controller.home.index);
  router.get("/user/:id", controller.user.getById);
  router.post("/video/:id", controller.user.getById);
  router.post("/upload", controller.file.index)
};
