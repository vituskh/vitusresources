//Version 2.1

//Load CSS
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

//Lav navbaren
function loadnavbar() {
    var temp = '<nav id="navbar" class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation"> <div class="navbar-brand"> <a class="navbar-item" href="https://vitusverden.github.io"> Hjem </a> <button class="button is-light" id="themeknap" onclick="fliptheme()">Dark mode</button> <a role="button" onclick="toggleNavbar()" id="navbar-burger" class="navbar-burger" aria-label="menu" aria-expanded="false"> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> </a> </div> <div id="navbar-menu" class="navbar-menu"> <div class="navbar-start"> <div class="navbar-item has-dropdown is-hoverable"> <a class="navbar-link"> Vitus\' random stuff </a> <div class="navbar-dropdown"> <a class="navbar-item" href="https://vitusverden.github.io/citater">Citatlisten</a> <a class="navbar-item" href="https://vitusverden.github.io/minmaxing-spil">Minmaxing spil</a> <a class="navbar-item" href="https://vitusverden.github.io/mcmaterialer">Antal til mc stacks</a> <a class="navbar-item" href="https://vitusverden.github.io/primefactoring">Primtalsfaktorisering</a> <a class="navbar-item" href="https://vitusverden.github.io/emilsnavn">Hvad hedder Emil i dag?</a> </div> </div> <div class="navbar-item has-dropdown is-hoverable"> <a class="navbar-link"> Vitus\' rollespils stuff </a> <div class="navbar-dropdown"> <a class="navbar-item" href="https://vitusverden.github.io/erderrollespil">Er der rollespil idag?</a> <a class="navbar-item" href="https://vitusverden.github.io/wfrpcareers">WFRP Career system</a> <a class="navbar-item" href="https://vitusverden.github.io/rollespilsperception">Slå perception i WFRP nemt</a> <a class="navbar-item" href="https://vitusverden.github.io/odds">WFRP magi odds</a> </div> </div> </div> </div> </nav><br>'
    var temp2 = temp + document.getElementsByTagName("body")[0].innerHTML
     
    document.getElementsByTagName("body")[0].innerHTML = temp2
    document.getElementsByTagName("body")[0].classList.add("has-navbar-fixed-top")

};

//Navbar funktion til at få mobilversionen til at virke
function toggleNavbar() {
    if(document.getElementById("navbar").classList.contains("is-active")) {
        document.getElementById("navbar").classList.remove("is-active")
        document.getElementById("navbar-burger").classList.remove("is-active")
        document.getElementById("navbar-menu").classList.remove("is-active")
    } else {
        document.getElementById("navbar").classList.add("is-active")
        document.getElementById("navbar-burger").classList.add("is-active")
        document.getElementById("navbar-menu").classList.add("is-active")
    }
}

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