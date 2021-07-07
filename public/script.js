
function toggleNav() {
    if (document.getElementById('mySidenav').style.transform === 'translate(0px, 0px)') {
        document.getElementById('mySidenav').style.transform = 'translate(-100%, 0)';
    } else {
        document.getElementById('mySidenav').style.transform = 'translate(0px, 0px)';
    }
}