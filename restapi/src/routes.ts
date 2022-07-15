import { Express, Request, Response } from "express";
import { createUserHandler, getUsersHandler, findUserHandler } from "./controllers/user.controller";
import { login } from "./services/login.service"

const schemas = require('./schemas/schemas'); 
const validateRequestMiddleware = require('./middlewares/validateRequest'); 
const authenticateRequestMiddleware = require('./middlewares/authenticateRequest'); 


export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    });

    // Register user -  POST /api/users
    app.post('/users', validateRequestMiddleware(schemas.user) , createUserHandler); 


    // Login User
    app.post('/login', validateRequestMiddleware(schemas.login), login); 


    // Get User By ID - Authentication required
    app.get('/users/:id', authenticateRequestMiddleware(), (req: Request, res: Response) => {
        findUserHandler(req, res, req.params.id);
    });
    
    // Get All users
    app.get('/users', (req: Request, res: Response) => {
        getUsersHandler(req, res);
    });

}