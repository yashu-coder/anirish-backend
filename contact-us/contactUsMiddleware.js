import validator from "validator";
export function checkUserData(req,res,next){
    const data = req.body;
    if(data?.name && data?.email && data?.contact && data?.message){
        if(validator.isEmail(data.email)){
            next();
        }
    }
    else{
        res.json({success: false, message: 'Please pass the fields'})
    }
}