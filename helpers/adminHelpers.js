const db = require('../config/connection')
let collection = require('../config/collections')
var objectId = require('mongodb').ObjectID;

module.exports={
    createStudent:(student)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STUDENTS).insertOne(student).then(()=>{
                resolve()
            })
        })
    },

    getStudentsDetailes:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STUDENTS).find().toArray().then((data)=>{
                resolve(data)
            })
        })
    },

    getSpecificStudent:(studentId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STUDENTS).findOne({_id:objectId(studentId)}).then((data)=>{
                resolve(data)
            })
        })
    },

    updateStudent:(studentId,StudentDetailes)=>{
        return new Promise((resolve,reject)=>{

            db.get().collection(collection.STUDENTS).replaceOne({_id:objectId(studentId)},StudentDetailes).then(()=>resolve())

        })
    },

    deleteStudent:(studentId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STUDENTS).deleteOne({_id:objectId(studentId)}).then(()=>{
                resolve()
            })
        })
    }
}