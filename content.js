document.addEventListener("click", function(event) {
    if (event.ctrlKey && event.shiftKey && event.button === 0) {
      event.preventDefault();
      const link = event.target.closest("a");
  
      if (link && link.href) {
        chrome.runtime.sendMessage({
          action: "openInIncognito",
          url: link.href
        }, response => {
          if (response && response.success) {
            console.log("Link opened in incognito window:", link.href);
          } else {
            console.error("Failed to open link in incognito window:", response ? response.message : "Unknown error");
            alert("Failed to open link in incognito window. Please check console for details.");
          }
        });
      } else {
        console.warn("No valid link found under cursor.");
      }
    }
  });
  