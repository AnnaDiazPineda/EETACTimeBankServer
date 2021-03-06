const Joi = require ('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                let error = result.error.message;
                return res.status(400).json( { 'ValidationError' : error } );
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;   
            next();

            // req.value.body instead req.body
        }
    },

    schemas: {
        signUp: Joi.object().keys({
            mail: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            username: Joi.string().alphanum().min(3).max(30).required(),
            name: Joi.string().alphanum().min(3).max(30).required(),
        }),
        signIn: Joi.object().keys({
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            username: Joi.string().alphanum().min(3).max(30).required(),
        })
    }
}