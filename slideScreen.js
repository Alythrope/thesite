const slideS = () => {
    const slideScreen = document.getElementById("slideScreen");
    const sc1 = document.getElementById("sc1");
    const sc2 = document.getElementById("sc2");
    const mainInt = setInterval(() => {
        slideScreen.classList.toggle("changePic");
    }, 3500);
    slideScreen.addEventListener("click", function(){
        if(slideScreen.className.endsWith("c", 13) == true){
            location.href = "test2.html";
        }else{
            location.href = "test1.html";
        }
    })

    sc1.addEventListener("click", function(){
        slideScreen.classList.remove("changePic");
    })
    sc2.addEventListener("click", function(){
        slideScreen.classList.add("changePic");
    })

}
slideS();