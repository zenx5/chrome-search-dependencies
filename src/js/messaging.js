
window.port = chrome.runtime.connect({
    name: Math.floor( Math.random()*99 )+"-"+Math.floor( Math.random()*99 )
});

window.port.onMessage.addListener( response => {
    switch( response.action ) {
        case ERROR:
            console.log(response.error)
            document.location.reload()
            break;

    }
});