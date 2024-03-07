let elName = document.getElementById('userName');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');

let elGenera = document.getElementById('generate');
let elAnnulla = document.getElementById('annulla');

let elPass = document.getElementById('pass');
let elOffer = document.getElementById('offer');
let elCarrozza = document.getElementById('carrozza');
let elPrice = document.getElementById('price');
let elCode = document.getElementById('code');

let elTicket = document.getElementById('ticket');

function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

elGenera.addEventListener('click', function(){
    let name = elName.value;
    let km = elKm.value;
    let age = elAge.value;
    elTicket.classList.remove('d-none');

    if(age < 18){
        let price = 0.21 * km * 0.8;
        elPrice.innerHTML = price.toFixed(2);
        elOffer.innerHTML = 'under 18';
    }else if(age > 65){
        let price = 0.21 * km * 0.6;
        elPrice.innerHTML = price.toFixed(2);
        elOffer.innerHTML = 'over 65';
    }else{
        let price = 0.21 * km;
        elPrice.innerHTML = price.toFixed(2);
        elOffer.innerHTML = 'standard';
    }

    elPass.innerHTML = name;

    let randomCarr = generaRandom(1, 12);
    let carrozza = elCarrozza.value;
    elCarrozza.innerHTML = randomCarr;

    let randomCode = generaRandom(10000, 99999);
    let code = elCode.value;
    elCode.innerHTML = randomCode;
});