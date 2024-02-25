
let luva = document.querySelector('.soco');
let tempo = document.querySelector('.tempo');
let vida = document.querySelector('.vida');
let win = document.querySelector('.win');

let cena1 = document.querySelector('.cena1')
let cena2 = document.querySelector('.cena2')
let cena3 = document.querySelector('.cena3')
let cena4 = document.querySelector('.cena4')
let cena5 = document.querySelector('.cena5')

let contador = 0;

let sec = 0;
let min = 0;

function zeroEsquerda(indice){
    if(indice <= 9){
        return '0' + indice
    }else{
        return indice
    }
}

setInterval(() => {
    sec++

    tempo.innerHTML = zeroEsquerda(min) + ':' +  zeroEsquerda(sec)

    if(sec == 60){
        sec = 0;
        min++;
    }
    if(contador <1){
        if(tempo.innerHTML == '00:30'){
            cena1.style.display ='none'
            cena2.style.display = 'block'
            vida.innerHTML = 70
        }
        if(tempo.innerHTML == '00:45'){
            cena2.style.display ='none'
            cena3.style.display ='block'
            vida.innerHTML = 50
        }
        if(tempo.innerHTML == '01:01'){
            cena3.style.display = 'none'
            cena4.style.display = 'block'
            vida.innerHTML = 25
        }
        if(tempo.innerHTML == '01:30'){
            cena4.style.display = 'none';
            cena5.style.display = 'block';
            vida.innerHTML = 0;
            luva.style.display = 'none'
            win.style.display = 'block'
        }
    }
    if(tempo.innerHTML == '02:01'){
        cena1.style.display = 'none';
        cena2.style.display = 'none';
        cena3.style.display = 'none';
        cena4.style.display = 'none';
        cena5.style.display = 'block';
        vida.innerHTML = 0;
        luva.style.display = 'none'
        win.style.display = 'block'
    }

}, 1000);

luva.addEventListener('click',e=>{

    if(contador == 3){
        cena4.style.display = 'none';
        cena5.style.display = 'block';
        vida.innerHTML = 0;
        luva.style.display = 'none'
        win.style.display = 'block'
        contador++
    }

    if(contador == 2){
        cena3.style.display = 'none'
        cena4.style.display = 'block'
        vida.innerHTML = 25,
        contador++
    }

    if(contador == 1){
        cena2.style.display ='none'
        cena3.style.display ='block'
        vida.innerHTML = 50
        contador++;
    }
    if(contador == 0){
        cena1.style.display ='none'
        cena2.style.display = 'block'
        vida.innerHTML = 70
        contador++;
    }
    
    console.log(contador)

})

win.addEventListener('click',e=>{
    cena1.style.display = 'block';
    cena2.style.display = 'none';
    cena3.style.display = 'none';
    cena4.style.display = 'none';
    cena5.style.display = 'none';
    vida.innerHTML = 100;
    tempo.innerHTML = '00:00'
    sec = 0
    min = 0
    win.style.display = 'none'
    luva.style.display = 'block'
})

