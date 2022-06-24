const db = require("../models");
const User = db.users;
const jwt = require('jsonwebtoken')
const config = require('../config/db.config')
module.exports = {
    async register(req, res) {
       try{
        const user =  await User.create(req.body)
        const output  = user.toJSON();
        res.send({
            user: output
        })
       }
       catch(err){
           res.status(400).send({
               error: 'Email already exists...'
           })
           return
       }
    },
    async login(req, res) {
        try{
            const {email, password} = req.body
            const user =  await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                res.status(403).send({
                    error: 'This Email doesnt exist...'
                })
                return
            }
            const pass = password === user.password
            console.log(pass)
            if (!pass)
            {
                res.status(403).send({
                    error: 'Login Information is not correct...'
                })
                return
            }
            const output = user.toJSON()
            res.send({
               user: output
           })
        }
           catch(err){
            console.log(err)
               res.status(500).send({
                   
                   error: 'Something went wrong'
               })
               return
           }
    }
}
