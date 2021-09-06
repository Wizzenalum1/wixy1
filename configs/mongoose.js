const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wixy-developmet', {useNewUrlParser: true}).
catch(err=> console.log(`*********MONGOOSE NOT CONNECTED************`, err));

const db = mongoose.connection
db.on('error',err=>console.error.bind(console," error related to DB ",err));

db.once('open',()=>{ console.log("DATABASE CONNECTION ESTABLISHED")})


module.exports = db;