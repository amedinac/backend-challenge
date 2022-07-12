const express = require('express');

const commentRouter = require('./comment.router');
const userRouter = require('./user.router');
const postRouter = require('./post.router');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/comments', commentRouter);
    router.use('/users', userRouter);   
    router.use('/posts', postRouter);  
}

module.exports = routerApi;