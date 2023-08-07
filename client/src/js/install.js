// Getting the install button from index.html

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PW

// TODO: Add an event handler to the `beforeinstallprompt` event
// First line was pre-written code by UPENN 

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;
    // If the event prompt does not exist/is null
    if (!promptEvent) {
    return;
    }

    //  prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    // Browswer can read hidden class -- > button
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
