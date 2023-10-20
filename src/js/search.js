(async ()=>{
    const btn = document.querySelector('#chrome-extension-github-search-button')

    btn.addEventListener('click', async event => {
        btn.setAttribute('disabled', "")
        btn.innerText = 'Searching...'
        const extension = await chrome.management.getSelf()
        const queries = new URLSearchParams(document.location.search)
        const user = queries.get('user')
        //const url = `https://search-dependencies.vercel.app/api/extension/${extension.id}?user=${user}&query=${target.value}`
        const target = document.querySelector('#chrome-extension-github-search-input')
        try{
            const response = await fetch(`http://localhost:3000/api/extension/${extension.id}?user=${user}&query=${target.value}`)
            const result = await response.json()
            console.log( result )
            chrome.runtime.sendMessage( extension.id, result)
        } catch( error ) {
            console.log("Error en 'search-dependencie.js'", error)
        } finally {
            btn.removeAttribute("disabled")
            btn.innerText = 'Search'
        }
    } )

})()