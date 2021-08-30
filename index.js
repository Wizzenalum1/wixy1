const express = require('express');
const app = express();
const router = express.Router();




const port = 8000;


app.get('/',(req,res)=>{
    let context = {title:"home"};
    return res.render('home',context);
})

// set the path to static files
app.use(express.static('assets'));
app.use('/static',express.static('assets'))

// set the view engine to render the files
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err)console.log(`error in runnig the server`,err);
    console.log(`server is runnig at PORT ${port}`)
})
