// from my understanding, this is the script that can access the current page
// can interact with web pages that the browser visits.

console.log("content script working");

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        console.log("here");
      if( request.message == "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);
        console.log("clicked browser action");
      }
    }
);