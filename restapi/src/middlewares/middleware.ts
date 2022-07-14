import { Request, Response } from "express";


const Joi = require('joi'); 
const middleware = (schema) => { 
  return (req: Request, res: Response, next) => { 
  const { error, value } = schema.validate(req.body); 
  
  if (error === undefined) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
   res.status(422).json({ error: message }) } 
  } 
} 
module.exports = middleware;