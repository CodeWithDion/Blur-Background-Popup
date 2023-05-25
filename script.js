const closeIconEL = document.querySelector(".close-icon");
const btnEl = document.querySelector(".btn");
const formEmailEl = document.querySelector(".form-email")
const mainContainerEl = document.querySelector(".main-container");

btnEl.addEventListener("click", () => {
    mainContainerEl.classList.add("active");
    formEmailEl.classList.add("active");
})


closeIconEL.addEventListener("click", () => {
    mainContainerEl.classList.remove("active");
    formEmailEl.classList.remove("active");
})

