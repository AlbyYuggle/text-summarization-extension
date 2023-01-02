chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "summtext"){
            console.log(JSON.stringify({'text': request.text}));
            fetch('http://127.0.0.1:8000/summarize/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'text': request.text}),
            })
            .then(response => response.json())
            .then(response => sendResponse({summary: response}))
            .catch(error => console.log(error))
            return true
        }
    }
)


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.greeting === "summtext"){
//             console.log("background");
//             console.log(typeof(request.response))
//             request.response({summary: "hello you have reached the background script"})
//             sendResponse({})
//             return true
//         }
//     }
// )