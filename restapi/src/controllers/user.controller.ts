import { Request, Response } from "express";
import { createUser, getAllUsers } from '../services/user.service'


export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(user.toJSON())
    } catch (e) {
        console.log(e);
        return res.status(409).send(e)
    }
}

export async function getUsersHandler(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        return res.send(users)
    } catch (e) {
        console.log(e);
        return res.status(409).send(e)
    }
}