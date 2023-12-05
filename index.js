import  express  from "express";
import mongoose from "mongoose";
import contactRouter from './contact-us/contactUs.js'
import { errorController } from "./utils/errorController.js";
let app = express();

app.use(express.json());

app.use('',contactRouter);
app.all('*',(req,res,next)=> next(new AppError(JSON.stringify({error: `Invalid path ${req.originalUrl}`}),404)))
app.use(errorController);

mongoose.connect("mongodb+srv://Henrick18:wDBl2h03Z8kAUfbW@cluster0.kwgzq3u.mongodb.net/").then(()=>{
    console.log("DateBase connected Successfully");
    app.listen(8080,()=>{
        console.log('listning to port 8080');
    });
}).catch((err)=>{
    console.log('err in connecting Db',err);
});