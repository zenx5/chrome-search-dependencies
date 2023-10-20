const insertFrame = () => {

        list = document.querySelector("#user-repositories-list")
        const user = document.location.pathname.slice(1)
        const search = document.createElement("iframe")
        search.style.border = "none"
        search.style.width = "100%"
        search.style.backgroundColor = "transparent"
        // search.style.height = "120px"
        search.style.margin = "0px";
        search.style.padding = "0px";
        search.src = chrome.runtime.getURL("src/html/search.html?user="+user)
        list.before( search )
}
