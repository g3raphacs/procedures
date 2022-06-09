var mysql=require('mysql');

var con=mysql.createConnection({
    host:'192.168.1.206',
    port:'3307',
    user:'activcomdev',
    password:'Eurydice100403',
    database:'bdc'
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });