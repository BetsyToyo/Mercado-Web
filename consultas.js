const {Pool} = require('pg')

const pool = new Pool({
    user:"postgres",
    password:"leoney31",
    database:"mercado_web",
    host:"localhost",
    port: 5432
    
})

const productos= async()=>{
    const sql= 'SELECT * FROM productos'
    try {
        const { rows }= await pool.query(sql)
        return rows
    } catch (error) {
        return {mensaje: error.message}
    }
}

module.exports= {productos}