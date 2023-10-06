const tabrepo = document.querySelector('#repositories-tab')
tabrepo.addEventListener('click', ()=>{
    SEARCH_INSERTED = false
})
const observer = new MutationObserver( function(mutations) {
    if( mutations.length>0 ) {
        const searchParams = new URLSearchParams( document.location.search.slice(1) )
        if( searchParams.has("tab") && (searchParams.get("tab") === 'repositories') && !SEARCH_INSERTED ) {
            SEARCH_INSERTED = true
            insertSearch()
        }
    }
})

if( tabrepo ) {
    observer.observe( tabrepo, {
        subtree:true,
        attributes:true,
        childList: true
    })
}