let elName = document.getElementById('userName');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');
let elGenera = document.getElementById('generate');

let elTicket = document.getElementById('ticket');

//console.log(elName, elKm, elAge, elGenera);

elGenera.addEventListener('click',function(){
    let name = elName.value;
    let km = elKm.value;
    let age = elAge.value;
    //elTicket.classList.remove('d-none');
});