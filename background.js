// silent is golden
chrome.runtime.onInstalled.addListener( async function(){
    const extension = await chrome.management.getSelf()
    const url = "http://localhost:3000/api/extension"

    const response = await fetch( url, {
        method:'post',
        body: JSON.stringify({
            code: extension.id,
            navigator: "chrome"
        })
    })
    const suscription = await response.json()
    console.log( suscription )
});
