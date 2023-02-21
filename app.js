const express=require('express');
const app =express();

const adminRoute=require('./routes/admin')
const userRoute=require('./routes/user')

app.use('/admin',adminRoute)
app.use('/user',userRoute)


app.listen(3000,()=>{
    console.log(" Listing the 3000 stared")
})