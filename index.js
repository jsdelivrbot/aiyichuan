const express = require('express');
const path = require('path');
const app = new express();
const PORT = process.env.PORT || 5000;
app.use(express.static(__dirname + '/dist'));
app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.get('/api/hot.json',function(){
    res.sendFile('api/hot.json')
});
app.get('/api/cheap.json',function(){
    res.sendFile('api/cheap.json')
});
app.get('/api/newones.json',function(){
    res.sendFile('api/newones.json')
});
app.get('/api/others.json',function(){
    res.sendFile('api/others.json')
});
app.get('/api/more.json',function(){
    res.sendFile('api/more.json')
});

app.listen(PORT,function(){
    console.log('connected!');
});

