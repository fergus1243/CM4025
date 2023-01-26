var path=require('path');
var express =require('express');
var app=express();

var option = {
    index:"myWebPage.html"
};

var dir = path.join(__dirname, '../unstyledPriceCalculator')

app.use(express.static(dir, option));


app.listen(8080, function(){
    console.log('listening on localhost:8080');
});