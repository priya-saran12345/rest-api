const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
  try{
  const token=req.headers.authorization.split(" ")[1];
console.log(token);

const verify= jwt.verify(token,'this is demo user api');
if(verify)
{
next();
}
  else{
    return res.this.status(401).json({
      msg:'not a valid user'
    })
  }
}

catch(err){
   return res.status(500).json({
    msg:'not find the user'
  })
}

}









