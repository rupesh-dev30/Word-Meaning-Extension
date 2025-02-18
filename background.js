chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
      });
  }
});
