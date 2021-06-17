const { response } = require('express');
const express = require('express')
const router = express.Router();

let helpers = require('../helpers/adminHelpers')

//Get all students/////////
router.get('/',(req,res)=>{
    helpers.getStudentsDetailes().then((students)=>{
        res.json(students)
    })
})
/////////////////End///////




//////////////////Add a new student////
router.post('/add-student',(req,res)=>{
    //console.log(req.body);
    //res.json(req.body)
    helpers.createStudent(req.body).then(()=>{
        res.json({status:"Done"})
    })
})
/////////////End///////////////////////




////////////////Specific Student///////////////
router.get('/specific-student/:id',(req,res)=>{
   helpers.getSpecificStudent(req.params.id).then((response)=>{
       res.json(response)
   })

})
////////////////End///////////////////////////



////////////Update Student////////////////////
router.post('/update-student/:id',(req,res)=>{
    console.log(req.body,req.params.id);
    helpers.updateStudent(req.params.id,req.body).then(()=>{
        res.json({msg:"updated"})
    })
})
///////////End////////////////////////////////



/////////////////Delete Student////////////////
router.get('/delete-student/:id',(req,res)=>{
    helpers.deleteStudent(req.params.id).then(()=>{
        res.json({message:true})
    })
})
///////////////End/////////////////////////////


module.exports = router;