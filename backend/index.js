var path=require('path');
var express =require('express');
var app=express();

const{MongoClient} = require("mongodb");
const url = "mongodb://127.00.1:27017";

const client = new MongoClient(url);
async function run(){
    try{
        var dbo = client.db("mydb");
        var myobj = {quotename: n, salary:s , days: d};
        await dbo.collection("quotes").insertOne(myobj, function(err, res){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("1 quote inserted");
        });
    }finally{
        await client.close();
    }
}
run().catch(console.dir);
var option = {
    index:"myWebPage.html"
};

var dir = path.join(__dirname, '../unstyledPriceCalculator')

app.use(express.static(dir, option));


app.listen(8080, function(){
    console.log('listening on localhost:8080');
});