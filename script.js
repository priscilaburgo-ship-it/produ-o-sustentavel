/* ==========================
   ACCORDION
========================== */

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight =
            content.scrollHeight + "px";
        }

    });

});

/* ==========================
   CONTROLE DE FONTE
========================== */

let fontSize = 16;

const aumentar =
document.getElementById("aumentarFonte");

const diminuir =
document.getElementById("diminuirFonte");

aumentar.addEventListener("click", () => {

    fontSize += 2;

    document.documentElement.style
    .setProperty("--font-size",
    fontSize + "px");

});

diminuir.addEventListener("click", () => {

    if(fontSize > 12){

        fontSize -= 2;

        document.documentElement.style
        .setProperty("--font-size",
        fontSize + "px");

    }

});

/* ==========================
   DARK MODE
========================== */

const tema =
document.getElementById("alternarTema");

tema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

/* ==========================
   LEITURA POR VOZ
========================== */

const ler =
document.getElementById("lerConteudo");

const parar =
document.getElementById("pararLeitura");

let fala;

ler.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const conteudo =
    document.getElementById("conteudoPrincipal")
    .innerText;

    fala =
    new SpeechSynthesisUtterance(conteudo);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;

    speechSynthesis.speak(fala);

});

parar.addEventListener("click", () => {

    speechSynthesis.cancel();

});

/* ==========================
   FORMULÁRIO
========================== */

const form =
document.querySelector(".formulario form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Inscrição realizada com sucesso!"
    );

    form.reset();

});

/* ==========================
   COMENTÁRIOS
========================== */

const botaoComentario =
document.querySelector(".comentarios button");

botaoComentario.addEventListener("click", () => {

    alert(
        "Comentário enviado com sucesso!"
    );

});