function onClickHandler(info, tab) {
    console.log(info.menuItemId + " clicked.");
    chrome.extension.sendMessage({action : "none"}, function(response) {
        console.log("responded.");
    });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title" : "Search",
        "id" : "search_id"
    });
    console.log("menu created.");

});
