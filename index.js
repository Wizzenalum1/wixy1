const express = require('express');
const app = express();
const port = 8000;

const router = express.Router();
const expressLayouts = require('express-ejs-layouts');


// set the path to static files
app.use(express.static('assets'));
// set the view engine to render the files
app.set('view engine','ejs');
app.set('views','./views');
// seting the ejas layout
app.use(expressLayouts);
app.set('layout extractScripts',true);
app.set('layout extractStyles',true);




// here routes are  taken place
app.use('/',require('./routes'))
app.listen(port,function(err){
    if(err)console.log(`error in runnig the server`,err);
    console.log(`server is runnig at PORT ${port}`)
})
