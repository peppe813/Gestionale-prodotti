document.addEventListener("DOMContentLoaded", () => {
    const modificaProdottoLinks = document.querySelectorAll(".modifica-prodotto");

    modificaProdottoLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita il redirect
            const url = event.target.closest("a").href;

            // Effettua una richiesta AJAX per recuperare i dati
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Errore nel recupero dei dati");
                    }
                    return response.json();
                })
                .then(data => {
                    // Mostra un form dinamico con i dati
                    mostraFormModifica(data);
                })
                .catch(error => {
                    console.error("Errore:", error);
                });
        });
    });
});

function mostraFormModifica(prodotto) {
    // Crea un form dinamico e precompila i dati
    const contenitoreForm = document.createElement("div");
    contenitoreForm.classList.add("proprieta-form-modifica");

    contenitoreForm.innerHTML = `
        <div class="layout-form-modifica">
            <form class="container-form d-flex flex-column p-2" action="/salvaModifica" method="post">
                <input type="hidden" name="id" value="${prodotto.id}">
                <div class="field-form mb-2">
                    <label for="nome" class="form-label">Nome Prodotto</label>
                    <input type="text" name="nome" class="form-control" value="${prodotto.nome}">
                </div>
                <div class="field-form mb-2">
                    <label for="prezzo" class="form-label">Prezzo Prodotto</label>
                    <input type="number" name="prezzo" class="form-control" value="${prodotto.prezzo}">
                </div>
                <div class="field-form mb-2">
                    <label for="descrizione" class="form-label">Descrizione Prodotto</label>
                    <input type="text" name="descrizione" class="form-control" value="${prodotto.descrizione}">
                </div>
                <div class="field-form mb-2">
                    <label for="quantita" class="form-label">Quantità Prodotto</label>
                    <input type="number" name="quantita" class="form-control" value="${prodotto.quantita}">
                </div>
                <div class="field-form mb-2">
                    <label for="categoria" class="form-label">Categoria Prodotto</label>
                    <input type="text" name="categoria" class="form-control" value="${prodotto.categoria}">
                </div>
                <button type="submit" class="btn btn-success mb-2">Salva</button>
                <button type="button" class="btn btn-danger" id="btn-annulla-modifica">Annulla</button>
            </form>
        </div>
    `;

    document.body.appendChild(contenitoreForm);

    // Aggiungi un listener per il bottone "Annulla"
    const btnAnnulla = contenitoreForm.querySelector("#btn-annulla-modifica");
    btnAnnulla.addEventListener("click", () => {
        contenitoreForm.remove(); // Rimuovi il form dalla pagina
    });
}
