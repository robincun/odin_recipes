var textArray = ["schere", "stein", "papier"]
function computerPlay(){
    var randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}
function spiel(string, string2){
    if ( string.toLowerCase() === "stein"& string2=== "schere"){
        return "You Win, stein ist schlägt papier!!";
    }
    else if( string.toLowerCase() === "stein"&  string2=== "stein"){
        return "stein und stein : Gleichstand und nochmal!!";
    }
    else if(string.toLowerCase() === "stein"& string2==="papier"){
        return "du hast verloren, papier schlägt stein";
    }
    else if(string.toLowerCase() === "papier"& string2=== "schere"){
        return "du hast verloren, scher schlägt papier";
    }
    else if (string.toLowerCase() === "papier"& string2=== "stein"){
        return "du gewinns, papier schlägt stein";
    }
    else if (string.toLowerCase() === "papier"& string2=== "papier"){
        return "gleichstand: papier und papier";
    }
    else if(string.toLowerCase() === "schere"& string2=== "schere"){
         return("gleichstand: schere und schere");
    }
    else if(string.toLowerCase() === "schere"& string2=== "stein"){
        return("du hast verloren, stein schlägt schere");
    }
    else if (string.toLowerCase() === "schere"& string2=== "papier"){
        return("du hast gewonnen, schere fickt papier!!!!!!!!!!!!!!!!!!!!");
    }
    else{
        return("fehler du keck!!!!!!!!!!!!!!!!!!!!!!!");
    }
}
const p = document.querySelector('p');
const papier = document.querySelector('.papier');
const stein = document.querySelector('.stein')
function Schere(){
    p.textContent= spiel('schere',computerPlay());
}
function Stein(){
    p.textContent= spiel('stein',computerPlay());
}
function Papier(){
    p.textContent= spiel('papier',computerPlay());
}
const schere = document.querySelector(".schere");
schere.addEventListener('click', Schere);
papier.addEventListener('click', Papier);
stein.addEventListener('click', Stein);
