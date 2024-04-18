const express = require("express");
const app = express();
app.use(express.json());
const { join, dirname } = require('path'); 

const port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log("Esperando solicitudes ", port);
});

app.get('/',(req,res)=>{
  res.sendFile(join(__dirname,'public/index.html'));
});