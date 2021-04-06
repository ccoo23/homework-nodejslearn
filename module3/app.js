import express from 'express'

const app = new express()

app.get('/', function(req, res){
    res.send('This is express server 1'); //服务器响应请求
})

app.listen(3001,function(){   //监听3000端口
    console.log("Server running at 3001 port");
})