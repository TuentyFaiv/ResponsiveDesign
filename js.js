const ipad = window.matchMedia('screen and (max-width: 767px)');

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-button');

ipad.addListener(validation);

function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideshow);
    }else{
        burgerButton.removeEventListener('click', hideshow);
    }
    console.log(event.matches);
}

validation(ipad);
function hideshow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}