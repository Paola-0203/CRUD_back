import { pool } from '../routes/db.js'

const getUsuario = async (req, res) => {

    try {
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
        res.send(usuario.rows)
    } catch (error) {
        console.log(error);
    }
};
const saveUsuario = async (req, res) => {
    try {
        const { nombre , password , email } = req.body;
        const usuario = await pool.query('INSERT INTO USUARIO(nombre, password, activo, email) VALUES ($1, $2, TRUE, $3)', [nombre, password,  email]);
        res.send(usuario.rows)
    } catch (error) {
        console.log(error);
    }
};
const updateUsuario = async (req, res) => {
    try{
    console.log("Datos" + req.params)
    const {nombre, password, activo, email} =  req.body;
    const usuario = await pool.query('UPDATE USUARIO SET nombre=$1, password=$2, activo=$3, email=$4 WHERE ID = $5' , [nombre, password, activo ,email, id]);
    res.send(usuario.rows)
    }catch (error){
        console.log(error)    
    }

};
const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await pool.query('DELETE FROM USUARIO WHERE ID = $1',[id]);
        res.status(200).json({ message: 'Borrado Exitosamente' })
    } catch (error) {
        console.log(error);
    }
};
const listUsuario = async (req, res) => {
    try {
        const lista = await pool.query('SELECT * FROM USUARIO');
        console.log(lista.rows)
        res.json(lista.rows);
    
    } catch (error) {
        console.log(error);

    }

};

export {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
};