var zamykanie = document.getElementById("zamykanie");
var blur = document.getElementById("blur");
var okno = document.getElementById("okno");
var button = document.getElementById("button");
var accept = document.getElementById("accept");
var cookie = document.getElementById("cookie")
var Ladowanie_banku = document.getElementById("Ladowanie_banku")
var menu =  document.querySelector('.menu');
var strona =  document.querySelector('.strona');
var logo =  document.querySelector('.logo');
let pulpit_pop = document.getElementById('pulpit_pop');


accept.onclick = function() {
  cookie.style.display = 'none';
};


zamykanie.onclick = function() {
  blur.style.display = 'none';
  okno.style.display = 'none';
};

button.onclick = function() {
  blur.style.display = 'block';
  okno.style.display = 'block';
};
document.getElementById("loguj").addEventListener("click", loguj);

var mail = new Array("Łukasz@o2.pl", "A");
var haslo = new Array("Wojtania", "A");

function sprawdz_haslo(mailin, hasin)
{  
  for(var i = 0; i < mail.length; i++){
    if((mailin == mail[i]) && (hasin == haslo[i]))
      return true;
  }
  return false;
}
function loguj()
{
  var lock = document.getElementById("lock");
  var unlock = document.getElementById("unlock");
  var mailin = document.form1.login.value;
  var hasin = document.form1.haslo.value;
  if(!sprawdz_haslo(mailin, hasin)){
    alert("Błędne Hasło")
  }
  else{ 
      lock.style.display = 'none';
      unlock.style.display= 'block';
      setTimeout(() => {
        Ladowanie_banku.style.display = 'block'
        Ladowanie_banku.style.animationName = 'logowanie_wejscie'
        Ladowanie_banku.style.animationDuration = '1s'
        Ladowanie_banku.style.animationFillMode = 'forwards'
      }, 1000);
      setTimeout(() => {
        Ladowanie_banku.style.animationName = 'logowanie_wyjscie'
        Ladowanie_banku.style.animationDuration = '1s'
        Ladowanie_banku.style.animationFillMode = 'forwards'
        menu.style.display = 'none'
        blur.style.display = 'none';
        okno.style.display = 'none';
        pulpit_pop.style.display = 'block';
        strona.style.display = 'block';
        strona.style.color = 'black';
        logo.style.color = 'black';
      setTimeout(() => {
        Ladowanie_banku.style.display = 'none';
      }, 150);
      }, 3000);
  }
}
