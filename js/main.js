//Debug console.log('It works!');

/** ESERCIZIO
 * Creare un nuovo todo attraverso un campo di testo
* Rimuovere uno specifico todo attraverso il click su un icona per la rimozione nel todo stesso
* Ricordiamoci di dare un feedback all'utente nell'interfaccia se non ci sono elementi todo nella lista.
 * 
 */

 
const app = new Vue({
    el: "#app",
    data: () => ({
      valueTask: undefined,
      tasksList: [
        { name: 'Ritrovare chi abbiamo perduto', done: false },
        { name: 'Imparare a fare pace', done: true },
        { name: 'Essere gentili', done: false }
      ]
    }),
    computed: {
      taskClass() {
        return {
          'task': true,
          'border-task': this.tasksList.length > 1
        }
      }
    },
    methods: {
      onSubmitForm() {
        if (this.valueTask) {
          this.tasksList.push({ name: this.valueTask, done: false });
          this.valueTask = '';
        }
      },
      onRemoveTask(indexTask) {
        this.tasksList.splice(indexTask, 1);
      }
    }
  });