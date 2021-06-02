menu.onclick = function myFunction() {
    var x = document.getElementById('nav-menu');

    if(x.className === 'nav-list') {
        x.className += ' active';
    }
    else{
        x.className = 'nav-list';
    }
}