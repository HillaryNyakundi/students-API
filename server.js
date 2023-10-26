const express = require("express");
const cors = require('cors'); // import the cors middleware
const app = express();
const port = 3000;

app.use(cors());// enable cors for all the routes, controls which domains are allowed to access your api, ensuring security while providing access to authorized clients
app.use(express.json()); //a middleware that allows us to get and post json from our end points.

const studentRoutes = require('./src/students/routes')
const swagger = require('./src/students/swagger'); // Import the Swagger code


app.get('/', (req, res) => {
       res.send("My name is Nyakundi");
});


app.use('/api-docs', swagger.serveSwagger, swagger.setupSwagger);
app.use('/api/v1/students', studentRoutes); // this path will enable us to access the routes via the studentRoutes variable.

app.listen(port, ()=> console.log(`app is listening on port${port}`));
