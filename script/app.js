

//////////////////////////////////////////////////////

const pass = document.getElementById("myInput");
const firstEye = document.getElementById("hide1");
const secondEye = document.getElementById("hide2");
const eyeClick = document.querySelector(".icons-eye");

const showPass = ()=> {
    if(pass.type === "password") {
        pass.type = "text";
        firstEye.style.display = "none";
        secondEye.style.display = "block";
    } else {
       
            pass.type = "password";
            firstEye.style.display = "block";
            secondEye.style.display = "none";
    }
}

eyeClick.addEventListener("click", showPass);


const loginForm = document.querySelector(".login-form");
const iconUser = document.querySelector(".fa-user");


const showLogin = ()=> {
    loginForm.classList.toggle("show-active");
}

iconUser.addEventListener("click", showLogin);




/////////////////////////////////////////////////////



//close form by pressing 'esc'/click outside form

window.addEventListener("keydown", function(event) {
    if(event.key === "Escape") {
        loginForm.classList.remove("show-active");
    }
})



document.addEventListener("click", function(event) {
    if(
        event.target.matches(".login-form") 
    ) {
        loginForm.classList.remove("show-active");
    }
})

const forCell = document.querySelector("#forCell");

forCell.addEventListener("click", showLogin);

////////////////////////////////////////////////// INCREMENT COUNTER/////
const favCounter = document.querySelectorAll(".count");
const heartShop = document.querySelector("#heartCounter");

const heartShopMobile = document.querySelector("#heartCounterCell");
const favCounterMobile = document.querySelector("#counterCell");

let counter= 0;
for(let i=0; i<favCounter.length; i++){
favCounter[i].addEventListener("click", ()=>{
    counter+=1 ;
    heartShop.innerHTML = counter;
    heartShopMobile.innerHTML = counter;

})
}

const shopping = document.querySelector("#counter");
const bags = document.querySelectorAll(".shop");

let counting = 0;
for(let i=0; i<bags.length;i++){
    bags[i].addEventListener("click", ()=>{
        counting +=1;
        shopping.innerHTML= counting;
        favCounterMobile.innerHTML = counting;
    })
}




/////////////////////////////////////LOAD MORE


const loadMore = document.querySelector(".load");

const products = document.querySelector(".prodotto");

const loading = () => {
products.classList.add("active");
loadMore.style.display="none";
}

loadMore.addEventListener("click", loading);

