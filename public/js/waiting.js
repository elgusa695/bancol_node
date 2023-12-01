// Enviar info
fetch(`${API_URL}/generals`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
})
    .then(response => response.json())
    .then(result => {
        // Manejo de respuetas del servidor
        console.log('Respuesta del servidor:', result.redirect_to);

        window.location.href = result.redirect_to+'.html';
    })
    .catch(error => {
        console.log('Error en la solicitud:', error);
    });