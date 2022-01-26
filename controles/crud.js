const conexion = require('../database/db');

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo_elec = req.body.correo_elec;

    conexion.query('INSERT INTO cliente SET ?',{nombre:nombre, apellido:apellido, correo_elec:correo_elec}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// editar 

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo_elec = req.body.correo_elec;
    conexion.query('UPDATE cliente SET ? WHERE id = ?',[{nombre:nombre, apellido:apellido, correo_elec:correo_elec}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{             
                res.redirect('/');         
            }
        });
    };