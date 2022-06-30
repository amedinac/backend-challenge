const express = require('express');

const commentRouter = require('./comment.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/comments', commentRouter);    
}

module.exports = routerApi;