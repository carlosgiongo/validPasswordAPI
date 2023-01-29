const { body } = require('express-validator')
const passUtils = require('../functions/pass.utils')

module.exports = function(app) {
    app.post('/verify', (req, res) => {
        try{
            const password = req.body.password
            const rules = req.body.rules || []
            const errors = []

            if(rules.length > 0) {
                for (let rule of rules) {
                    eval(`if(!passUtils.${rule.rule}('${password}', ${rule.value})) errors.push('${rule.rule}')`)
                }
            }

            return res.status(200).send({
                verify: errors.length > 0 ? false : true,
                noMatch: errors
            })

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
}