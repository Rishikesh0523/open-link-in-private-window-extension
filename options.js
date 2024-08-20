document.addEventListener('DOMContentLoaded', () => {
    const enableLoggingCheckbox = document.getElementById('enableLogging');
  
    // Load saved options
    chrome.storage.sync.get(['enableLogging'], (items) => {
      enableLoggingCheckbox.checked = !!items.enableLogging;
    });
  
    document.getElementById('optionsForm').addEventListener('submit', (event) => {
      event.preventDefault();
      chrome.storage.sync.set({
        enableLogging: enableLoggingCheckbox.checked
      }, () => {
        alert('Options saved');
      });
    });
  });
  