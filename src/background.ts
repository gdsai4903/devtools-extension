chrome.webRequest.onCompleted.addListener(
  (details) => {
    chrome.storage.local.get({ logs: [] }, (result) => {
      const logs = result.logs;
      logs.push(details);
      chrome.storage.local.set({ logs });
    });
  },
  { urls: ["<all_urls>"] },
);
