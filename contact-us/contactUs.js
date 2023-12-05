import express from 'express'
import { getContactqueries, sendContactDetails } from './contactUsController.js';
import { checkUserData } from './contactUsMiddleware.js';

const router = express.Router();

router.post('/contactUs',checkUserData,sendContactDetails);
router.get('/contact',getContactqueries)

export default router;