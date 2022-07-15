
const Joi = require('joi')

const schemas = { 
  user: Joi.object().keys({ 
    name: Joi.string().required(), 
    email: Joi.string().required(),
    password: Joi.string().required() 
  }),

  login: Joi.object().keys({ 
    username: Joi.string().required(), 
    password: Joi.string().required(), 
  })
  

  // define all the other schemas below 
}; 
module.exports = schemas;