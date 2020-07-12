//backgroundScript.js
// content script accesses page but background script does useful things

console.log("background script");

console.log("bakcground", document.domain); //It outputs id of extension to console
chrome.tabs.query({ //This method output active URL 
    "active": true,
    "currentWindow": true,
    "status": "complete",
    "windowType": "normal"
}, function (tabs) {
    for (tab in tabs) {
        console.log(tabs[tab].url);
    }
});