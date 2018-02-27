var mysql=require('mysql');
//MySQL = easiest structured DB
var x;
var config={
    host:'localhost',
    user:'anchal',
    password:'1234',
    database:'shopping'
};
var connection=mysql.createConnection(config);

function createConnection() {
    connection.connect();
}
function select(id,pwd) {
    //var Data;
    connection.query('select * from login where username="'+id+'" and password="'+pwd+'"',function (err,data) {
        console.log("js"+data);
        if(data===undefined||data=="")
        {
            err="xm";
        }
        x=JSON.stringify(err);


        console.log("DATA"+JSON.stringify(err));

       // return JSON.stringify(err);
    });
    return 1;
}

function insert1(id,callback) {
    connection.query('insert into shoppingCart(username,item_code) values("anchal",'+id+')',function (err,data) {
        if(err)
        {
            console.log(err.toString());
        }
        callback();
    })
}

function select1(username,callback) {
    var Data;
    connection.query('select * from shoppingCart',function (err,data) {
        console.log("js"+data);
        Data=data;
        console.log("USERNAME"+username);
        callback(data);

        // return JSON.stringify(err);
    })
    // {
    //     console.log("LAL");
    //     return Data;
    // }
    // else
    // {
    //     console.log("LALA");
    //     return Data;
    // }
}

function insert(id,pwd) {
    var Data;
    connection.query('insert into login (username,password) values ("'+id+'" , "'+pwd+'" )',function (err,data) {
        Data=err;
        console.log("DATA1"+err);
    });
    return Data;
}


module.exports={
    connect:createConnection,
    select:select,
    insert: insert,
    select1:select1,
    insert1:insert1
}