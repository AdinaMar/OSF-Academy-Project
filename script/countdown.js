
/*var fs = require("fs");*/


const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const months = document.querySelector("#months");

const currentYear = new Date().getFullYear();

const meTime = new Date(`February 28 ${currentYear} 19:00:00`);

function updateCountDowntime() {
    const currentTime = new Date();
    const diff =  meTime - currentTime;

    const month = Math.floor(diff / 1000 / 60 / 60 / 24 / 28);
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

days.innerHTML = d;
hours.innerHTML = h < 10 ? '0' + h : h;
minutes.innerHTML = m < 10 ? '0' + m : m;
seconds.innerHTML = s < 10 ? '0' + s : s;
months.innerHTML = month;
}

updateCountDowntime();

setInterval(updateCountDowntime, 1000);

//////////////////////////////////////////EMAIL IN JSON

/*const emailForm = document.querySelector("#email-form");


async function postFormDataAsJson({url, formData}) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOption = {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOption);
    if(!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json;
}


async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const url = form.action;

    try {
        const formData = new FormData(form);

        const responseData = await postFormDataAsJson({url, formData});

        console.log({responseData});
    } catch (error){
        console.error(error);
    }
}

emailForm.addEventListener("submit", handleFormSubmit);*/
/*const emailForm = document.querySelector("#email-form");

const formData = new formData("emailForm");

const plainFormData = object.fromEntries(formData.entries());
const formDataJsonString = JSON.stringify(plainFormData);
fs.writeFileSync("emails.json", formDataJsonString);*/