console.log('main loaded');
downloadFunction = function() {
    console.log('main');
    chrome.storage.sync.set({
    downloadUrlStored: this.getAttribute('href')
}, function () {
    console.log('sent')
})
chrome.runtime.sendMessage({
    urlSent: true,
    message: 'sent'
}, function (response) {
    console.log(response);
})
return;
}



document.links.addEventListener('click', downloadFunction);