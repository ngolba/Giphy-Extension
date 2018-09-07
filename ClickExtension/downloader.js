
let links = document.links;
let addClasses = function () {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', downloadFunction)
        links[i].classList.add('downloadClickable')
    }
    return;
}

addClasses();

