require('dotenv').config()
var process = require('process')
const { app } = require('./config/express.config.js');

require('./app/routes/main.routes')(app);

//Inicia o servidor
app.listen(process.env.PORT || 3030, async () => {
    console.log(`Servidor escutando na porta ${process.env.PORT || 3030}...`)
});
