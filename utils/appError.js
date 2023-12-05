
class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        const code = String(statusCode)
        this.status = code.startsWith('4') ? 'fail': 'error';
        this.isOperational = true;
        Error.captureStackTrace(this,this.constructor)
    }
}

export {AppError};