
function LoadPage() {
    if (window.innerWidth < 700 && window.location.pathname !== "/m") {
        window.location.replace("/m");
        return;
    }
    if (window.innerWidth >= 700 && window.location.pathname !== "/") {
        window.location.replace("/");
        return;
    }
}

function HandleResize() {
    if ((window.innerWidth < 700 && window.location.pathname !== "/m") || (window.innerWidth >= 700 && window.location.pathname !== "/")) {
        LoadPage(); // Lakukan pengalihan hanya jika perlu
    }
}

window.addEventListener("resize", HandleResize);
LoadPage(); ;
