// from my understanding, this is the script that can access the current page
// can interact with web pages that the browser visits.

console.log("content script working");
const storeName = $("a[href^='http']").eq(0).attr("href");
console.log(storeName);
console.log(document.domain);