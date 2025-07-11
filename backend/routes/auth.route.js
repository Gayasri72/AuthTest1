import express from 'express';
import { signup,verifyEmail,logout,login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-email',verifyEmail)
router.post('/logout',logout)
router.post('/login',login)
// router.post('/signin',(req,res)=>{
//     res.send('signin route');
// });
// router.get('/signout',(req,res)=>{
//     res.send('signout route');
// });


export default router;