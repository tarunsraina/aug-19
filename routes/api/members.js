
const express = require('express')
const router = express.Router()
const members = require('../../Members')


// get all members
router.get('/',(req,res)=>{
    res.json(members);
})

// get single memeber
router.get('/:id',(req,res)=>{
    console.log(req.params.id);

    const found = members.some(member => member.id == req.params.id);

    if(found){
    res.json(members.filter(member => member.id==req.params.id))
    }
    else{
        res.status(400).json({Message:"Not found!"})
    }
})

router.post('/',(req,res)=>{
    //res.send(req.body);
    console.log(req.body);
    const newMember = {
        id : req.body.id,
        name : req.body.name,
        isActive : req.body.isActive
    }

    /*
    if(!newMember.name || !newMember.isActive){
        return res.status(400).json({message:"please enter details"})
    }
    */

    members.push(newMember);
    res.redirect('/')
})

//delete

router.delete('/:id',(req,res)=>{
    const found = members.some((member =>member.id == req.params.id))

    if(found){
        res.json({
            msg : "member deleted!",
            members : members.filter(member=>member.id!=req.params.id)
        })
    }else{
        res.status(400).json({msg:"No member with this id"})
    }
})

module.exports = router