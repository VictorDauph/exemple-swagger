import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import { hashPassword } from "../utils/pwdUtils";

export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await User.find();
        res.send(users)
    } catch (err: any) {
        res.status(500).send(err.message);
    }
}


export async function deleteUser(req: Request, res: Response) {
    try {
        const { id } = req.params;

        // Vérification de la présence de l'ID
        if (!id) {
            res.status(400).json({ message: 'ID requis pour supprimer un utilisateur' });
            return
        }

        // Suppression de l'utilisateur
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
            return
        }

        // Réponse réussie
        res.status(200).json({ message: 'Utilisateur supprimé avec succès', data: deletedUser });
        return
    } catch (err: any) {
        // Gestion des erreurs
        res.status(500).json({ message: 'Erreur interne', error: err.message });
        return
    }

}
