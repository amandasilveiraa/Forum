const connection = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(request, response) {
    console.log(request.body)
    const query = "SELECT * FROM users WHERE `email` = ?";
    
    const params = Array(
        request.body.email
    );

    connection.query(query, params, (err, results) => {
        if (results.length > 0) {
            bcrypt.compare(request.body.password, results[0].password, (errSenha, resultsSenha) => {
                if (resultsSenha) {                        
                    const userData = results[0];
                    const userId   = userData.id;
                    const token    = jwt.sign(
                        { userId },
                        'token',
                        { expiresIn: 300 }
                    );
                    userData['token'] = token;

                    response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: userData
                        });
                } else {
                    response
                        .status(401)
                        .json({
                            success: false,
                            message: `E-mail ou senha inválidos`,
                            data: errSenha
                        });
                }
            });
        }   
    })
}

module.exports = {
    login
}