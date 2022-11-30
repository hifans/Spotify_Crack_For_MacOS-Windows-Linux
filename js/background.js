chrome.webRequest.onHeadersReceived.addListener(function(details) { 
    if(details.responseHeaders.find(el => el.name == "Content-Type").value.includes("mp3"))
        return {redirectUrl: 'http://182.90.244.15/blank-mp3s/1sec.mp3'};
}, { urls: ["*://*.audio-akp-quic-spotify-com.akamaized.net/*", "*://*.audio-fa.scdn.co/*", "*://creativeservice-production.scdn.co/*"]}, ["blocking","responseHeaders"])
