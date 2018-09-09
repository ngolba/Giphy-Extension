let initialize = function() {
    chrome.storage.sync.set({
        downloadUrlStored: '',
        downloaderExecuted: false
    })
}


chrome.runtime.onStartup.addListener(function () {
    console.log('startup');
    initialize();

})

chrome.tabs.onCreated.addListener(function() {
    console.log('new tab');
    initialize();
})

let urlSent = false;

function processMessage(request, sender, sendResponse) {

    sendResponse({
        response: request.urlSent
    });
    chrome.storage.sync.get(['downloadUrlStored'], function (result) {
        chrome.downloads.download({
            url: result.downloadUrlStored,
            saveAs: true
        })
    });
}

chrome.runtime.onMessage.addListener(processMessage);