//Load andet CSS og JS
var head = document.getElementsByTagName("HEAD")[0]
//Bulma
{
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
    head.appendChild(link)
}
//Vitus CSS
{
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = "https://vitusverden.github.io/vitusresources/style.css"
    head.appendChild(link)
}
//Fontawesome (ikke længere brugt)
/*{
    var script = document.createElement("script")
    script.src = "https://kit.fontawesome.com/7079259d72.js"
    head.appendChild(script)
}*/


//Lav navbaren
function loadnavbar() {
    var temp = '<nav class="navbar is-light" id="navbar" role="navigation" aria-label="main navigation"><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="https://vitusverden.github.io">Hjem</a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Vitus\' random stuff</a><div class="navbar-dropdown"><a class="navbar-item" href="https://vitusverden.github.io/citater">Citatlisten</a><a class="navbar-item" href="https://vitusverden.github.io/minmaxing-spil">Minmaxing spil</a><a class="navbar-item" href="https://vitusverden.github.io/mcmaterialer">Antal til mc stacks</a><a class="navbar-item" href="https://vitusverden.github.io/primefactoring">Primtalsfaktorisering</a><a class="navbar-item" href="https://vitusverden.github.io/emilsnavn">Hvad hedder Emil i dag?</a></div></div><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Vitus\' rollespils stuff</a><div class="navbar-dropdown"><a class="navbar-item" href="https://vitusverden.github.io/erderrollespil">Er der rollespil idag?</a><a class="navbar-item" href="https://vitusverden.github.io/wfrpcareers">WFRP Career system</a><a class="navbar-item" href="https://vitusverden.github.io/rollespilsperception">Slå perception i WFRP nemt</a><a class="navbar-item" href="https://vitusverden.github.io/odds">WFRP magi odds</a></div></div></div><div class="navbar-end"><div class="navbar-item"><div class="buttons"><a id="themeknap" class="button is-light" onclick="fliptheme()">Dark theme</a></div></div></div></div></nav><br><div id="content">' + document.getElementsByTagName("body")[0].innerHTML + "</div>"
    document.getElementsByTagName("body")[0].innerHTML = temp
    console.log(temp)
};

//Dark & light theme
var theme = "light"
function loadlasttheme() {
    if (localStorage.getItem("lasttheme") == "dark") {
        changetheme("dark")
    }

};
function changetheme(type) {
    if (type == "dark") {
        if (theme == "light") {
            document.getElementsByTagName("html")[0].classList.add("dark-mode")
            document.getElementsByTagName("body")[0].classList.add("dark-mode")
            document.getElementById("themeknap").textContent = "Light theme"
            document.getElementById("themeknap").classList.remove("is-light")
            document.getElementById("themeknap").classList.add("is-dark")
            document.getElementById("navbar").classList.add("is-dark")
            theme = "dark"
        }
    } else {
        if (theme == "dark") {
            document.getElementsByTagName("html")[0].classList.remove("dark-mode")
            document.getElementsByTagName("body")[0].classList.remove("dark-mode")
            document.getElementById("themeknap").textContent = "Dark theme"
            document.getElementById("themeknap").classList.add("is-light")
            document.getElementById("themeknap").classList.remove("is-dark")
            document.getElementById("navbar").classList.remove("is-dark")
            theme = "light"

        }
    }
}
function fliptheme() {
    if (theme == "light") { 
        changetheme("dark") 
        localStorage.setItem("lasttheme", "dark")
}
    else { 
        changetheme("light") 
        localStorage.setItem("lasttheme", "light")
    }
}

//Andet stuff
scrollTo(0, 0)

//On load
window.addEventListener('load', (event) => {
    loadnavbar()
    loadlasttheme()
  });