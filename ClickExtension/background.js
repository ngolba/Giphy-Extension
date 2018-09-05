chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        downloadUrlStored: ''
    }, function () {
        console.log("made it here");
    });

})

let urlSent = false;

// chrome.runtime.onMessage.addListener( 
//     function(request, sender, sendResponse) {
//         console.log('here');
//         document.body.style.backgroundColor="red";
//         if (request.urlSent === true){
//             chrome.storage.sync.get(['downloadUrlStored'], function(result) {
//                 chrome.downloads.download( {
//                     url: result.downloadUrlStored}
//                 )
//             })
//             sendResponse({message: "recieved"})
//         } else {
//             sendResponse({message: "invalid url"})
//         }
//         return true;
//     }
// )

// chrome.storage.onChanged.addListener(function (changes, namespace) {
//     console.log('here')
//     for (key in changes) {
//         console.log('or here');
//         chrome.storage.sync.get(['downloadUrlStored'], function (result) {
//             chrome.downloads.download({
//                 url: result.downloadUrlStored
//             })
//         });
//     }

// })

function processMessage(request, sender, sendResponse) {
    console.log(request.message);
    sendResponse({response: 'response'});
}

chrome.runtime.onMessage.addListener(processMessage);