(() => {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.greeting === "gettext"){
                (async () => {
                    const selected = window.getSelection().toString()
                    const texttosend = selected.length === 0 ? document.body.innerText : selected
                    console.log(texttosend)
                    const response = await chrome.runtime.sendMessage({greeting: "summtext", text:texttosend}, 
                    function(res){
                        //console.log(res)
                        sendResponse(res)
                        return true
                    })
                })()
                return true
            }
        }
    )
})()

// (() => {
//     chrome.runtime.onMessage.addListener(
//         async function(request, sender, sendResponse) {
//             if (request.greeting === "gettext"){
//                 console.log(typeof(sendResponse))
//                 const response = await chrome.runtime.sendMessage({greeting: "summtext", text:document.body.innerText, response: sendResponse}) 
//                 return true;
//             }
//         }
//     )
// })()