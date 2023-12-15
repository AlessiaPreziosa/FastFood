const express = require('express');

const adminsRouter = require('./admin')
const cooksRouter = require('./cook')

const router = express.Router();
router.use('/api/v1/fastFood/admin', adminsRouter);
router.use('/api/v1/fastFood/cook', cooksRouter);

module.exports = router;


