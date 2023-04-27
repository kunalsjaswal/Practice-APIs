import express from 'express'
import { addUserAPI, getDataAPI, welcomeLog } from '../controllers/apis.js';

const router = express.Router();

router.get("/welcome", welcomeLog)
router.post("/addUser", addUserAPI)
router.get("/getData", getDataAPI)

export default router;