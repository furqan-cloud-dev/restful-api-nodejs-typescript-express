import { Request, Response } from "express";


const Joi = require('joi'); 
const validateRequestMiddleware = (schema) => { 
  return (req: Request, res: Response, next) => { 
  const { error, value } = schema.validate(req.body); 
  
  if (error === undefined) { 
    next(); 
  } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
  
      console.log("error", message);
      // Bad request - 400 
      res.status(400).json({ error: message }) 
    } 
  } 
} 
module.exports = validateRequestMiddleware;