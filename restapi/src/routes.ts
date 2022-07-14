import { Express, Request, Response } from "express";
import { createUserHandler, getUsersHandler } from "./controllers/user.controller";

const schemas = require('./schemas/schemas'); 
const middleware = require('./middlewares/middleware'); 

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    });

    // Register user -  POST /api/users
    app.post('/users', middleware(schemas.user) , createUserHandler); 

    
    // Get All users
    app.get('/users', (req: Request, res: Response) => {
        getUsersHandler(req, res);
    });

}




 
// Login -   /api/sessions

// user sessions

// Logout