document.addEventListener("DOMContentLoaded", function () {
    fetch("/emisoras-json/")
        .then(response => response.json())
        .then(data => {
            const tracks = data.map(emisora => ({
                metaData: {
                    artist: emisora.artist,
                    title: emisora.title
                },
                url: emisora.url,
                duration: 99999999
            }));

            const SkinGuardada = localStorage.getItem("SkinSave") || "/static/emisoras/skins/Sony CDX-MP3.wsz";

            const webamp = new Webamp({
                initialTracks: tracks,
                initialSkin: {
                    url: SkinGuardada
                },
                windowLayout: {
                    main:      { position: { top: 0,   left: 0 } },
                    equalizer: { position: { top: 116, left: 0 } },
                    playlist:  { position: { top: 232, left: 0 } },
                    milkdrop:  { position: { top: 0,   left: 275 }, size: { extraWidth: 0, extraHeight: 4 }, closed: true }
                }
            });

            webamp.renderWhenReady(document.getElementById("winamp-container")).then(() => {

                const ultimaRadio = localStorage.getItem("ultimaRadio");
                const indice = tracks.findIndex(t => t.url === ultimaRadio);
                if (indice >= 0) {
                    webamp.setCurrentTrack(indice);
                }

                webamp.onTrackDidChange(track => {
                    if (track) {
                        localStorage.setItem("ultimaRadio", track.url);
                    }
                });
                
                document.querySelectorAll('#skin-buttons button').forEach(button => {
                    button.addEventListener('click', () => {
                        const newSkinUrl = button.getAttribute('data-skin');
                        webamp.setSkinFromUrl(newSkinUrl);
                        localStorage.setItem("SkinSave", newSkinUrl);
                        console.log("Skin guardada: ", newSkinUrl);
                    });
                });
            });
        });
});
