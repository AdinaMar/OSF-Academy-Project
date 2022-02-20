const forMobile = document.querySelector(".mobile-only");
const loadMore = document.querySelector(".loader");

const showElement = () => {
    forMobile.classList.add("active");
}

loadMore.addEventListener("click", showElement);