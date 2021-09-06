const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
const db = require('./configs/mongoose')

// settin the url encoder
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log('VISITED TO  ',req.url);
    next();
})

// seting the ejas layout
app.use(expressLayouts);
app.set('layout extractScripts',true);
app.set('layout extractStyles',true);

// set the path to static files
app.use(express.static('assets'));
// set the view engine to render the files
app.set('view engine','ejs');
app.set('views','./views');



// here routes are  taken place
app.use('/',require('./routes'))


app.listen(port,function(err){
    if(err)console.log(`error in runnig the server`,err);
    console.log(`server is runnig at PORT ${port}`)
})
