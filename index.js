const express=require('express')
require('dotenv').config()
const path=require('path')
// const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
// const mongoose=require('mongoose')
// const {mongoUrl}=require('./config/keys')
// const cors = require('cors');
// const multer=require('multer')
const app=express()
const compiler=require('./middleware/compiler')
const { promise } = require('bcrypt/promises')
const PORT= process.env.PORT || 5000
// app.use(cookieParser())
// require('./models/User')  // routes will come after this, because we are using models in routes
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.set('view engine','ejs')

// mongoose.connect(mongoUrl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true

// }).then(()=>{
//     console.log("succes")
// }).catch((e)=>{
//     console.log(e)
// })
app.get('/',(req,res)=>{
    res.json({message:"home page"})
 
})
app.post('/compile',async (req,res)=>{
    const {code,language,input}=req.body;
    console.log(input)
   const output= await compiler(code,language,input);
   res.json(output)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('my-app/build'))
    app.get("*",(req,res)=>{
        res.sendFile(__dirname,'my-app','build','index.html')
    })
}else{

}
app.listen(PORT,()=>{
    console.log("server running on PORT "+PORT)
})