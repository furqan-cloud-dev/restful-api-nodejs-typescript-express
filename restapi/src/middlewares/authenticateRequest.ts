import { Request, Response, NextFunction } from "express";
import { decodeJWT } from "../utils/jwt.utils"; 

const authenticateRequestMiddleware = () => { 
    return (req: Request, res: Response, next: NextFunction) => { 
    const authHeader = req.headers['authorization']; 
    // split token here: Bearer eyXyz123
    const token = authHeader && authHeader.split(' ')[1];
    if (token === undefined) return res.sendStatus(401);
    
    const { decoded } = decodeJWT(token)
    
    // if (!decoded || !get(decoded, "_id")) return res.sendStatus(401);
    if (!decoded) return res.sendStatus(401);

    // get user id and pass it to next function
    return next();

    }
  } 
  module.exports = authenticateRequestMiddleware;