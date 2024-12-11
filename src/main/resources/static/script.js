let btnRegistraProdotto = document.querySelector("#btn-registra");
let btnAnnullaRegistrazione = document.querySelector("#btn-annulla-registrazione");
let form = document.querySelector("#form-registra-prodotto");
console.log(btnAnnullaRegistrazione)

btnRegistraProdotto.addEventListener("click", ()=>{
    form.classList.remove("d-none");
    console.log("rimuovo")
})

btnAnnullaRegistrazione.addEventListener("click", ()=>{
    form.classList.add("d-none")
})