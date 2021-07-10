

if(window.innerWidth < 786){
    function toggleNav() {
        if (document.getElementById('mySidenav').style.transform === 'translate(0px, 0px)') {
            document.getElementById('mySidenav').style.transform = 'translate(-100%, 0)'
            document.getElementById('#tog-arrow').style.transform = 'rotate(0deg)';
        } else {
            document.getElementById('mySidenav').style.transform = 'translate(0px, 0px)';
        }
    }
}

