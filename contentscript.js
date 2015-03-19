chrome.extension.onMessage.addListener ( function(
    request, sender, sendResponse) {
    console.log("received.");
    alert("recieved.");
    sendResponse({});
});

alert(5678);
