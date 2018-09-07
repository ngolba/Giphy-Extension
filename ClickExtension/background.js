chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        downloadUrlStored: ''
    }, function () {
        console.log("made it here");
    });

})

let urlSent = false;

function processMessage(request, sender, sendResponse) {
    console.log('hey')
    console.log(request.message);
    console.log(request.urlSent);
    sendResponse({
        response: 'background response'
    });
    chrome.storage.sync.get(['downloadUrlStored'], function (result) {
        chrome.downloads.download({
            url: result.downloadUrlStored,
            saveAs: true
        })
    });
}

chrome.runtime.onMessage.addListener(processMessage);