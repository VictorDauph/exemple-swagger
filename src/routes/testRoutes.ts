import express from 'express';
import { protectedTest, test, test2 } from '../controllers/testController';
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware';



const router = express.Router();

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test route
 *     description: Retourne un simple message de test
 *     responses:
 *       200:
 *         description: Succès
 */
router.get('/', test);

/**
 * @swagger
 * /test/protected:
 *   get:
 *     summary: "Accès à la route protégée"
 *     description: >
 *       Cette route est protégée par un middleware qui vérifie la présence d'un token JWT dans le cookie.
 *       Si le token est valide, les données décodées du token sont renvoyées.
 *     tags:
 *       - protected
 *     responses:
 *       200:
 *         description: "Accès autorisé. Les données décodées du token sont renvoyées."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 id: 123
 *                 username: "exemple"
 *                 role: "user"
 *       401:
 *         description: "Accès refusé. Cookie manquant ou token absent dans le cookie."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Access denied. Cookie missing."
 *       403:
 *         description: "Accès refusé. Token invalide ou expiré."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid or expired token."
 */
router.get('/protected', verifyTokenMiddleware, protectedTest);


export default router;