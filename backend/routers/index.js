import express from 'express';
import commentRouter from './commentRouter.js';

const router = express();

router.use('/comments', commentRouter);

export default router;