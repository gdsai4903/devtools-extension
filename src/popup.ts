document.addEventListener("DOMContentLoaded", () => {
  const logList = document.getElementById("log-list")!;
  const clearButton = document.getElementById("clear-logs");

  chrome.storage.local.get("logs", (result) => {
    if (!result.logs) return;

    result.logs.forEach((log: any) => {
      const li = document.createElement("li");

      if (log.method === "GET") {
        li.style.color = "lightgreen";
      }
      if (log.method === "POST") {
        li.style.color = "white";
      }

      li.textContent = `${log.method} ${log.url}`;
      if (log.payload && log.payload !== "No Payload") {
        const pre = document.createElement("pre");
        pre.textContent = `Payload: ${log.payload}`;
        li.appendChild(pre);
      }

      logList.prepend(li);
    });
  });

  clearButton?.addEventListener("click", () => {
    chrome.storage.local.set({ logs: [] }, () => {
      logList.innerHTML = "";
    });
  });
});
