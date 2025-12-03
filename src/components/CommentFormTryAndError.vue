<script>
import axios from "axios";

export default {
  data() {
    return {
        allComments: [],   // här sparas datan från API
        loading: true,   
        error: null,      
        commentsArray: [], // återkopplar till hur jag gjorde innan, men får tänka om på den behövs
        name: "",
        title: "",
        writtenComment: "", 


      
    };
  },

  async mounted() {
    // körs automatiskt när komponenten laddas
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get   
        ("https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/79ace022-5a42-42a3-afac-094621ac6e7d/comments");
        this.allComments = response.data; 
      } catch (err) {
        this.error = "Kunde inte hämta data";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    logDescription() {
        for (const eachComment of this.allComments) {


            // Jag behöver lägga in något som kollar vilken sida man är inne på och visar kommentarer baserat på det. 
            // Kolla vilket recept id och matcha med recept id. 
            
            const titleAndComment = eachComment.comment.split("*-+!");

        console.log(
            "id: ", eachComment.id, 
            "namn: ", eachComment.name, 
            "rubrik: ", titleAndComment[0],
            "kommentaren: ", titleAndComment[1]
            );
        
            this.id = eachComment.id;
            this.name = eachComment.name;
            this.title = splitString[0];
            this.writtenComment = splitString[1]

            this.commentsArray.push(
                {id: eachComment.id, 
                name: eachComment.name, 
                title: titleAndComment[0], 
                writtenComment: titleAndComment[1], 
                time: eachComment.createdAt});
            

        }

        
    }
  }
};

 </script>
 
 <template>
<br/>
<br/>
<br/>
<br/>

<h1>Här kommer fetch från API</h1>


<div>
    <div v-if="loading">Laddar...</div>

    <div v-if="error">{{ error }}</div>

    <ul v-if="!loading && !error">
      <li v-for="eachComment in allComments" :key="eachComment.id">
        <strong>{{ eachComment.name }}</strong><br>
        {{ eachComment.comment }}
  
      </li>
    </ul>
  </div>

  <button @click="logDescription"></button>
  
    <h1>Now now...</h1>
    <p>{{ commentsArray }} </p>
    <p> {{ name }} </p>
    <p> {{ title }} </p>
    <p>{{ writtenComment }} </p>


    <h1>Annan variant</h1>
    <ul v-if="!loading && !error">
   <li v-for="showCom in commentsArray" :key="showCom.id">
   <strong>{{ showCom.name }}</strong><br>
        {{ showCom.title }}
         {{ showCom.writtenComment }}
          {{ showCom.time }}
   </li>
   </ul>

  <br/>
  <br/>
  <br/>

 </template>





 <style scoped>

.helpMsg {
    /* background: var(--baby-pink-color); */
    align-self: center;
    padding-left: 100px;
    padding-right: 100px;
    
}

button {
    background-color: rgb(153, 105, 199);
    color: #ffffff;
    border-radius: 50px;
    border-color: var(--red-color);
    box-shadow: none;
    padding: 8px 35px 8px 35px;


    font-family: instrument-sans, sans-serif;
    font-style: normal;
    font-size: 20px;
    font-weight: 600px;
    width: 200px;
}

.btn-comment-form {
    align-self: center;
    margin-bottom: 20px;
}
.btn-comment-form:hover {
    background-color: var(--white-color);
    border: 3px solid  rgb(153, 105, 199);
    color:  rgb(153, 105, 199);
}

.disabled-btn {
    background-color: rgb(214, 214, 214);
    color: rgb(132, 132, 132);
    cursor: not-allowed;
    border: 3px solid  rgb(214, 214, 214);
}
.disabled-btn:hover {
         background-color: rgb(214, 214, 214);
         border: 3px solid  rgb(214, 214, 214);
    }

.recept-name {
    color:  rgb(153, 105, 199);
    font-family: Kalnia;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px; 

    transition: transform 1s ease, opacity 1s ease;
    overflow: hidden;
}

.title-comment-cards {
    color:  rgb(153, 105, 199);
    font-family: Kalnia;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px; 
    padding-bottom: 7px;

    transition: transform 1s ease, opacity 1s ease;
    padding-bottom: 30px;
   
}

p {
    color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
        text-decoration: none;

}

.cocktail-name {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600px;;
}

.main-text {
    font-size: 16px;

}

.p-time {
    font-size: 14;
}

input, textarea {
    
    font-family: "Instrument Sans";
    font-size: 20px;
    color:  rgb(153, 105, 199);
    -webkit-text-fill-color:  rgb(153, 105, 199);

    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    padding: 8px 35px 8px 35px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid  rgb(153, 105, 199);
    background-color:  rgb(255, 255, 255);
    resize: none;
    }

    input:hover, textarea:hover {
    border-color: var(--dark-red-color);
    color: var(--dark-red-color);
    -webkit-text-fill-color: var(--dark-red-color);
}
   

.comment-card {
    background-color: var(--baby-pink-color);
    padding: 22px;
    width: 32%;
    padding-bottom: 60px;
    
}

.comment-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: space-between;
    margin: 0 auto;
    gap: 20px;
    width: 97%;
    
}

.comment-cards-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 35px;
    padding-top: 25px;
}

.comment-form-top {
    display: flex;
    justify-content: space-between;
    gap: 24px;
}

.comment-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 792px;
    margin: 0 auto;
    margin-bottom: 126px;
   
}
</style>