// What's Different ?
// 1. At first, the theme is decided by the theme of your OS.
// 2. Once the user has chosen a theme, then his/her preference will be respected next time opening the page, irrespective of the theme of their OS.

const body= document.querySelector("body")

function setDarkOrLight() {
    body.classList.remove("light","dark")
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add("dark")
    } else {
        body.classList.add("light")
    }
}
if (localStorage.getItem("theme")){
    body.classList.remove("light","dark")   
    body.classList.add(localStorage.getItem("theme"))
} else{
    setDarkOrLight()
}

window.matchMedia('(prefers-color-scheme: dark)')
.addEventListener("change",()=>{
    if (!localStorage.getItem("theme")){
        setDarkOrLight()
    }
})

document.querySelector("button").addEventListener("click", ()=>{
    const isDark= body.classList.contains("dark");

    body.classList.remove("light","dark")
    body.classList.add(isDark ? "light" : "dark" )

    const currentTheme = body.className
    localStorage.setItem("theme",`${currentTheme}`)
})