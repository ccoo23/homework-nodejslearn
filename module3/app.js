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
    let resp = ''
    if (!rs) {
        resp = {
            code: 10002,
            message: '创建失败'
        }
    } else {
        resp = {
            code: 0,
            message: '创建成功'
        }
    }
    res.send(resp)
})

app.put('/user/update', async function(req, res){
    const { name, password, age, userid } = req.query
    console.log('RESSSSSSSSS', req.query)
    const rs = await User.updateUser({ name, password, age, userid })
    let resp = ''
    if (!rs) {
        resp = {
            code: 10003,
            message: '更新信息失败'
        }
    } else {
        resp = {
            code: 0,
            message: '更新信息成功'
        }
    }
    res.send(resp)
})

app.delete('/user/delete', async function(req, res){
    const { userid } = req.query
    const rs = await User.deleteUser(userid)
    let resp = ''
    if (!rs) {
        resp = {
            code: 10004,
            message: '删除失败'
        }
    } else {
        resp = {
            code: 0,
            message: '删除成功'
        }
    }
    res.send(resp)
})


app.listen(3001,function(){   //监听3001端口
    console.log("Server running at 3001 port");
})