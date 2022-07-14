# restful-api-nodejs-typescript-express
Build RESTful API with Node.js best practices + Typescript, Express &amp; express middlewares, MongoDB, JWT

Clone the repo <br/>
Open the folder in Visual Studio Code IDE <br/>
Execute Terminal Command for Typescript Compiler :  restapi % tsc <br/> 
A distribution folder will be created with generated javascript files: "dist" <br/>

Run the Node.js http Server:   restapi % node dist/app.js <br/><br/>

From Postman following APIs are accessible:<br/>

Create User :    [ POST ] http://localhost:8080/users <br/>
Get All Users :    [ GET ] http://localhost:8080/users <br/><br/>


Validations are performed using npm package Joi:<br/>
https://www.npmjs.com/package/joi <br/><br/>

MongoDB database instance is required at localhost: <br/>
'mongodb://localhost:27017/testing' <br/>

For db Schemas, npm package mongoose is used: <br\>
https://mongoosejs.com/

