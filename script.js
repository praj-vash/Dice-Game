'use strict';
let score1 = document.querySelector("#score--0") ;
let score2 = document.querySelector("#score--1") ;
let s1 = 0, s2 = 0;
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
let p1 = true;
let p2 = false;
let img = document.querySelector("img");
img.classList.add('hide');
let current =0;
let win = false;
function winner(){
    win=true;
    if(p1==true){
        document.querySelector(".player--0").classList.add('player--winner');
    }
    else  document.querySelector(".player--1").classList.add('player--winner');
}
function switchactive(){
    if(p1==true){
        document.querySelector(".player--0").classList.remove('player--active');
        document.querySelector(".player--1").classList.add('player--active');
        document.querySelector("#current--0").textContent = 0;
        current = 0;
        p1=false;
        p2=true;
    }
    else{
        document.querySelector(".player--1").classList.remove('player--active');
        document.querySelector(".player--0").classList.add('player--active');
        document.querySelector("#current--1").textContent = 0;
        current = 0;
        p1=true;
        p2=false;
    }
}
roll.addEventListener('click',function(){
    if(img.classList.contains('hide')) img.classList.remove('hide');
    if(win==false){
        let num = Math.trunc(Math.random()*6)+1;
        let imgname = `dice-${num}.png`;
        img.src = imgname;
        current += num;
        if(num==1){
            switchactive();
        }
        if(p1)
            document.querySelector("#current--0").textContent = current;
        if(p2)
            document.querySelector("#current--1").textContent = current;
    }
})
hold.addEventListener('click',function(){
    if(win==false){
        if(p1){
            s1 += current;
            score1.textContent = s1;
            if(s1>=100){
                winner();
            }
            switchactive();
        }
        else {
            s2 += current;
            score2.textContent = s2;
            if(s2>=100){
                winner();
            }
            switchactive();
        }
    }
})

document.querySelector(".btn--new").addEventListener('click',function(){
    p1=true;
    p2=false;
    win=false;
    document.querySelector(".player--0").classList.add('player--active');
    if(document.querySelector(".player--1").classList.contains('player--active'))document.querySelector(".player--1").classList.remove('player--active');
    if(document.querySelector(".player--0").classList.contains('player--winner'))document.querySelector(".player--0").classList.remove('player--winner');
    if(document.querySelector(".player--1").classList.contains('player--winner'))document.querySelector(".player--1").classList.remove('player--winner');
    current = 0;
    s1=s2=0;
    score1.textContent=0;
    score2.textContent=0;
    img.classList.add('hide');
})