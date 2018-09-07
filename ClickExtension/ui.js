let clickExpand = document.getElementById('startListener');
let executed = false;

clickExpand.onclick = function () {
    console.log("clicked");
    if (executed === false) {
       
        executed = true;
        console.log('clicked');
        chrome.tabs.executeScript({
            file: 'downloader.js'
        })
        document.getElementById('startListener').innerHTML= 'All gifs are now downloadable.';
        
    }
    }
    
