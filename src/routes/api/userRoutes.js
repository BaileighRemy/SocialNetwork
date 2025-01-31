import { Router } from 'express';
const router = Router();
import { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } from '../../controllers/userController';

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

export default router;