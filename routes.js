'use strict';

import express from 'express';
const router = express.Router();
import logger from "./utils/logger.js";

import start from './controller/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/abou', about.createView);

export default router;