

//Target spawning


const targetSpawn = (delayOne, delayTwo, times, maxScore, pointPer) => {
    let scorez = 0;
    const target1 = document.getElementById("target1");
    const target2 = document.getElementById("target2");
    const target3 = document.getElementById("target3");
    const target4 = document.getElementById("target4");
    const target5 = document.getElementById("target5");
    const target6 = document.getElementById("target6");
    const target7 = document.getElementById("target7");
    const target8 = document.getElementById("target8");
    const target9 = document.getElementById("target9");
    const targets = [target1, target2, target3, target4, target5, target6, target7, target8, target9];
    const tenScore = document.getElementById("tenScore")


    targets.forEach(target => target.addEventListener("click", function(){
        if(target.className.endsWith("t", 16) === false){
            target.classList.add("trigTarget");
            scorez+=pointPer;
            document.getElementById("scorez").innerHTML = `${scorez}`;
            tenScore.classList.add("tenScorez");
                setTimeout(() => {
                    tenScore.classList.remove("tenScorez");
                }, 1000);
    }
    }))


    let ctn = 1;
    const inter = setInterval(() => {
        if(ctn == times){
            clearInterval(inter);
            const scoreBoard = document.getElementById("countDownHtml")
            document.getElementById("countDown").style.display = "block";
            scoreBoard.innerHTML = `Your Final Score is ${scorez} out of ${maxScore}`;
        }
        const inter2 = setTimeout(() => {
            ctn++;
            const rng = Math.floor(Math.random() * 9);
            targets[rng].style.display = "block";
            setTimeout(() => {
            targets[rng].style.display = "none";
            }, delayOne);
            setTimeout(() => {
            targets[rng].classList.remove("trigTarget");
            }, delayOne+50);
            }, 100);
        if (ctn == times) {
            clearTimeout(inter2);
        }

    }, delayTwo);

}


//Menu and difficulties


const gameScreen = document.getElementById("gameScreen");
const menu = () => {
    const grabReturn = document.getElementById("return");
    grabReturn.classList.add("offReturn");
    document.getElementById("scorez").style.left = "33%";
    document.getElementById("scorez").innerHTML = `Choose difficulty`;
    const menuScreen = document.getElementById("gameMenu");
    const gameMenu1 = document.getElementById("gameMenu1");
    const gameMenu2 = document.getElementById("gameMenu2");
    const gameMenu3 = document.getElementById("gameMenu3");
    const gameMenus = [gameMenu1, gameMenu2, gameMenu3]

    const countDownLog = document.getElementById("countDown");
    const countDownHtml = document.getElementById("countDownHtml");
    let perScorez = document.getElementById("tenScore");

    grabReturn.classList.add("offReturn");
    document.getElementById("scorez").style.left = "33%";
    document.getElementById("scorez").innerHTML = `Choose difficulty`;
    menuScreen.classList.add("menuOn");


    gameMenus.forEach(menuz => menuz.addEventListener("click", function(){
        document.getElementById("scorez").style.left = "0%";
        grabReturn.classList.remove("offReturn");
        menuScreen.classList.remove("menuOn");
        gameScreen.classList.add("gameScreenOn");
        document.getElementById("scorez").innerHTML = `0`;
        countDownLog.classList.remove("countDownOff");
        document.getElementById("descT1").style.display = "none";
    }))

    let cnt1 = 3;
    gameMenu1.addEventListener("click", function(){
        perScorez.innerHTML = "+10";
        const cdinter = setInterval(() => {
            countDownHtml.innerHTML = `${cnt1}`;
            if(cnt1 == 1){
                clearInterval(cdinter);
            }
            cnt1--;
            console.log(cnt1);
        }, 1000);
        setTimeout(() => {
            targetSpawn(1000, 1500, 31, 300, 10);
            countDownLog.classList.add("countDownOff");
        }, 4000);
    
    
    })

    gameMenu2.addEventListener("click", function(){
        perScorez.innerHTML = "+15";
        const cdinter = setInterval(() => {
            countDownHtml.innerHTML = `${cnt1}`;
            if(cnt1 == 1){
                clearInterval(cdinter);
            }
            cnt1--;
            console.log(cnt1);
        }, 1000);
        setTimeout(() => {
            targetSpawn(900, 1200, 31, 450, 15);
            countDownLog.classList.add("countDownOff");
        }, 4000);
    
    
    })

    gameMenu3.addEventListener("click", function(){
        perScorez.innerHTML = "+20";
        const cdinter = setInterval(() => {
            countDownHtml.innerHTML = `${cnt1}`;
            if(cnt1 == 1){
                clearInterval(cdinter);
            }
            cnt1--;
            console.log(cnt1);
        }, 1000);
        setTimeout(() => {
            targetSpawn(800, 1150, 31, 600, 20);
            countDownLog.classList.add("countDownOff");
        }, 4000);
    
    
    })


}

menu();






















// const rng = Math.floor(Math.random() * 9);
// for(let i = 0; i<10; i++){
//     console.log(Math.floor(Math.random() * 9) +1);

// }



    // for(let i = 1; i <= 30; i++){
    //     // setInterval(() => {
    //     //     console.log(targets[Math.floor(Math.random() * 9)])
    //     // }, 1000);
    //     setInterval(() => {
    //         if(targets[Math.floor(Math.random() * 9)].className.endsWith("t", 16) === false){
    //             targets[Math.floor(Math.random() * 9)].classList.toggle("trigTarget");
    //             // scorez+=pointPer;
    //             document.getElementById("scorez").innerHTML = `${scorez}`;}
    //     }, 1000);
    // }

    // let count = 1;

    // const inter = setInterval(() => {
    //     count++;
    //     const rng = Math.floor(Math.random() * 9);
    //     console.log(rng);

        
    //     if(count === 30){
    //         clearInterval(inter);
    //     }


    //     targets[rng].addEventListener("click", function(){
    //         if(targets[rng].className.endsWith("t", 16) === false){
    //             targets[rng].classList.add("trigTarget");
    //         }
    //     })
        
    // }, 500);
