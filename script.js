//Version 2.2.1
var theme = "light";

(function () {
    const style = false ? "./style.css" : "https://vituskh.github.io/vitusresources/style.css" //true for dev, false ellers

    //Load CSS
    var head = document.getElementsByTagName("HEAD")[0]
    //Vitus CSS
    {
        var link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = style
        head.appendChild(link)
    }
    //Lav navbaren
        function loadnavbar() {
            var element = document.querySelector("header") || document.querySelector("body")
        var toAdd = `<nav id="vitusNav_navbar" class="vitusNav_navbar" role="navigation">
        <a role="button" id="vitusNav_mobile-navbar-toggle" aria-label="menu" aria-expanded="false">
            Vis navigation
          </a>
          
        <div id="vitusNav_navbar-content">
            <a href="https://vituskh.github.io">
                Hjem
            </a>
            <a role="button" style="cursor:pointer" id="vitusNav_darkModeSwitch">Dark mode</a>
            <a href="https://vituskh.github.io/citater">Citatlisten</a>
            <div class="vitusNav_dropdown">
                <button id="vitusNav_dropbtn1" class="vitusNav_dropbtn">Random stuff &#9660;
                </button>
                <div id="vitusNav_dropcontent1" class="vitusNav_dropdown-content">
                    <a href="https://vituskh.github.io/minmaxing-spil">Minmaxing spil</a>
                    <a href="https://vituskh.github.io/mcmaterialer">Antal til mc stacks</a>
                    <a href="https://vituskh.github.io/primefactoring">Primtalsfaktorisering</a>
                    <a href="https://vituskh.github.io/emilsnavn">Hvad hedder Emil i dag?</a>
                </div>
            </div>
            <div class="vitusNav_dropdown">
                <button id="vitusNav_dropbtn2" class="vitusNav_dropbtn">Rollespil &#9660;
                </button>
                <div id="vitusNav_dropcontent2" class="vitusNav_dropdown-content">
                    <a href="https://vituskh.github.io/erderrollespil">Er der rollespil idag?</a>
                    <a href="https://vituskh.github.io/wfrpcareers">WFRP Career system</a>
                    <a href="https://vituskh.github.io/wfrp-skills-talents">WFRP Skills & Talents</a>
                    <a href="https://vituskh.github.io/rollespilsperception">Slå perception i WFRP nemt</a>
                    <a href="https://vituskh.github.io/odds">WFRP magi odds</a>
                </div>
            </div>
        </div>
    </nav>`.replaceAll(/\t/g,"").trim()
        if(document.querySelector("header")) {
            var template = document.createElement("template")
            template.innerHTML = toAdd
            element.prepend(template.content.firstChild)
        } else {
            var header = document.createElement("header")
            header.innerHTML = toAdd
            element.prepend(header)
        }
    };


    //Dark & light theme
    function loadlasttheme() {
        if (localStorage.getItem("lasttheme") == "dark") {
            changeTheme("dark")
        } else {
            changeTheme("light")
        }

    };
    function changeTheme(type) {
        var rootElement = document.querySelector(":root")
        if (type == "dark") {
            rootElement.style.setProperty("--backgroundColor", "#333")
            rootElement.style.setProperty("--textColor", "#fff")
            rootElement.style.setProperty("--navColor", "#444")
            rootElement.style.setProperty("--navHoverColor", "#2f2f2f")
            theme = "dark"
            document.querySelector("#vitusNav_darkModeSwitch").textContent = "Light mode"
            localStorage.setItem("lasttheme", "dark")

        } else {
            rootElement.style.setProperty("--backgroundColor", "#fff")
            rootElement.style.setProperty("--textColor", "#1b1b1b")
            rootElement.style.setProperty("--navColor", "#f4f4f4")
            rootElement.style.setProperty("--navHoverColor", "#dfdfdf")
            theme = "light"
            document.querySelector("#vitusNav_darkModeSwitch").textContent = "Dark mode"
            localStorage.setItem("lasttheme", "light")
        }
    }




    //Andet stuff
    scrollTo(0, 0)

    //On load
    window.addEventListener('load', async (event) => {
        //await loadNavbar()
        loadnavbar()
        loadlasttheme()
        document.querySelector("#vitusNav_darkModeSwitch").addEventListener("click", () => {
            if (theme == "light") {
                changeTheme("dark")
            } else {
                changeTheme("light")
            }
        })

        //Mobile vis/skjul navbar
        document.querySelector("#vitusNav_mobile-navbar-toggle").addEventListener("click", () => {
            var content = document.querySelector("#vitusNav_navbar-content")

            if(content.style.display === "block") {
                content.style.display = "none"
                document.querySelector("#vitusNav_mobile-navbar-toggle").textContent = "Vis navigation"
            } else {
                content.style.display = "block"
                document.querySelector("#vitusNav_mobile-navbar-toggle").textContent = "Skjul navigation"
            }
        })


        //Dropdowns
        document.querySelector("#vitusNav_dropbtn1").addEventListener("click", () => {
            document.querySelector("#vitusNav_dropcontent1").classList.toggle("vitusNav_show");
            document.querySelector("#vitusNav_dropbtn1").classList.toggle("vitusNav_show");
        })
        document.querySelector("#vitusNav_dropbtn2").addEventListener("click", () => {
            document.querySelector("#vitusNav_dropcontent2").classList.toggle("vitusNav_show");
            document.querySelector("#vitusNav_dropbtn2").classList.toggle("vitusNav_show");
        })

        // Close the dropdown if the user clicks outside of it
        window.addEventListener("click", (e) => {
            if (!e.target.matches('#vitusNav_dropbtn1')) {
                var dropdown1 = document.querySelector("#vitusNav_dropcontent1");
                if (dropdown1.classList.contains("vitusNav_show")) {
                    dropdown1.classList.remove("vitusNav_show");
                    document.querySelector("#vitusNav_dropbtn1").classList.remove("vitusNav_show");
        }
            }
            if (!e.target.matches('#vitusNav_dropbtn2')) {
                var dropdown2 = document.querySelector("#vitusNav_dropcontent2");
                if (dropdown2.classList.contains("vitusNav_show")) {
                    dropdown2.classList.remove("vitusNav_show");
                    document.querySelector("#vitusNav_dropbtn2").classList.remove("vitusNav_show");
                }
            }
        })
    });
})()