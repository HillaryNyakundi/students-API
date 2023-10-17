const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
       res.send("My name is Nyakundi");
})

app.listen(port, ()=> console.log(`app is listening on port${port}`));
