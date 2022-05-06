const express= require('express');
const app = express();
const handlebars= require('express-handlebars');
const { request } = require('http');

app.listen(3000, console.log("Servidor activo http://localhost:3000"));

app.use('bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist/`))
app.use('jquery', express.static(`${__dirname}/node_modules/jquery/dist/`))

app.set('view engine','handlebars');

app.engine(
    "handlebars",
    handlebars.engine({
        layoutsDir: `${__dirname}/views`,
        partialsDir: `${__dirname}/views/partials`
    })
)

app.get('/',(request, response)=>{
    response.render('inicio',)
})