function displaytext(text){
    console.log(text)
    const textdiv = document.getElementById("summary")
    textdiv.innerHTML = text.summary.text
    return
}

async function gettext(){
    //console.log("clicked!")
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    //console.log(tab)
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: "gettext"}, displaytext);
    const textdiv = document.getElementById("summary")
    textdiv.innerHTML = "Summarizing ... "
}

document.getElementById("button1").addEventListener("click", gettext)
