const db = require('../database/conexion.js');

class ComprasController {
    comprar(req, res) {
        const sql = `INSERT INTO compras (producto, precio) VALUES (?, ?)`;
        const {producto, precio} = req.body;

        if (precio === undefined || !producto) {
            return res.status(400).json({msg: 'Valor invalido'});
        }
        db.query(sql, [producto, precio], (err) => {
            if (err) {
                return res.status(500).json({msg: 'Error del servidor'});
            }
            return res.status(201).json({msg: 'Elemento creado'});
        });
    }

    borrarCompra(req, res) {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({msg: 'ID invalido'});
        }

        const sql = `DELETE FROM compras WHERE id = ?`;

        db.query(sql, [id], (err) => {
            if (err) {
                return res.status(500).json({msg: 'Error del servidor'});
            } 

            return res.json({msg: 'Elemento eliminado'});
        });
    }

    mostrarCompras(req, res) {
        const  sql = `SELECT * FROM compras`;
        db.query(sql, (err, rows) => {
            if (err) {
                return res.status(500).json({msg: 'Error del servidor'});
            }
            return res.status(200).json(rows);
        });
    }

    actualizarCompra(req, res) {
        const id = parseInt(req.params.id);
        const precio = parseFloat(req.body.precio);

        if (isNaN(id)) {
            return res.status(400).json({msg: 'ID invalido'});
        } else if (isNaN(precio)) {
            return res.status(400).json({msg: 'Precio invalido'});
        }
        
        const sql = `UPDATE compras SET precio = ? WHERE id = ?`;
        db.query(sql, [precio, id], (err) => {
            if (err) {
                return res.status(500).json({msg: 'Error del servidor'});
            }

            return res.status(200).json({msg: 'Dato actualizado'});
        });
    }
}

module.exports = new ComprasController;