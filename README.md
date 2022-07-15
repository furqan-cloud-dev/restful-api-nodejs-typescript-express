# restful-api-nodejs-typescript-express-es6+
Build RESTful API with Node.js best practices + Typescript, Express &amp; express middlewares, MongoDB, JWT, ES6+
<br/>
npm package manager <br/>
https://www.npmjs.com/ <br/>

Clone the repo <br/>
Open the folder in Visual Studio Code IDE <br/>
Execute Terminal Commands: <br/> 
Package dependencies: restapi % npm install <br/> 
Typescript Compiler :  restapi % tsc <br/> 
A distribution folder will be created with generated javascript files: "dist" <br/>

Run the Node.js http Server:   restapi % node dist/app.js <br/><br/>

From Postman following APIs are accessible:<br/>

Create User :    [ POST ] http://localhost:8080/users <br/>
Get All Users :    [ GET ] http://localhost:8080/users <br/>

Login :    [ POST ] http://localhost:8080/login <br/>
Request (Json): {"username": "username@domain.com", "password": "123"} <br/>
Response (Json): {
    "access_token": "eyJhbGci..."
} <br/>

Get A User: [ GET ] http://localhost:8080/users/id <br/>
Request Header: ['Authorization': "Bearer eyJhbGciOi..."] <br/><br/>

Validations are performed using npm package Joi:<br/>
https://www.npmjs.com/package/joi <br/><br/>

MongoDB database instance is required at localhost: <br/>
'mongodb://localhost:27017/testing' <br/>

For db Schemas, npm package mongoose is used: <br/>
https://mongoosejs.com/

