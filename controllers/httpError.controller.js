// httpError.controller.js

// Función para manejar el error 404
export const handle404Error = (req, res) => {
    console.error("Error 404");
    res.status(404).render('error', {
        errorCode: 404,
    });
};

// Función para error 500
export const handle500Error = (err, req, res, next) => {
    console.error("Error 500"); // Imprime el error en la consola para propósitos de depuración

    res.status(500).render('error500', {
        errorCode: 500,
    });
};
