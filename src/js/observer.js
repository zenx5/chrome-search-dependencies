const localbar = document.querySelector('#repositories-tab')
const observer = new MutationObserver( function(mutations) {
    if( mutations.length>0 ) {
        const btnSearch = document.querySelector('#chrome-extension-github-search')
        const searchParams = new URLSearchParams( document.location.search.slice(1) )
        if( searchParams.has("tab") && (searchParams.get("tab") === 'repositories') && !btnSearch ) {
            insertSearch()
        }
    }
})

observer.observe( localbar, {
    subtree:true,
    attributes:true,
    childList: true
})
