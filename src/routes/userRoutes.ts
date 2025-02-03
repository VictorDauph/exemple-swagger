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

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     description: Cette route permet de supprimer un utilisateur en fournissant son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'utilisateur à supprimer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Utilisateur supprimé avec succès"
 *                 data:
 *                   type: object
 *                   description: Les détails de l'utilisateur supprimé
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: L'ID de l'utilisateur supprimé
 *                       example: 64b8c02959d9b437b9a8b5d1
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     age:
 *                       type: number
 *                       example: 30
 *       400:
 *         description: ID requis pour supprimer un utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "ID requis pour supprimer un utilisateur"
 *       404:
 *         description: Utilisateur non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Utilisateur non trouvé"
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erreur interne"
 *                 error:
 *                   type: string
 */
router.delete('/:id', deleteUser);

export default router;