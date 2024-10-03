CARD FORM
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


TITLE COUNT
Importo l' `useState` e `useEffect` che mi consentono di aggiungere stati ed effetti collaterali ai componenti.

Uso `useState` per inizializzare lo stato del componente una singola proprietà count, inizialmente impostata su 0.

Utilizzo `useEffect` per creare un effetto collaterale che aggiorna il titolo del documento ogni volta countche cambia lo stato.