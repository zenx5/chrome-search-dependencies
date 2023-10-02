(()=>{
    console.log("search.js")
    addEventListener('load', event => {
        list = document.querySelector("#user-repositories-list")
        const search = document.createElement("iframe")
        search.style.border = "none"
        search.style.width = "100%"
        search.style.backgroundColor = "transparent"
        search.style.height = "100px"
        search.style.margin = "0px";
        search.style.padding = "0px";
        search.src = chrome.runtime.getURL("src/html/search.html")
        list.before( search )
    })
})()
