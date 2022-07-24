const express =require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port= process.env.PORT || 3000;
//public static path
const static_path=(path.join(__dirname,"../public"));
const template_path=(path.join(__dirname,"../templates/views"));
const partial_path=(path.join(__dirname,"../templates/partials"));
app.set('view engine','hbs');
// change view into templates
app.set('views',template_path);
hbs.registerPartials(partial_path);


app.use(express.static(static_path));

app.get("/",(rq,res)=>{
    res.render('index');


})
app.get("/about",(rq,res)=>{
    res.render('about');


})
app.get("/weather",(rq,res)=>{
    res.render('weather');


})
app.get("*",(rq,res)=>{
    res.render('404error',{
        errMsg: "oops!page are not found"
    })


})
app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})
