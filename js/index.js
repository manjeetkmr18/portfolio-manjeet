const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu');
const navli = document.getElementById('navlink');
bars.addEventListener('click', function () {
    mobileMenu.classList.toggle('overlay')
});


document.getElementById('navlink').addEventListener('click', function () {
    alert('clicked');
    document.getElementById('mobileMenu').classList.remove('overlay');
});


bars.addEventListener('click', function () { 
        if (mobileMenu.classList.contains('overlay')) {
            
            document.getElementById('bars').classList.remove('fa-bars');
            document.getElementById('bars').classList.add('fa-times');
        }
        else {
            document.getElementById('bars').classList.remove('fa-times');
            document.getElementById('bars').classList.add('fa-bars');
        }
});

