(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("log-list"),t=document.getElementById("clear-logs");chrome.storage.local.get("logs",(t=>{t.logs.forEach((t=>{const o=document.createElement("li");o.textContent=`${t.method} ${t.url} - ${t.timeStamp} ${t.payload}`,e.prepend(o)}))})),t.addEventListener("click",(()=>{chrome.storage.local.set({logs:[]},(()=>{e.innerHTML=""}))}))}))})();