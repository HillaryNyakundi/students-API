const express = require("express");
const studentRoutes = require('./src/students/routes');


const app = express();
const port = 3000;

app.use(express.json()); //a middleware that allows us to get and post json from our end points.

app.get('/', (req, res)=>{
       res.send("My name is Nyakundi");
});

app.use('/api/v1/students', studentRoutes); // this path will enable us to access the routes via the studentRoutes variable.

app.listen(port, ()=> console.log(`app is listening on port${port}`));
