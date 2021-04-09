import express from 'express'
import User from '../models/user.js'
import { v4 as uuidv4 } from 'uuid'
import bodyParser from 'body-parser'

const app = new express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    res.send('This is express server 1'); //服务器响应请求
})

app.get('/user/getById', async function(req, res){
    const { id } = req.query
    const [rs] = await User.getUserById(id)
    console.log(rs)
    let resp = ''
    if (!rs[0]) {
        resp = {
            code: 10001,
            msg: '未查询到结果'
        }
    } else {
        resp = rs[0]
    }
    res.send(resp)
})

app.post('/user/create', async function(req, res){
    const { name, password, age } = req.body
    console.log('RESSSSSSSSS', req.body)
    const userid = uuidv4()
    const rs = await User.createUser({ name, password, age, userid })
    res.send(rs)
})

app.listen(3001,function(){   //监听3001端口
    console.log("Server running at 3001 port");
})