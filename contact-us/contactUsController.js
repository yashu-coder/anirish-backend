
import { catchAsync } from '../utils/catchAsync.js'
import contactSchema from './contactusSchema.js'
export const sendContactDetails = catchAsync((req,res)=>{
    new contactSchema(req.body).save().then((data)=>{
        console.log(data,'data');
        return res.json({success: true})
    }).catch((err)=>{
        console.log(err,'err');
    })
    
})

export const getContactqueries = catchAsync((req,res)=>{
    contactSchema.find().then((data)=>{
        return res.json({success: true, data})
    })
})