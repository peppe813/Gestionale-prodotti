let btnRegistraProdotto = document.querySelector("#btn-registra");
let btnAnnullaRegistrazione = document.querySelector("#btn-annulla-registrazione");
let form = document.querySelector("#form-registra-prodotto");
let btnSalvaRegistrazione = document.querySelector(".btn-salva-registrazione")

btnRegistraProdotto.addEventListener("click", ()=>{
    form.classList.remove("d-none");
    console.log("rimuovo")
})

btnAnnullaRegistrazione.addEventListener("click", ()=>{
    form.classList.add("d-none")
})

btnSalvaRegistrazione.addEventListener("click", controllaForm)

function controllaForm(event) {
    let campiForm = document.querySelectorAll(".form-control");
    let formValido = true;

    // Cicla su tutti i campi per verificare se sono vuoti
    campiForm.forEach(form => {
        if (form.value === "") {
            formValido = false;
        }
    });

    // Se ci sono errori, impedisci l'invio del form e mostra il messaggio
    if (!formValido) {
        let messaggio = document.createElement("p");
        messaggio.textContent = "Uno o più campi sono vuoti. Completa tutti i campi.";
        messaggio.id = "messaggio";
        messaggio.style.color = "red";

        let ultimoCampo = campiForm[campiForm.length - 1];
        ultimoCampo.parentNode.appendChild(messaggio);
        event.preventDefault();
    }

    campiForm.forEach(form => {
        form.addEventListener("focus", () => {
            let messaggio = document.querySelector("#messaggio");
                messaggio.remove(); // Rimuovi il messaggio di errore quando l'utente interagisce con il campo
        });
    });

    if(formValido){
        messaggioSuccesso = document.createElement("p");
        messaggioSuccesso.textContent = "Prodotto aggiunto con successo! Attendere...";
        messaggioSuccesso.id = "messaggio-successo";
        messaggioSuccesso.style.color = "green"; // Colore del messaggio di successo

        // Trova l'ultimo campo di input nel form
        let ultimoCampo = campiForm[campiForm.length - 1];

        // Aggiungi il messaggio di successo subito sotto l'ultimo campo
        ultimoCampo.parentNode.appendChild(messaggioSuccesso);

        // Impediamo l'invio immediato del form e aspettiamo 10 secondi
        event.preventDefault(); // Impediamo l'invio del form

        // Rimuovi il messaggio di successo dopo 10 secondi e invia il form
        setTimeout(() => {
            form.submit(); // Ora invia il form
        }, 3000); // 10 secondi di attesa
    }
}
