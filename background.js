chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openInIncognito") {
      try {
        chrome.windows.create({
          url: request.url,
          incognito: true
        }, window => {
          if (chrome.runtime.lastError) {
            console.error("Error creating incognito window:", chrome.runtime.lastError);
            sendResponse({success: false, message: chrome.runtime.lastError.message});
          } else {
            console.log("Incognito window created successfully:", window);
            sendResponse({success: true, windowId: window.id});
          }
        });
      } catch (error) {
        console.error("Unexpected error:", error);
        sendResponse({success: false, message: error.message});
      }
    }
  
    // Required to allow asynchronous sendResponse
    return true;
  });
  