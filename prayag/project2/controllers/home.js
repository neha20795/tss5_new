var express=require("express")
var routes=express.Router()



routes.get("/",function(req,res){
    var pagedata={title:"Home page", pagename:"home/index"}
    res.render("layout",pagedata)
})







module.exports=routes;