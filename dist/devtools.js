(()=>{"use strict";chrome.storage.local.get("logs",(t=>{const e=document.getElementById("devtools-log-list");t.logs.forEach((t=>{const o=document.createElement("li");o.textContent=`${t.method} ${t.url} - ${t.timeStamp}`,e.appendChild(o)}))}))})();