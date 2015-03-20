function onMessageHandler(message, sender, sendResponse) {
    console.log("received.");
    var result = "";
    var count = 0;
    var query = window.getSelection().toString();
    if (query.length > 0) {
        console.log(window.getSelection().toString());
        $(":not(:has(*))").each( function (index, element) {
            if (~$(element).text().indexOf(query)) {
                // console.log($(element).html());
                result += $(element).get(0).outerHTML;
                result += "\n--------\n";
                count++;
            }
        });
    }

    sendResponse({result: result, count: count});
};

chrome.runtime.onMessage.addListener(onMessageHandler);
