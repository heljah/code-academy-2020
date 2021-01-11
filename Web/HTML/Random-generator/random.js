function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const random1 = getRandomInt(3) + 1;
const random2 = getRandomInt(3) + 1;
const random3 = getRandomInt(3) + 1;

const play = () => {
    document.write(`<img src="http://koti.tamk.fi/~pohjus/${random1}.png">`);
    document.write(`<img src="http://koti.tamk.fi/~pohjus/${random2}.png">`);
    document.write(`<img src="http://koti.tamk.fi/~pohjus/${random3}.png">`);
    
    console.log(document.querySelector("#voittaja"));
    
    if (random1 === random2 && random2 === random3) {
        document.querySelector("#voittaja").innerHTML = "Voitit!";
    } else {
        document.querySelector("#voittaja").innerHTML = "Hävisit!";
    }
}


