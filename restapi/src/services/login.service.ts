import { Request, Response } from 'express';
import { findUser } from '../services/user.service'
import jwt from "jsonwebtoken";

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtExpirySeconds = 60


interface LoginCredentials {
    username: string;
    password: string;
}


export async function login(req: Request, res: Response) {
    // Get credentials from JSON body
	const loginCredentials: LoginCredentials = req.body as LoginCredentials
	try {
       const user = await findUser({ email: loginCredentials.username, password: loginCredentials.password });
	   if (!user) return res.sendStatus(401)
       
	const userId = user._id;
	const token = jwt.sign({ userId }, jwtSecretKey, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	})
	console.log("token:", token);
    return res.status(200).send({ access_token: token });

    } catch (e) {
        console.log(e);
        return res.sendStatus(401)
    }
}