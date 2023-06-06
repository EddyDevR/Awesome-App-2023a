// httpError.controller.js

// Función para manejar el error 404
export const handle404Error = (req, res) => {
    res.status(404).render('error', {
        errorCode: 404,
        errorMessage: 'La página que estás buscando no existe.'
    });
};

// Función para manejar otros errores
export const handleOtherErrors = (err, req, res, next) => {
    console.error(err); // Imprime el error en la consola para propósitos de depuración

    res.status(500).render('error', {
        errorCode: 500,
        errorMessage: 'Ocurrió un error en el servidor. Por favor, inténtalo de nuevo más tarde.'
    });
};
