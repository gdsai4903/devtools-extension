document.addEventListener("DOMContentLoaded", () => {
  const logList = document.getElementById("log-list")!;
  const clearButton = document.getElementById("clear-logs")!;

  chrome.storage.local.get("logs", (result) => {
    result.logs.forEach((log: any) => {
      const li = document.createElement("li");
      li.textContent = `${log.method} ${log.url} - ${log.timeStamp}`;
      logList.appendChild(li);
    });
  });

  clearButton.addEventListener("click", () => {
    chrome.storage.local.set({ logs: [] }, () => {
      logList.innerHTML = "";
    });
  });
});
