chrome.storage.local.get("logs", (result) => {
  const logList = document.getElementById("devtools-log-list")!;
  result.logs.forEach((log: any) => {
    const li = document.createElement("li");
    li.textContent = `${log.method} ${log.url} - ${log.timeStamp}`;
    logList.prepend(li);
  });
});
