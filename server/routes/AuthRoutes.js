import {Router} from 'express'
 
const router = Router();

//import controller
import { checkUser } from '../controllers/AuthController.js';


//create router
router.post('/checkuser', checkUser );

export default router;