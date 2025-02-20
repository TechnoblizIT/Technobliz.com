const express = require('express')
const router=express.Router()
const nodemailer=require("nodemailer")

router.get('/', function(req, res){
    res.render("index")
})
router.post("/contactus", function(req, res){
    const {name,email,phone,message}=req.body
    console.log(name,email,phone,message)
    const transporter=nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'technoblizitservices@gmail.com',
            pass: process.env.MAILPASS
        }
    })
    const mailOptions={
        from: 'technoblizitservices@gmail.com',
        to: email,
        subject: 'Thank You for Contacting Technobliz IT Services & Solutions',
        text: `Dear ${name},

Thank you for reaching out to Technobliz IT Services & Solutions. We have received your inquiry and appreciate your interest in our services.

Our team will review your request and get back to you as soon as possible. If your inquiry is urgent, please feel free to contact us at [Your Contact Number] or reply to this email.

In the meantime, you can explore more about our services on our website: [Your Website URL].

We look forward to assisting you.

Best regards,
Technobliz IT Services & Solutions
info@technobliz.com 
www.technobliz.com`
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
            res.send("error")
        }else{
            console.log("Email sent: "+info.response)
            res.send("success")
        }
    })
    

})
module.exports= router 