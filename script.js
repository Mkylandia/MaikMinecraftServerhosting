document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`Navigiere zu: ${e.target.href}`);
        // Hier könnte man später eine API-Abfrage einbauen, 
        // um zu prüfen, ob der Server online ist.
    });
});

// Kleiner Animationseffekt beim Laden
window.onload = () => {
    console.log("Dashboard erfolgreich geladen.");
};
