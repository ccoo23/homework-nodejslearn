import express from 'express'
import User from '../models/user.js'

const app = new express()

app.get('/', function(req, res){
    res.send('This is express server 1'); //服务器响应请求
})

app.get('/get', async function(req, res){
    const [rs] = await User.getUserById()
    console.log('RSSSSSSSSSSS', rs)
    let arr = []
    rs.forEach(e => {
        arr.push(e.id)
    })
    res.send('get user info' + arr)
})

app.listen(3001,function(){   //监听3001端口
    console.log("Server running at 3001 port");
})