const arrowLeft = document.querySelector(".left-button");
const arrowRight = document.querySelector(".right-button");

let leftImage = document.querySelector(".left");
let centerImage = document.querySelector(".current");
let rightImage = document.querySelector(".right");


arrowLeft.addEventListener('click', ()=>
{
    leftImage.classList.remove("left");
    leftImage.classList.add("right");  

    centerImage.classList.remove("current");
    centerImage.classList.add("left");

    rightImage.classList.remove("right");
    rightImage.classList.add("current");

    let store = leftImage;
    leftImage = centerImage;
    centerImage = rightImage;
    rightImage = store;
})

arrowRight.addEventListener('click', ()=>
{
    rightImage.classList.remove("right");
    rightImage.classList.add("left");

    centerImage.classList.remove("current");
    centerImage.classList.add("right");

    leftImage.classList.remove("left");
    leftImage.classList.add("current");  


    let store = rightImage;
    rightImage = centerImage;
    centerImage = leftImage;
    leftImage = store;
})