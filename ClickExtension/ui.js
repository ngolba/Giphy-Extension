let clickExpand = document.getElementById('startListener');
let executed = false;

clickExpand.onclick = function () {
    console.log("clicked");
    if (!executed) {
        console.log('clicked');
        chrome.tabs.executeScript({
            file: 'downloader.js'
        })
    };
    

    executed = true;
}