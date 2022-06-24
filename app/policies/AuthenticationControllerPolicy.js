const Joi = require('joi')


module.exports = {
    register (req,res,next){
        const schema = Joi.object({
            email:Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const {error, value} = schema.validate(req.body)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'Please provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'password must contain only lower, upper, and should be greater than 8 characters and less than 32 chars'
                    })    
                break
                default:
                    res.status(400).send({
                        error: 'Please provide valid info'
                    })
            }
        }
        else{
        next()
        }
    }
}
