

    function toggleNav() {
       
        if(window.innerWidth < 786){
            if (document.getElementById('mySidenav').style.transform === 'translate(0px, 0px)') {
                document.getElementById('mySidenav').style.transform = 'translate(-100%, 0)'
                document.getElementById('mySidenav').style.transform = 'translate(-100%, 0)' 
            } else {
                document.getElementById('mySidenav').style.transform = 'translate(0px, 0px)';
                document.getElementById('mySidenav').style.visibility= 'visible';
                
            }
        }
        else if(document.getElementById('mySidenav').style.transform = 'translate(-100%, 0px)'){
            document.getElementById('mySidenav').style.transform = 'translate(0px, 0px)';
        }
        
    }


