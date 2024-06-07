const intro = document.getElementById("intro")
const logo = document.getElementById("logo")

logo.addEventListener("click", () => {
    
    if (intro.classList.contains("desce")) {
        intro.classList.toggle("sobe")
    } else {
        intro.classList.toggle("desce")
    }
})