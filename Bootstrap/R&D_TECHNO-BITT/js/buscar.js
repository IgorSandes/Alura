function pesquisar() {
    let termoPesquisa = document.getElementById("buscar").value.toLowerCase();
    const servicos = document.querySelectorAll(".card");

    servicos.forEach(servico => {
        const textoServico = servico.textContent.toLowerCase();
        if (textoServico.includes(termoPesquisa)) {
            servico.style.display = "block";
        } else {
            servico.style.display = "none";
        }
    });

    console.log("Termo de pesquisa:", termoPesquisa);
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    pesquisar();
});

