let clickExpand = document.getElementById('startListener');
let executed = false;

clickExpand.onclick = function () {
    chrome.storage.sync.get(['downloaderExecuted'], function(result) {
        executed = result;
    });
    console.log("clicked");
    if (!executed) {
        console.log('clicked');
        chrome.tabs.executeScript({
            file: 'jquery-3.3.1.min.js'
        })
        chrome.tabs.executeScript({
            file: 'downloader.js'
        })
        document.getElementById('startListener').innerHTML = 'All links leading to gifs are now downloadable.';

    }
}