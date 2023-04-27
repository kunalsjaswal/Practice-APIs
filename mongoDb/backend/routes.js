import express from 'express'
import { displayLog ,addingUserAPI, updateDataAPI, deletingUserAPI, getDataAPI } from './controllers/post.js'

const router = express.Router()

router.get('/welcome', displayLog)
router.post('/addUser', addingUserAPI)
router.delete('/deleteUser/:id', deletingUserAPI)
router.get('/getData', getDataAPI)
router.put('/updateData/:id', updateDataAPI)

export default router