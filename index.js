const express = require('express');
const app = express();
const router = express.Router();




const port = 8000;

app.get('/',function(req,res){res.send("heloo")})


app.listen(port,function(err){
    if(err)console.log(`error in runnig the server`,err);
    console.log(`server is runnig at PORT ${port}`)
})
