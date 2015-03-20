function onClickHandler(info, tab) {
    console.log(info.menuItemId + " clicked.");
    chrome.tabs.sendMessage(tab.id, {query : "Google"}, function(response) {
        console.log("responded.");
        // console.log(response.result);

        if(response.count > 0) {
            var textArea = document.createElement("textarea");
            textArea.style.cssText = "position:absolute;left:-100%";

            document.body.appendChild(textArea);

            textArea.value = response.result;
            textArea.select();
            document.execCommand("copy");

            document.body.removeChild(textArea);
        }

        alert(response.count + " element(s) copied!");
    });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": "Search Selected and Copy Them.",
        "id": "search_id",
        "contexts": ["selection"]
    });
    console.log("menu created.");

});
