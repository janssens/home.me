//main.js file
console.log('Bonjour 👋 !');
console.log('le code source est disponible ici : https://github.com/janssens/home.me');

let triggers = document.querySelectorAll('a[data-modal="true"]');
let closers = document.querySelectorAll('.modal .overlay,.modal .close');

triggers.forEach((value, index) => {
    value.addEventListener('click',function (event){
        event.preventDefault();
        let dest = document.querySelector(event.target.getAttribute('href'));
        if (dest){
            dest.style.display = 'block';
        }
    })
});
closers.forEach((value, index) => {
    value.addEventListener('click',function (event){
        event.preventDefault();
        let modal = closest(event.target,'.modal');
        if (modal){
            modal.style.display = 'none';
        }
    })
});

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
}
