import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser, signout, test, updateUser, getUser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers); // for admin view
router.get('/:userId', getUser); // for comments

export default router;