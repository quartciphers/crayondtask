function toggleNav() {
    navSize = document.getElementById("mySidenav").style.width;
    if (navSize == '20%') {
        return close();
    }
    return open();
}

function open() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.background = "#4c09a6";
    document.getElementById("head").style.marginLeft = "300px";
    document.getElementById("mid").style.marginLeft = "300px";
}

function close() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    // document.getElementById("mySidenav").style.background = "white";
    document.getElementById("head").style.marginLeft = "0px";
    document.getElementById("mid").style.marginLeft = "0px";
}