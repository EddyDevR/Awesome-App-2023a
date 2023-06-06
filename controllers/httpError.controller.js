// httpError.controller.js

// Función para manejar el error 404
export const handle404Error = (req, res) => {
    res.status(404).render('error', {
        errorCode: 404,
    });
};

// Función para manejar otros errores
export const handleOtherErrors = (err, req, res, next) => {
    console.error(err); // Imprime el error en la consola para propósitos de depuración

    res.status(500).render('error', {
        errorCode: 500,
    });
};