// Server Congif
const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const w_firebase = require('./firebase/writeData');
const r_firebase = require('./firebase/readData');
// Middleware & Static Files 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
// EJS Templating Engine 
app.set('view engine','ejs');


//Routes
app.get('/',(req,res)=>{
  
    res.render("dashboard");
   
});
//Sending Data to Firebase DataBase 
app.post('/',(req,res)=>{
     w_firebase.saveData(req,(err,data)=>{
        res.redirect('/');
     });
     
});


app.get('/activity',(req,res)=>{
    res.render('activity');   
});
//Fetching Data From Firebase DataBase
app.get('/timesheet',(req,res)=>{
    r_firebase.readData((data)=>{
        var datum = [];
        for(var attributename in data){

            var td = {
                'projectId':data[attributename]['projectId'],
                'projectName':attributename,
                'teamName':data[attributename]['teamName'],
                'teamLead':data[attributename]['teamLead'],
                'projectManager':data[attributename]['projectManager']
                       }
        datum.push(td);

            console.log(attributename+": "+data[attributename]['projectId']);
            console.log(attributename.projectId);
            console.log(attributename.teamName);
        }
        // console.log(data);
      res.render('timesheet',{data:datum}); 
    });
     
})

app.get('/todo',(req,res)=>{
    res.render('todo');   
});

app.get('/invoices',(req,res)=>{
    res.render('invoices');   
});
 app.get('/projects',(req,res)=>{
     res.render('projects');
 });

 app.get('/help',(req,res)=>{
     res.render('help');
 });
 app.get('/download',(req,res)=>{
     res.render('download');
 });


 app.get('*',(req,res)=>
 {
    res.render('404');
 });

 app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});