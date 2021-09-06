const userModel = require('../models/user');

// this is action to show the sign up page.
module.exports.signup = function(req, res){
    context= {
        title:'signup',
    }
    res.render('user/signup',context);
}
// handle user creation
module.exports.createUser = function(req,res){
    context = {
        title:'creting user'
    }
    if(req.body.password!== req.body.confirm_password){
        console.log("password don't match");
        return res.redirect("back");
    }
    // checking is this email is already available or not
    userModel.findOne({'email':req.body.email},function(err, user){
        if(err){console.log("there is error finding  in create");return}
        if(user){ console.log("user alredy available"); return res.redirect('back');}
        else{

            const user = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            };
            userModel.create(user,function(err,user){
                if(err){console.log("error ocur int user creation"); res.redirect('back');}
                console.log(`created USER : ${user}`);
                return res.redirect('/user/signin');
            })
        }
    });
    
}