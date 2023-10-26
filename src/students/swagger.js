const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
       definition: {
              openapi: '3.1.0',
              info: {
                     title: 'Students API Actions documentation',
                     version: '1.0.0',
                     description: 'This is a crud API made with express and documented with swagger',
              },
              servers: [
                     {
                            url: 'http://localhost:3000/',
                            description: 'Development server'
                     },
              ],
       },
       components: {
              schemas: {
                     Students: {
                            type: 'object',
                            required: ['name', 'email','age', 'dob'],
                            properties: {
                                   name: {
                                          type: 'string',
                                          description: 'This is the name of the student'
                                   },
                                   email: {
                                          type: 'string',
                                          description: 'This is the email of the student'
                                   },
                                   age: {
                                          type: 'integer',
                                          description: 'This is the age of the student'
                                   },
                                   dob: {
                                          type: 'string',
                                          format: 'date',
                                          description: 'This is the date of birth of the student'
                                   },
                            },
                            example: {
                                   name: "John Doe",
                                   email: "johndoe@gmail.com",
                                   age: "20",
                                   dob: "2000-01-01"
                            },
                     },
              },
       },
       apis: ['./src/students/routes.js'], // Update with the correct path to your routes file
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
       serveSwagger: swaggerUi.serve,
       setupSwagger: swaggerUi.setup(swaggerSpec),
};
