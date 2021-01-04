const cloud1 = document.getElementById("makonis1");
const cloud2 = document.getElementById("makonis2");
const cloud3 = document.getElementById("makonis3");
const cloud4 = document.getElementById("makonis4");


cloud1.addEventListener("click", function(){ 
    cloud1.style.display = "none";
    setInterval(() => {
        cloud1.style.display = "block"
    }, 5000);
});
cloud2.addEventListener("click", function(){ 
    cloud2.style.display = "none";
    setInterval(() => {
        cloud2.style.display = "block"
    }, 5000);
});
cloud3.addEventListener("click", function(){ 
    cloud3.style.display = "none";
    setInterval(() => {
        cloud3.style.display = "block"
    }, 5000);
});
cloud4.addEventListener("click", function(){ 
    cloud4.style.display = "none";
    setInterval(() => {
        cloud4.style.display = "block"
    }, 5000);
});


const homeScreen = document.getElementById("homeScreen");
const tests1 = document.getElementById("test1");
const tests2 = document.getElementById("test2");
const tests3 = document.getElementById("test3");

let p = window.location.pathname;

 if (p.includes("index")){
    homeScreen.style.backgroundColor = "rgb(250, 174, 32)";
    homeScreen.style.textDecoration = "none";
    homeScreen.style.border = "none";
    homeScreen.style.color = "white";
    
 }else if (p.includes("test1")){
    tests1.style.backgroundColor = "rgb(250, 174, 32)";
    tests1.style.textDecoration = "none";
    tests1.style.border = "none";
    tests1.style.color = "white";
 }else if (p.includes("test2")){
    tests2.style.backgroundColor = "rgb(250, 174, 32)";
    tests2.style.textDecoration = "none";
    tests2.style.border = "none";
    tests2.style.color = "white";
 }else if (p.includes("test3")){
    tests3.style.backgroundColor = "rgb(250, 174, 32)";
    tests3.style.textDecoration = "none";
    tests3.style.border = "none";
    tests3.style.color = "white";
 }

 const toolBar = document.getElementById("toolBar");
 
    toolBar.addEventListener("click",
    function toggleClass(){
    toolBar.classList.toggle("toggleCls")});




// setInterval(() => {
//     if(toolBar.className.endsWith("t", 9)){
//         mainScreen.addEventListener("click", 
//         function toggleClass(){
//         toolBar.classList.toggle("toggleCls")})}else{
//             toolBar.addEventListener("click",
//         function toggleClass(){
//         toolBar.classList.toggle("toggleCls")
// })
//         };
// }, 50);




   




// mainScreen.addEventListener("click",
//     function toggleClass(){
//     toolBar.classList.toggle("toggleCls")


