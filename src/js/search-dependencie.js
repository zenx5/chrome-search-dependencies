(()=>{
    const btn = document.querySelector('#chrome-extension-github-search-button')

    btn.addEventListener('click', async event => {
        const extension = await chrome.management.getSelf()
        const queries = new URLSearchParams(document.location.search)
        const user = queries.get('user')
        //const url = "https://search-dependencies.vercel.app/api/extension"
        // const user = document.querySelector('.AppHeader-context-item-label')
        const target = document.querySelector('#chrome-extension-github-search-input')

        const response = await fetch(`http://localhost:3000/api/extension/${extension.id}?user=${user}&query=${target.value}`)
        const result = await response.json()

        console.log( result )
    } )

})()