var purchaseTotal;
var round;
var original;

function getStore() {
    $('#store').empty();
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        document.querySelector('#store').textContent = tabs[0].url;
    });
}

// somehow get price from website
function getPrice() {
    purchaseTotal = 45.23;
    original = (Math.ceil(purchaseTotal) - purchaseTotal).toFixed(2);
    round = original;
    $('#price').empty();
    $('#price').append("<h1>$" + purchaseTotal + "</h1>");
}

function add() {
    if(round != 0) {
        round += 1;
    }
    else {
        round = original;
    }
    document.getElementById("rounded").innerHTML = round;
}
function subtract() {
    if (round - 1 > 0) {
        round -= 1;
    }
    else{
        round = 0;
    }
    document.getElementById("rounded").innerHTML = round;
}

document.addEventListener('DOMContentLoaded', function () {
    // getStore();
    getPrice();
    document.getElementById("rounded").innerHTML = round
});