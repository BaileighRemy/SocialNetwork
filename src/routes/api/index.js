import { Router } from 'express';
const router = Router();
import thoughtRoutes from './thought-routes';
import userRoutes from './user-routes';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;
