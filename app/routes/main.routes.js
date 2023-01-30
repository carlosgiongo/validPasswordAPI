const { body } = require('express-validator')
const { graphqlHTTP } = require('express-graphql');
const passVerifyUtils = require('../functions/pass.utils')

module.exports = function(app) {
    app.post('/verify', (req, res) => {
        try{
            res.status(200).json(passVerifyUtils.verify(req.body.password, req.body.rules))
        } catch (err) {
            console.log("[ERRO]:", err.message)
            
            if(err.message.includes('passUtils')){
                return res.status(400).send({
                    message: `Regra inválida (${err.message.split(".")[1].split(" ")[0]}). Valide as regras enviados no campo 'rules'.`
                })
            }

            return res.status(500).send({
                message: "Ocorreu um erro ao verificar a senha."
            })
        }        
    })

    app.post('/graphql', graphqlHTTP({
        schema: require('../graphql/schemas/passVerify.schema').schema,
        rootValue: require('../graphql/schemas/passVerify.schema').root,
        graphiql: true
    }))
}