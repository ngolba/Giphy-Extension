if (!document.getElementById('gifCreatorExecuted')){
    let randomClass = Math.random();
let links = $("[href$='.gif']");

chrome.storage.sync.set({
    randomClassCode: randomClass,
    downloaderExecuted: true
});

let addClasses = function () {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', downloadFunction)
        links[i].classList.add(randomClass)
    }
    $('body').append('<div id="gifCreatorExecuted">');
    return;
}

addClasses();
}
