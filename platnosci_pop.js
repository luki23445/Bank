let na_obcy_pop_open = document.querySelector('.na_obcy_pop_open');
let na_wlasny_pop_open = document.querySelector('.na_wlasny_pop_open');
let z_innego_banku_pop_open = document.querySelector('.z_innego_banku_pop_open');
let blik_pop_open = document.querySelector('.blik_pop_open');
let na_wlasny_walutowy_pop_open = document.querySelector('.na_wlasny_walutowy_pop_open');
let skanuj_plac_pop_open = document.querySelector('.skanuj_plac_pop_open');
let doladuj_telefon_pop_open = document.querySelector('.doladuj_telefon_pop_open');
let transakcje_blik_pop_open = document.querySelector('.transakcje_blik_pop_open');
let przelewy_pop_open = document.querySelector('.przelewy_pop_open');

na_obcy_pop_open.addEventListener('click', open_na_obcy=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'block';
    a.style.animationName = 'powolne_wejscie'
    a.style.animationDuration = '1s'
    a.style.animationFillMode = 'forwards'

    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';
});

na_wlasny_pop_open.addEventListener('click', open_na_wlasny=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';

    b.style.display = 'block';
    b.style.animationName = 'powolne_wejscie'
    b.style.animationDuration = '1s'
    b.style.animationFillMode = 'forwards'

    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';
});

z_innego_banku_pop_open.addEventListener('click', open_z_innego_banku=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';

    c.style.display = 'block';
    c.style.animationName = 'powolne_wejscie'
    c.style.animationDuration = '1s'
    c.style.animationFillMode = 'forwards'

    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';
});

blik_pop_open.addEventListener('click', open_blik=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';

    d.style.display = 'block';
    d.style.animationName = 'powolne_wejscie'
    d.style.animationDuration = '1s'
    d.style.animationFillMode = 'forwards'

    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';

    var min=100;
    var max=999; 
    var l1 = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    var l2 = Math.floor(Math.random() * (+max + 1 - +min)) + +min;

    document.getElementById('kod_blik').innerHTML = l1 + ' ' + l2;
    
});

na_wlasny_walutowy_pop_open.addEventListener('click', open_na_wlasny_walutowy=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';

    e.style.display = 'block';
    e.style.animationName = 'powolne_wejscie'
    e.style.animationDuration = '1s'
    e.style.animationFillMode = 'forwards'

    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';
});

skanuj_plac_pop_open.addEventListener('click', open_skanuj_plac=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';

    f.style.display = 'block';
    f.style.animationName = 'powolne_wejscie'
    f.style.animationDuration = '1s'
    f.style.animationFillMode = 'forwards'

    
    g.style.display = 'none';
    h.style.display = 'none';
    i.style.display = 'none';
});

doladuj_telefon_pop_open.addEventListener('click', open_doladuj_telefon=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';

    g.style.display = 'block';
    g.style.animationName = 'powolne_wejscie'
    g.style.animationDuration = '1s'
    g.style.animationFillMode = 'forwards'

    h.style.display = 'none';
    i.style.display = 'none';
});

transakcje_blik_pop_open.addEventListener('click', open_transakcje_blik=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';

    h.style.display = 'block';
    h.style.animationName = 'powolne_wejscie'
    h.style.animationDuration = '1s'
    h.style.animationFillMode = 'forwards'

    
    i.style.display = 'none';
    
}); 

przelewy_pop_open.addEventListener('click', open_przelewy=>{
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');
    blok.style.display = 'block';
    blur.style.animationName = 'powolny_blur'
    blur.style.animationDuration = '1s'
    blur.style.animationFillMode = 'forwards'

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';

    i.style.display = 'block';
    i.style.animationName = 'powolne_wejscie'
    i.style.animationDuration = '1s'
    i.style.animationFillMode = 'forwards'
});

document.addEventListener('keydown', function(close_pop_up) {
    let blok = document.getElementById('blok');
    let blur = document.getElementById('strona');
    let a = document.getElementById('na_obcy_pop');
    let b = document.getElementById('na_wlasny_pop');
    let c = document.getElementById('z_innego_banku_pop');
    let d = document.getElementById('blik_pop');
    let e = document.getElementById('na_wlasny_walutowy_pop');
    let f = document.getElementById('skanuj_plac_pop');
    let g = document.getElementById('doladuj_telefon_pop');
    let h = document.getElementById('transakcje_blik_pop');
    let i = document.getElementById('przelewy_pop');

    if (close_pop_up.key === 'Escape') {
        blok.style.display = 'none';
        blur.style.animationName = 'powolny_blur_wyjscie';
        blur.style.animationDuration = '0.5s';
        blur.style.animationFillMode = 'forwards';
    
        a.style.display = 'none';
        a.style.animationName = 'powolne_wyjscie';
        a.style.animationDuration = '3s';
        a.style.animationFillMode = 'forwards';

        b.style.display = 'none';
        b.style.animationName = 'powolne_wyjscie';
        b.style.animationDuration = '3s';
        b.style.animationFillMode = 'forwards';

        c.style.display = 'none';
        c.style.animationName = 'powolne_wyjscie';
        c.style.animationDuration = '3s';
        c.style.animationFillMode = 'forwards';

        d.style.display = 'none';
        d.style.animationName = 'powolne_wyjscie';
        d.style.animationDuration = '3s';
        d.style.animationFillMode = 'forwards';

        e.style.display = 'none';
        e.style.animationName = 'powolne_wyjscie';
        e.style.animationDuration = '3s';
        e.style.animationFillMode = 'forwards';

        f.style.display = 'none';
        f.style.animationName = 'powolne_wyjscie';
        f.style.animationDuration = '3s';
        f.style.animationFillMode = 'forwards';

        g.style.display = 'none';
        g.style.animationName = 'powolne_wyjscie';
        g.style.animationDuration = '3s';
        g.style.animationFillMode = 'forwards';

        h.style.display = 'none';
        h.style.animationName = 'powolne_wyjscie';
        h.style.animationDuration = '3s';
        h.style.animationFillMode = 'forwards';

        i.style.display = 'none';
        i.style.animationName = 'powolne_wyjscie';
        i.style.animationDuration = '3s';
        i.style.animationFillMode = 'forwards';
      }
      
    });
