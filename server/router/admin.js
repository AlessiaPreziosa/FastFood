const express = require('express');
const methodOverride = require("method-override");
const adminController = require('../controllers/admins')

const adminsRouter = express.Router();

adminsRouter.get('/', adminController.getMenu);
adminsRouter.post('/addMenu', adminController.addMenu);

adminsRouter.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

adminsRouter.put('/updateMenu', adminController.updateMenu);
adminsRouter.delete('/deleteMenu', adminController.deleteMenu);

module.exports = adminsRouter;