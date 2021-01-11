const turnOn = () => {

    const snowb1 = document.getElementById("snowB1");
    const snowb1c = document.getElementById("snowB1c");
    const snowb2 = document.getElementById("snowB2");
    const snowb3 = document.getElementById("snowB3");
    const snowb3c = document.getElementById("snowB3c");
    const snowb4 = document.getElementById("snowB4");
    const snowb4c = document.getElementById("snowB4c");
    const snowbs = [snowb1, snowb1c, snowb2, snowb3, snowb3c, snowb4, snowb4c]

    

    const bulb1 = document.getElementById("bulb1");
    const bulb2 = document.getElementById("bulb2");
    const bulb3 = document.getElementById("bulb3");
    const bulb4 = document.getElementById("bulb4");
    const bulb5 = document.getElementById("bulb5");
    const bulb6 = document.getElementById("bulb6");
    const bulb7 = document.getElementById("bulb7");
    const bulb8 = document.getElementById("bulb8");
    const bulb9 = document.getElementById("bulb9");
    const bulb10 = document.getElementById("bulb10");
    const bulb11 = document.getElementById("bulb11");
    const bulb12 = document.getElementById("bulb12");
    const switchz = document.getElementById("switch");
    const bulbs = [bulb1, bulb2, bulb3, bulb4, bulb5, bulb6, bulb7, bulb8, bulb9, bulb10, bulb11, bulb12];

    switchz.addEventListener("click", function(){
        bulbs.forEach(target => target.classList.toggle("bulbOn"));
        snowbs.forEach(target => target.classList.toggle("snowOn"));
        switchz.classList.toggle("switchOn");
        
    })
    
}

turnOn();

