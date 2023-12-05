import { AppError } from "./appError.js";


function handleDuplucateError(err){
    return new AppError(JSON.stringify({error: 'duplicate fields'}),409)
}

function handleTypeError(err){
    return new AppError(JSON.stringify({error: err.message}),400)
}

function handleUnexptionalError(){
    return new AppError(JSON.stringify({error: "Bad Request"}),400)
}

function handleValidationError(){
    return new AppError(JSON.stringify({error: "validation error"}),400)
}

function handleBsonError(){
    return new AppError(JSON.stringify({error: "send valid input"}),400)
}

function handlekeyNotfound(){
    return new AppError(JSON.stringify({error: "invalid key"}),400)
}

export const errorController = (err,req,res,next) => {


    let error = {...err,message: err.message}
    console.log( error,'Error');
    if(err.code === 11000){
        error = handleDuplucateError(err);
    }
    else if(err instanceof TypeError){
        error = handleTypeError(err)
    }

    else if (error?.errors?.name == "ValidatorError"){
        error = handleValidationError();
    }
   else if(error?.reason?.name == "BSONError"){
    error = handleBsonError();
   }
   else if(error?.Code == "NoSuchKey"){
    error = handlekeyNotfound()
    }
    else if(!error?.message.includes('Invalid path')){
        error = handleUnexptionalError(err)
    }

   // console.log(error.message,'Error Occured');
    const { status, isOperational} = error
    
    res.status(error.statusCode).json({status,message: JSON.parse(error.message)})
}