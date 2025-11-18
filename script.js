const filtroBtns = document.querySelectorAll(".filtro-btn");
const produtoCards = document.querySelectorAll(".produto-card");

filtroBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filtro = btn.dataset.filtro;

        filtroBtns.forEach((b) => b.classList.remove("ativo"));
        btn.classList.add("ativo");

        produtoCards.forEach((card) => {
            const categoria = card.dataset.categoria;

            if (filtro === "todos" || categoria === filtro) {

                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const contatoForm = document.getElementById("contato-form");

if (contatoForm) {
    contatoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Mensagem enviada com sucesso! Em breve entraremos em contato 😊");

   
        contatoForm.reset();
    });
}