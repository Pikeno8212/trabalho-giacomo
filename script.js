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

        const nome = document.getElementById("contato-nome").value.trim();
        const email = document.getElementById("contato-email").value.trim();
        const assunto = document.getElementById("contato-assunto").value.trim();
        const mensagem = document.getElementById("contato-mensagem").value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        const numeroWhats = "5551981575692";

        const texto =
            `Olá, meu nome é ${nome}.

Assunto: ${assunto}
E-mail: ${email}

Mensagem:
${mensagem}`;

        const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
        contatoForm.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".destaques-carousel");
    if (!carousel) return;

    const slides = carousel.querySelectorAll(".slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const dots = carousel.querySelectorAll(".dot");
    const counter = carousel.querySelector(".carousel-counter");

    let current = 0;

    function mostrarSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach((slide, i) => {
            slide.classList.toggle("ativo", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("ativo", i === index);
        });

        if (counter) {
            counter.textContent = `${index + 1} / ${slides.length}`;
        }

        current = index;
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            mostrarSlide(current - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            mostrarSlide(current + 1);
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.index);
            mostrarSlide(index);
        });
    });

    mostrarSlide(0);

    setInterval(() => {
        mostrarSlide(current + 1);
    }, 5000);
});
