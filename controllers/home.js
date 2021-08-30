module.exports.home= function(req,res){
    context = {
        title:"home"
    };
    res.render('home',context);
}