 <script>
export default {

    name: 'CommentFormTryAndError',
    data() {
        return {

            newName: '',
            name: "",
            newTitle: '',
            title: '',
            newWrittenComment:'',
            writtenComment: '',

            
            helpMessage: "",
            invalid: null,

            message: 'nothing to say',
            showMessage: false, 
        }
    },

    methods: {
            //när man cklickar så aktiveras den här funktionen, som en aktiverar submitAll.
     
        trySubmit (){
            console.log ("Tell me, is this the right way to China?");
                this.name = this.newName;
                this.newName = "";
                this.title = this.newTitle;
                this.newTitle = "";
                this.writtenComment = this.newWrittenComment;
                this.newWrittenComment = "";

        },

            
        
        
        handleClick() {
            if (this.newName.length < 2) {
                this.message = 'Namnet är för kort!'                
            } 
            else if (this.newName.length > 20) {
                this.message = 'Namnet är för långt!'                
            }
            else if (this.newTitle.length < 2) {
                this.message = 'Rubriken är för kort!'
            }
            else if (this.newTitle.length > 20) {
                this.message = 'Rubriken är för lång!'
            }
            else if (this.newWrittenComment.length < 10) {
                this.message = 'Kommentaren är för kort!'
            }
            else if (this.newWrittenComment.length > 200) {
                this.message = 'Kommentaren är för lång!'
            }
            else {
                this.message = 'Bra längt på allt'
        
                console.log('Knappen fungerar som vanligt');
                this.trySubmit ();
            }
        }


       

        
    }

}



       
 </script>
 
 
 
 <template>
<br/>
<br/>


 <form @submit.prevent="handleClick">
    <label>
        <input v-model="newName">Namn</input>
        <input v-model="newTitle">Rubrik</input>
        <input v-model="newWrittenComment">Kommentar</input>
        <button > trySubmit</button>
    </label>
  </form>

  <h2>{{ name }}</h2>
  <h2>{{ title }}</h2>
  <h2>{{ writtenComment }}</h2>
  <p>{{ message }}</p>

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

 </template>

 <style scoped>

button:disabled { 
    cursor: not-allowed; 
    opacity: 0.6;
}
</style>