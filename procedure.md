Importo l' `useState`che mi consente di aggiungere uno stato al componente.
Definisco `CardForm` che he accetta una prop `addCity`. Questa prop è una funzione che verrà chiamata quando il modulo viene inviato.
Utilizzo `useState` per inizializzare `formData` che ha quattro proprietà: 
- title, 
- description, 
- imgUrl, 
- isVisitated

Definisco la funzione`handleInputChange` che verrà chiamata ogni volta che cambia un campo di input.
Definisco la funzione `handleSubmit` che verrà chiamata quando il modulo viene inviato.
Crea un nuovo oggetto `city` dallo state `formData`, chiama `addCity` prop con il nuovo oggetto e registra il nuovo city.