downloadFunction = function() {
    chrome.storage.sync.set({
    downloadUrlStored: this.getAttribute('href')
}, function () {
})
chrome.runtime.sendMessage({
    urlSent: true,
    message: 'sent'
}, function (response) {
})
return;
}

chrome.storage.sync.get(['randomClassCode'], function (result) {
    randomClass = result.randomClassCode;
});

document.addEventListener('click', function(event) {
    if(event.target.classList.contains(randomClass))
    {
        downloadFunction();
    }
}, false);