
function LoadPage() {
    if(window.innerWidth < 700 && window.location.pathname != "/m") {
        window.location.replace("/m")
    } else if (window.innerWidth > 700 && window.location.pathname != "/") {
        window.location.replace("/")
    }
}

window.addEventListener("resize", LoadPage);
LoadPage();
