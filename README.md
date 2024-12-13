# Gestionale CRUD per la gestione dei prodotti

## Descrizione
Questo progetto è un'applicazione web gestionale che permette di effettuare operazioni CRUD (Create, Read, Update, Delete) per gestire un inventario di prodotti. L'app è stata sviluppata utilizzando **Spring Boot**, **Thymeleaf**, **MySQL**, **HTML**, **CSS/Bootstrap** e **JavaScript**.

### Funzionalità principali
- **Visualizzazione** della lista prodotti con opzioni per:
  - Eliminare un prodotto
  - Modificare un prodotto
- **Aggiunta di nuovi prodotti** con:
  - Controllo dei campi obbligatori: la registrazione viene negata se i campi sono vuoti.
- Struttura scalabile per l'aggiunta di nuove funzionalità in futuro.

### Prossimi sviluppi
- Controllo per verificare se il prodotto che si sta inserendo esiste già.
- Possibilità di filtrare i prodotti per categoria e prezzo.

## Tecnologie utilizzate
- **Backend:** Spring Boot
- **Database:** MySQL
- **Frontend:** Thymeleaf, HTML, CSS/Bootstrap, JavaScript

### 2. Configura il database
1. Crea un database MySQL chiamato `product_db` (o usa il nome che preferisci e aggiorna la configurazione).
2. Esegui lo script SQL fornito in `src/main/resources/schema.sql` per creare la struttura del database. Per aggiungere dati iniziali, puoi eseguire anche `src/main/resources/data.sql`.

### 3. Configura l'applicazione
Apri il file `src/main/resources/application.properties` e aggiorna i parametri del database:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product_db
spring.datasource.username=tuo-username
spring.datasource.password=tuo-password
spring.jpa.hibernate.ddl-auto=update
```

## Struttura del progetto
- **src/main/java**: Contiene il codice sorgente dell'applicazione.
- **src/main/resources**: Include le risorse come il file `application.properties`, file SQL e template Thymeleaf.

## Contatti
Per domande o suggerimenti, puoi contattarmi su [LinkedIn](https://www.linkedin.com/in/giuseppe-saccone-047441220/) o aprire un'issue nella repository.

---
Grazie per il tuo interesse in questo progetto! 😊
