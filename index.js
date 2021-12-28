const express=require('express')
require('dotenv').config()
const path=require('path')

const bodyParser=require('body-parser')

const app=express()
const compiler=require('./middleware/compiler')
const PORT= process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.json({message:"home page"})
 
// })
app.post('/compile',async (req,res)=>{
    const {code,language,input}=req.body;
    console.log(input)
   const output= await compiler(code,language,input);
   res.json(output)
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('my-app/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'my-app','build','index.html'))
    })
}else{

}
app.listen(PORT,()=>{
    console.log("server running on PORT "+PORT)
})