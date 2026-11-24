document.addEventListener("DOMContentLoaded", function () {
    const chat = document.getElementById("chat-lateral");
    const boton = document.getElementById("toggle-chat");
    if (!chat || !boton) return;

    function aplicar(oculto) {
        chat.classList.toggle("oculto", oculto);
        boton.textContent = oculto ? "Mostrar chat" : "Ocultar chat";
        boton.setAttribute("aria-expanded", String(!oculto));
    }

    aplicar(localStorage.getItem("chatOculto") === "true");

    boton.addEventListener("click", function () {
        const oculto = !chat.classList.contains("oculto");
        aplicar(oculto);
        localStorage.setItem("chatOculto", oculto);
    });
});