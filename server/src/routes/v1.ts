import express from 'express';
const router = express.Router();

import studentApi from './student.routes';
router.use("/students", studentApi);

export default router;