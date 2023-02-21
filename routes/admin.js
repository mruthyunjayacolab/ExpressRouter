const express=require('express');
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('admin get')
})

router.post('/',(req,res)=>{

res.send('admin post');
})
router.put('/',(req,res)=>{

    res.send('admin put')
})
router.delete('/',(req,res)=>{

    res.send('admin Delted')
})

module.exports=router;