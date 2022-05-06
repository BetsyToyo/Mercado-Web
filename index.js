const express= require('express');
const app = express();
const handlebars= require('express-handlebars');
const {productos}= require('./consultas')

app.listen(3000, console.log("Servidor activo http://localhost:3000"));

app.use('/bootstrap',express.static(`${__dirname}/node_modules/bootstrap/dist/`));
app.use('/jquery',express.static(`${__dirname}/node_modules/jquery/dist/`));

app.set('view engine','handlebars');

app.engine(
    "handlebars",
    handlebars.engine({
        layoutsDir: `${__dirname}/views`,
        partialsDir: `${__dirname}/views/partials`
    })
)

let datosProductos;

const datos= ()=>{
    return new Promise((resolve, reject)=>{
    productos().then((respuesta)=>{
        datosProductos= respuesta
        console.log(datosProductos)
        resolve(respuesta)
    }    
    ).catch((error)=>{
        reject(error)
    })
}) }
datos()
    
app.get('/', async (request, response)=>{   
    response.render('inicio',{
        layout: "inicio"
    })
})