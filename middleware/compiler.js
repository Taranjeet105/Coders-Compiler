const fetch=require('node-fetch')
async function submitCode(sourceCode,language,input){
    //  let language="python2";
    //  let sourceCode=`print("hello")`
try{
   let data={
       "clientId":"930daeeb75f6d7816902d129b05a910b",
       "clientSecret":"b5fe127f09f3bf8ae282abef58e0b51c289cafce6b945e16fa4d4f774e255223",
       "script":sourceCode,
       "language":language,
       "versionIndex":"0",
       "stdin":input
   };
   
   let url="https://api.jdoodle.com/v1/execute"
let res= await fetch(url,{
       method:"post",
       body:JSON.stringify(data),
       headers:{
           'Content-Type':'application/json'
       }
   })
   let result=await res.json();
   console.log(result);
  
//    console.log(output)
   return  await Promise.resolve(result);
}catch(e){
   console.log(e);
   console.log("error in compliling")
   return  await Promise.resolve(e);
}


 }

//  submitCode()
module.exports=submitCode