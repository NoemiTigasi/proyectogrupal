const express = require('express');
const { CLIENT_REMEMBER_OPTIONS } = require('mysql/lib/protocol/constants/client');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) => {
 conexion.query('SELECT * FROM cliente', (error, results) => {
      if(error){
          throw error;
      }else{
        res.render('index',{results:results});
      }
  }) 
})
//ruta del editar
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM cliente WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit', {nombre:results[0]});           
        }        
    })
})

// ruta para eliminar datos
//ELIMINAR REGISTROS
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM cliente WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});
//ruta para crear reguistros

router.get('/create', (req, res) => {
    res.render('create');
})
const crud = require('./controles/crud');
router.post('/save', crud.save)
router.post('/update', crud.update);

module.exports = router;