/*var xhttp = new XMLHttpRequest();


xhttp.onload = function() {
    if (this.status === 200){
        try {
            const risposta = JSON.parse(this.responseText);
            populateSection(risposta);
        } catch (e) {
            console.log("there was error");
        }
    } else {
        console.warn("did not recieve");
    }
}



xhttp.open("GET", "items.json");
xhttp.send();*/

fetch("items.json")
.then(response => response.json())
.then(products => populateSection(products));

function populateSection(items) {
    const section = document.querySelector(".prodotto");

    for(const item of items) {
        const myArticle = document.createElement("article");
        const img = document.createElement("img");
        
        const otherDiv = document.createElement("div");
        const title = document.createElement("p");
        const text = document.createElement("span");
        
        
        otherDiv.classList.add("text");
        img.setAttribute("src", item.src);
        img.setAttribute("alt", item.alt);
        title.textContent = item.name;
        text.textContent = item.price;
        myArticle.appendChild(img);
        otherDiv.appendChild(title);
        otherDiv.appendChild(text);
        
        myArticle.appendChild(otherDiv);
        section.appendChild(myArticle);
    }

}

/////////////////////////////////////LOAD MORE


const loadMore = document.querySelector(".load");

const products = document.querySelector(".prodotto");

const loading = () => {
products.classList.add("active");
loadMore.style.display="none";
}

loadMore.addEventListener("click", loading);