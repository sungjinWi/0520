const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();

const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post("/auth/token",(req,res)=>{
    const {userid, userpw} =  req.body
    // db요청을 해서 값이 있을때는 토큰 반환, 없으면 에러

    let result = {result:false, msg:"아이디 패스워드가 일치하지 않습니다"}

    if( userid !== "sungjin" || userpw !== "1234") {
        return res.status(401).json(result)
    }

    const payload = {
        userid:"sungjin"
    }

    const secret= "sieun"
    const token = jwt.sign(payload, secret, {
        algorithm:"HS256"
    })

    result = {result:true, token, msg:null}
    res.status(200).json(result)
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJzdW5namluIiwiaWF0IjoxNjUzMDMzNTA0fQ.mISdUyAiZQCGS-QXnaIpCYGQ8nWzwOTCBCInQEqxPNI


app.post('/auth/verify',(req,res)=>{
    const { token } = req.body
    let response = {result:false, data:null, msg:null}

    // 1. token
    // 2. salt
    try{
        const result = jwt.verify(token, "sieun") // payload 복호화한 내용들
        console.log(result)

        response.result = true
        response.data = result
        res.status(200).json(response)
    }
    catch(e) {
        response.msg = "토큰이 변조되었습니다"
        res.status(401).json(response)
        //error는 500으로 보내는 것이 좋다
    }
})


// http://localhost:3500/user/me/sungjin
app.get("/user/me/:userid",(req,res)=>{
    const {userid} =  req.params

    const response = {
        userid,
        name:"sieun"
    }
    res.status(200).json(response)
})

app.listen(3500,()=>console.log("sever listening to localhost:3500"))