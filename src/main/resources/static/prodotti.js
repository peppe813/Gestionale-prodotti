let btnModificaProdotto = document.querySelector("#modifica-prodotto");
console.log(btnModificaProdotto)
btnModificaProdotto.addEventListener("click", creaFormModifica)
function creaFormModifica(){
    let contenitoreForm = document.createElement("div")
    contenitoreForm.classList.add("proprieta-form-modifica")
    document.body.appendChild(contenitoreForm)
    let divForm = document.createElement("div")
    divForm.classList.add("layout-form-modifica")
    contenitoreForm.appendChild(divForm)
    divForm.innerHTML = `<form class="container-form d-flex flex-column p-2" action="registraProdotto" method="post" id="form-registra-prodotto">
        <div class="field-form mb-2">
            <label for="name" class="form-label">Nome Prodotto</label>
            <input type="text" name="nome" class="form-control">
        </div>
        <div class="field-form mb-2">
            <label for="prezzo" class="form-label">Prezzo Prodotto</label>
            <input type="number" name="prezzo" class="form-control">
        </div>
        <div class="field-form mb-2">
            <label for="descrizione" class="form-label">Descrizione Prodotto</label>
            <input type="text" name="descrizione" class="form-control">
        </div>
        <div class="field-form mb-2">
            <label for="quantita" class="form-label">Quantità Prodotto</label>
            <input type="number" name="quantita" class="form-control">
        </div>
        <div class="field-form mb-2">
            <label for="categoria" class="form-label">Categoria Prodotto</label>
            <input type="text" name="categoria" class="form-control">
        </div>
        <button type="submit" class="btn btn-success mb-2" >Registra</button>
    </form>`

    let chiudiFinestra = document.createElement("div");
    chiudiFinestra.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
    chiudiFinestra.classList.add("chiudi-finestra")
    divForm.appendChild(chiudiFinestra)

    chiudiFinestra.addEventListener("click", ()=>{
        contenitoreForm.classList.add("d-none")
    })
}