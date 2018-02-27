var username = $('#usr').val();
var password = $('#pwd').val();
var mainData="";

var items=["balloon","Burger","Cold Drink","Laptop","Shirt","Tiffin","Water Bottle","Purse","Box","Shoes","locket","Oreo Biscuits"];

var a=false;

$('#login').click(function(){
     username = $('#usr').val();
     password = $('#pwd').val();

    var obj1 = {
        username : username,
        password : password
    };
    console.log(obj1);
    if(obj1!=undefined) {
        $.post("/login" , obj1 , function (data, status) {
            console.log(data); //undefined..kyu??
            if (!data&&status) {
                window.location.href = "shopping.html";
                console.log("SJS")
            }
            else {
                console.log("SJSaa");
                $('#error').text("Either the password or username isn't correct");
            }
        });
    }
});

$('#cart').click(function () {
    console.log("jd"+a);
    display(username);
    if(a===false)
    {
        $('#list').css('display', 'block');
        a=true;
    }
    else{
        $('#list').css('display', 'none');
        a=false;
    }
})


$('#signUp').click(function () {
    window.location.href = "signUp.html";
})


$('#signIn').click(function () {
    username = $('#usr1').val();
    password = $('#pwd1').val();

    var obj1 = {
        username : username,
        password : password
    };
    console.log(obj1);
    if(obj1!=undefined) {
        $.post("/signin" , obj1 , function (data, status) {
            //console.log(obj);
            if (!data &&status) {
                window.location.href = "shopping.html";
                console.log("SJS")
            }
            else {
                console.log("SJSaa");
                $('#error1').text("Username already exists");
            }
        });
    }


})

$('.items').click(function () {
    var id = $(this).attr('id');
    var obj={
        id: id
    }
    console.log("KIKI");
    $.post("/insert" ,obj, function (data, status) {
        //console.log(obj);
        mainData+='<li class="list-group-item" id=' + id + '>'+ id.toString().split('_')[0]+'</li>'
        $('#list').html(mainData);
    });

})

function display(username) {
    var user={
        username:username
    }
    $.post("/display" , user , function (data, status) {
        //console.log(obj);
        mainData="";
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
            mainData+='<li class="list-group-item" id=' + i + '>'+ items[parseInt(data[i].item_code)-1]+'</li>';
        }
        $('#list').html(mainData);
    });


}