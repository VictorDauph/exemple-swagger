import express from 'express';
import { deleteUser, getAllUsers } from '../controllers/userController';


const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: getAllUsers
 *     description: Retourne la liste de tous les users
 *     responses:
 *       200:
 *         description: Succès
 */
router.get('/', getAllUsers);

router.delete('/:id', deleteUser);

export default router;