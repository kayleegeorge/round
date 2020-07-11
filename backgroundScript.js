//backgroundScript.js
// content script accesses page but background script does useful things

chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.tabs.executeScript(tab.id, {
        "file": "contentScript.js"
    });
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    
});
