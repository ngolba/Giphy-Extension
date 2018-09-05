document.body.style.backgroundColor = "orange"
let downloadUrl = '';

let downloadFunction = function () {
    downloadUrl = this.getAttribute('href');
    console.log(downloadUrl);
    chrome.storage.sync.set({
        downloadUrlStored: downloadUrl
    }, function () {
        console.log('sent')
    })

    chrome.runtime.sendMessage({
        urlSent: true, 
        message: 'sent'
    }, function(response) {
        console.log(response);
    })
    return;
    
function printResponse (message) {
    console.log(message.response);

}
}
function sendToBackground(event) {
    let send = chrome.runtime.sendMessage({
        message: 'sent'
    });
    send.then(printResponse);
}
let links = document.links;
let addClasses = function () {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', sendToBackground)
        links[i].classList.add('downloadClickable')
    }
    return;
}

addClasses();


// .addEventListener('click', sendToBackground);