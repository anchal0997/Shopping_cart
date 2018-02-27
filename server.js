var express=require('express');
var app=express();
var db=require('./db.js');
var body_parser=require('body-parser');


app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

app.listen('5000',function () {
    console.log('server listening to 5000');
    db.connect();
})
app.use('/',express.static('shopping'));

app.post('/login',function(req,res) {
    console.log(req.body);
    //res.send(dataToBSend)
    var Data;


    console.log(Data);
    if(db.select(req.body.username,req.body.password)){
        console.log("X"+db.x);
        res.send(db.x);
    }


    /*if(Data=db.select(req.body.username,req.body.password))
    {
        res.send(Data);
    }*/

});
app.post('/display',function(req,res) {
    //console.log(req.body);
    //res.send(dataToBSend)
    var Data;

    console.log("HELLO");
    console.log(req.body.username);
    db.select1(req.body.username,function (Data) {
        console.log("yuyu");
        res.send(Data);
    })

    /*if(Data=db.select(req.body.username,req.body.password))
    {
        res.send(Data);
    }*/

});

app.post('/insert',function(req,res) {
    console.log("ll");
    console.log(req.body.id);
    db.insert1(req.body.id.toString().split('_')[1],function () {
        console.log("DONE");
    })
    res.send("");
    //res.send(dataToBSend)
    // var Data;
    // Data=db.insert(req.body.username,req.body.password);
    // console.log("HAH");
    // console.log(Data);
    // res.send(Data);
});


app.post('/signin',function(req,res) {
    console.log(req.body);
    //res.send(dataToBSend)
    var Data;
    Data=db.insert(req.body.username,req.body.password);
    console.log("HAH");
    console.log(Data);
    res.send(Data);
});
