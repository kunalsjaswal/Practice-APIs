import express from 'express'
import { addUserAPI, deleteDataAPI, getDataAPI, updateUserAPI, welcomeLog } from '../controllers/apis.js';

const router = express.Router();

router.get("/welcome", welcomeLog)
router.post("/addUser", addUserAPI)
router.get("/getData", getDataAPI)
router.delete("/deleteData/:id",deleteDataAPI)
router.put("/updateData/:id", updateUserAPI)

export default router;