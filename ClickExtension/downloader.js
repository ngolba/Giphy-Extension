let randomClass = Math.random();
chrome.storage.sync.set({randomClassCode: randomClass});

// let links = document.links;
let links = $("[href$='.gif']") ; 
console.log(links);

console.log(links);
let addClasses = function () {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', downloadFunction)
        links[i].classList.add(randomClass)
    }
    return;
}

addClasses();

