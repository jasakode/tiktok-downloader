
function LoadPage() {
    if(window.innerWidth < 700 && window.location.pathname != "/m") {
        window.location.replace("/m")
        return
    } else if (window.innerWidth > 700 && window.location.pathname != "/") {
        window.location.replace("/")
        return
    }
}

window.addEventListener("resize", LoadPage);
LoadPage();
