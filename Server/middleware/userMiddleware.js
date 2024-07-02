const jwt=require('jsonwebtoken')
require('dotenv').config()

let userAuth=async(req,res,next)=>{
    const token=req.cookies.userMiddleware;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){
                next()
            }
            else{
                res.redirect('/')
            }
        });
        
    }
    else{
        next()
    }
}
// const middleWare=async(req,res,next)=>{
//     if(req.cookies.userMiddleware){
//         const token=req.cookies.userMiddleware;
//         jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
//             if(err){
//                 return res.redirect('/')
//             }else{
//                 req.user=decodedToken
//                 next()
//             }
//         })
//     }else{
//         next()
//     }
// }


module.exports={userAuth}