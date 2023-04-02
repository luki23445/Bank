let pulpit_pop_open = document.querySelector('.pulpit_pop_open');
let platnosci_pop_open = document.querySelector('.platnosci_pop_open');
let finanse_pop_open = document.querySelector('.finanse_pop_open');
let pomoc_pop_open = document.querySelector('.pomoc_pop_open');

pulpit_pop_open.addEventListener('click', open_pulpit=>{
    let a = document.getElementById('pulpit_pop');
    let b = document.getElementById('platnosci_pop');
    let c = document.getElementById('finanse_pop');
    let d = document.getElementById('pomoc_pop');
    a.style.display = 'block';
    pulpit_pop_open.style.color = 'red'
    b.style.display = 'none';
    platnosci_pop_open.style.color = 'black'
    c.style.display = 'none';
    finanse_pop_open.style.color = 'black'
    d.style.display = 'none';
    pomoc_pop_open.style.color = 'black'
});

platnosci_pop_open.addEventListener('click', open_platnosci=>{
    let a = document.getElementById('pulpit_pop');
    let b = document.getElementById('platnosci_pop');
    let c = document.getElementById('finanse_pop');
    let d = document.getElementById('pomoc_pop');
    a.style.display = 'none';
    pulpit_pop_open.style.color = 'black'
    b.style.display = 'block';
    platnosci_pop_open.style.color = 'red'
    c.style.display = 'none';
    finanse_pop_open.style.color = 'black'
    d.style.display = 'none';
    pomoc_pop_open.style.color = 'black'
});

finanse_pop_open.addEventListener('click', open_finanse=>{
    let a = document.getElementById('pulpit_pop');
    let b = document.getElementById('platnosci_pop');
    let c = document.getElementById('finanse_pop');
    let d = document.getElementById('pomoc_pop');
    a.style.display = 'none';
    pulpit_pop_open.style.color = 'black'
    b.style.display = 'none';
    platnosci_pop_open.style.color = 'black'
    c.style.display = 'block';
    finanse_pop_open.style.color = 'red'
    d.style.display = 'none';
    pomoc_pop_open.style.color = 'black'
});

pomoc_pop_open.addEventListener('click', open_pomoc=>{
    let a = document.getElementById('pulpit_pop');
    let b = document.getElementById('platnosci_pop');
    let c = document.getElementById('finanse_pop');
    let d = document.getElementById('pomoc_pop');
    a.style.display = 'none';
    pulpit_pop_open.style.color = 'black'
    b.style.display = 'none';
    platnosci_pop_open.style.color = 'black'
    c.style.display = 'none';
    finanse_pop_open.style.color = 'black'
    d.style.display = 'block';
    pomoc_pop_open.style.color = 'red'
});

let saldo = 1000;
const wplata_tab = [];
const wyplata_tab = [];
const wplata = document.getElementById("wplata");
const zaakceptuj_wplate = document.getElementById("zaakceptuj_wplate");
const wyplata = document.getElementById("wyplata");
const zaakceptuj_wyplate = document.getElementById("zaakceptuj_wyplate");
const wynik = document.getElementById("wynik");
var sald = wynik

const formatter = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,

  });

  const tab_transakcii = [];
  var pole_transakcii =  document.querySelector('.pole_transakcii');

zaakceptuj_wplate.addEventListener('click', () => {

    if (isNaN(wplata.value)) {
        alert("Proszę wpisać kwotę");
        return wplata.value = '';
    } else {


        if (wplata.value < 1,00 || wplata.value > 100000) {
            alert("Możesz wpłacić tylko od 1 zł do 100 000 zł.")
            return wplata.value = '';
        } else {
    

        wplata_tab.push(Number(wplata.value));

        saldo += (Number(wplata.value));

        const d = new Date()
      let rok = d.getFullYear();
      let mies = d.getUTCMonth();
      let dzien = d.getUTCMonth();
      let godz = d.getHours()
      let min = d.getMinutes()
      let sec = d.getSeconds()

        let saldoFormatted = formatter.format(saldo);
        document.getElementById("wynik").innerHTML = saldoFormatted;


        tab_transakcii.push("<h2>" + wplata.value + " zł" + " | " + rok + '-' + mies + '-' + dzien + " | " + godz + '-' + min + '-' + sec.toFixed(0) + " | " + " Wpływ" +"</h2>")

            pole_transakcii.innerHTML = tab_transakcii
        setTimeout(() => {
            console.log(tab_transakcii);
          }, 600);

    return wplata.value = '';
    }
}
    
});


zaakceptuj_wyplate.addEventListener('click', () => {


    if (isNaN(wyplata.value)) {
        alert("Proszę wpisać kwotę");
        return wyplata.value = '';
    } else {


        if (wyplata.value > saldo - 10) {
            alert("Twoje saldo nie może wynosić mniej niż 10 zł");
            return wyplata.value = '';
        } else {


        wyplata_tab.push(Number(wyplata.value));
 
        saldo -= (Number(wyplata.value));
        
        const d = new Date()
      let rok = d.getFullYear();
      let mies = d.getUTCMonth();
      let dzien = d.getUTCMonth();
      let godz = d.getHours()
      let min = d.getMinutes()
      let sec = d.getSeconds()
  
        let saldoFormatted = formatter.format(saldo);
        document.getElementById("wynik").innerHTML = saldoFormatted;
        tab_transakcii.push("<h2>" + wyplata.value + " zł" + " | " + rok + '-' + mies + '-' + dzien + " | " + godz + '-' + min + '-' + sec.toFixed(0) + " | " + "Wypływ" +"</h2>")
            pole_transakcii.innerHTML = tab_transakcii
        setTimeout(() => {
            console.log(tab_transakcii);
          }, 600);
    
    }
}
});


let saldoFormatted = formatter.format(saldo);
document.getElementById("wynik").innerHTML = saldoFormatted;
document.getElementById("sald").innerHTML = saldoFormatted;
