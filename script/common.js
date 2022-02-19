/////////////////////////FOOTER:GET YEAR
const thisYear = document.querySelector("#currentDate");
const currentYear = new Date().getFullYear()


thisYear.innerHTML = currentYear;


/////////////////////////////////////

const hiddenX = document.querySelector(".fa-times");
const showX = document.querySelector(".fa-bars");
const megaBox = document.querySelector(".mega-box");
const service = document.querySelector("#service");

/*const showMegaBox = ()=> {
    megaBox.style.visibility="visible";
    megaBox.style.opacity="1";
}

service.addEventListener("click", showMegaBox);*/




window.addEventListener("load", ()=>{
    hiddenX.style.visibility = "hidden";
})

showX.addEventListener("click", ()=> {
    hiddenX.style.visibility ="visible";
})