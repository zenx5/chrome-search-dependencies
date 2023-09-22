(()=>{
    console.log("search.js")
    addEventListener('load', event => {
        list = document.querySelector("#user-repositories-list")
        const search = document.createElement("iframe")
        search.style.border = "none"
        search.src = chrome.runtime.getURL("src/html/search.html")
        list.before( search )
    })
})()
