const express = require('express');
const router = express.Router();

const commentRouter = require('./comment.router');

function routerApi(app){
    app.use('/api', router);
    router.use('/comments', commentRouter);    
}

module.exports = routerApi;