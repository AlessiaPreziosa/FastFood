const express = require('express');
const methodOverride = require("method-override");
const cookController = require('../controllers/cooks')

const cooksRouter = express.Router();

cooksRouter.get('/', cookController.getOrders);

cooksRouter.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));

cooksRouter.put('/updateCarico', cookController.updateCarico);
cooksRouter.put('/updateConcludi', cookController.updateConcludi);

module.exports = cooksRouter;