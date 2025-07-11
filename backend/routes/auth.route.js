import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
// router.post('/signin',(req,res)=>{
//     res.send('signin route');
// });
// router.get('/signout',(req,res)=>{
//     res.send('signout route');
// });


export default router;