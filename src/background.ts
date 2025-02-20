chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    chrome.storage.local.get({ logs: [] }, (result) => {
      const logs = result.logs || [];
      logs.push({
        method: details.method,
        url: details.url,
        timeStamp: new Date().toISOString(),
        payload: details.requestBody
          ? JSON.stringify(details.requestBody)
          : "No Payload",
      });

      chrome.storage.local.set({ logs });
    });
  },
  { urls: ["<all_urls>"] },
  ["requestBody"],
);
