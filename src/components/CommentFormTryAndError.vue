 <script>
export default {

    name: 'CommentFormTryAndError',
    data() {
        return {
            testNamn: '',




            newName: '',
            newTitle: '',
            newWrittenComment: '',
            
            showErrorMsg: false,
            errorMessage: "",
            isReady: false,
        }
    },

    methods: {
            //när man cklickar så aktiveras den här funktionen, som en aktiverar submitAll.
        trySubmit () {
            const testValidaty = this.isInvalid();
            this.showErrorCode();        
            },

        isInvalid() {
            console.log ("under getErrorCode ()")
            if (this.newName.length < 5) return 1;
            if (this.newName.length > 20) return 2;
            if (this.newTitle.length < 5) return 3;
            if (this.newTitle.length > 20) return 4;
            if (this.writtenComment.length < 10) return 5;
            if (this.writtenComment.length > 200) return 6;
            return 0; // allt okej
        },

        showErrorCode() {
            switch (testValidaty) {
                case 1:
                    this.errorMessage = "Namn behöver vara längre än 5 tecken";
                    showErrorMsg = true;
                break;

                case 2:
                    this.errorMessage = "Namn behöver vara kortare än 20 tecken";
                    showErrorMsg = true;
                break;

                case 3:
                    this.errorMessage = "Rubriken behöver vara längre än 5 tecken";
                    showErrorMsg = true;
                break;
                
                case 4:
                    this.errorMessage = "Rubriken behöver vara kortare än 20 tecken";
                    showErrorMsg = true;
                break;

                case 5:
                    this.errorMessage = "Kommentaren behöver vara längre än 10 tecken";
                    showErrorMsg = true;
                break;

                case 6:
                    this.errorMessage = "Kommentaren behöver vara kortare än 200 tecken";
                    showErrorMsg = true;
                break;

                default:
                    showErrorMsg = false;
                    this.submitAll();
                return;
            }
        }
    }

}



       
 </script>
 
 
 
 <template>
<br/>
<br/>


 <form @submit.prevent="trySubmit">
    <label>
        <input v-model="testNamn">Namn</input>
        <button> trySubmit</button>
    </label>
  </form>

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

 </template>