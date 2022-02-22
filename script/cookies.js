const cookiesWrapper = document.querySelector(".wrapper-cookies");
acceptBtn = document.querySelector("#accept");
const closeCookie = document.querySelector("#close");

const acceptCookies = () => {
    document.cookie = "CookieBy=OSFAcademy";
    
    if(document.cookie){
cookiesWrapper.classList.add("hide");

    } else {
        alert("Cookie not set");
    }
}
let checkCookie = document.cookie.indexOf('CookieBy=OSFAcademy');
checkCookie != -1 ? cookiesWrapper.classList.add('hide') : cookiesWrapper.classList.remove('hide');

acceptBtn.addEventListener("click", acceptCookies);


const closingCookie = () => {
    cookiesWrapper.classList.add("hide");
}

closeCookie.addEventListener("click", closingCookie);

function showAfterTen() {
    cookiesWrapper.style.visibility = "visible";
    body.style.background = "#ccc";
}
setTimeout("showAfterTen()", 10000);


/*window.addEventListener('load',function(){
    setTimeout(function(){
      document.cookie = "CookieBy=OSFAcademy";
    },10000)
  });*/