/* eslint-env es6 */
/* eslint-disable no-console */

const express = require('express');
const app = express();
let listOfpics = [];
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');
app.use(express.static('public'));
fs.watch('./public/images', (event, filename) => {
    console.log(`event type is: ${event} ${filename}`);
    
})
const testFolder = './public/images';

function ReadFileName() {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            listOfpics.push(file);
        });
        console.log(listOfpics)
    });
}



app.get('/', function (req, res) {
    res.redirect("http://localhost:5050/mywebsite.html")
});
app.get('/images', function (req, res) {
    res.redirect("http://localhost:5050/allpics.html")

});
app.get('/db', function (req, res) {
    res.redirect("http://localhost:5050/Quiz_System.html")

});
app.get('/load', function (req, res) {
    listOfpics=[]
    ReadFileName()
    setTimeout(()=>res.send(listOfpics),100)
    

});
app.post('/post',urlencodedParser, function (req, res) {
    console.log(req.body.name)
    res.send(`HI ${req.body.name}`)
});
app.post('/post2',urlencodedParser, function (req, res) {
    let ans=req.body.ans;
    
    if(ans==1){res.send(`你選的答案為{${req.body.ans}}正確`);}
    else {res.send(`你選的答案為{${req.body.ans}}錯誤`);}
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5050, function () {
    console.log('Node server is running..');
});
