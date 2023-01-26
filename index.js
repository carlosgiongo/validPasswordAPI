require('dotenv').config()
var process = require('process')
const { app } = require('./config/express.config.js');

//Importa as rotas de API
// require('./app/routes/auth.routes')(app);
// require('./app/routes/public.routes')(app);
// require('./app/routes/main.routes')(app);
// require('./app/routes/restaurantes.routes')(app);

//Inicia o servidor
app.listen(process.env.PORT, async () => {
    console.log(`Servidor escutando na porta ${process.env.PORT || 3030}...`)
});
