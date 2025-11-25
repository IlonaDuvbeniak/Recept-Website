<script>

export default {

    name: 'CommentForm',
    data() {
        return {
            newName: '',
            newTitle: '',
            newWrittenComment: '',
            newTime: '',  
            id: 0,
            
            commentsArray: [    
                { id: 1, name: "Anna", title: "Hej!", writtenComment: "Detta är en testkommentar", time: "17 Nov 2025" },
                { id: 2, name: "Moa", title: "Glassigt", writtenComment: "Rolig att ha till festen. De andra blev väldigt nyfikna så nästa gång ska jag nog bjuda på den till alla", time: "18 Nov 2025" },
                { id: 3, name: "Alva", title: "Gott Recept", writtenComment: "Jag älskar detta recept, tack för att du delade!", time: "19 Nov 2025" },
             ],

            message: '',
        }

    },
    methods: {
        submitAll () {
            this.commentTime();

            this.commentsArray.push(
                {id: this.commentsArray.length + 1, 
                name: this.newName, 
                title: this.newTitle, 
                writtenComment: this.newWrittenComment, 
                time: this.newTime});

            this.newName = "";
            this.newTitle = "";
            this.newWrittenComment = "";
            this.newTime = "";

        },
                
        commentTime() {
        const dateOfComment = Date();
        console.log(dateOfComment);
        const splittedDate = dateOfComment.split(" ");
        console.log(splittedDate[2], splittedDate[1], splittedDate[3]);
        
        this.newTime = `${splittedDate[2]} ${splittedDate[1]} ${splittedDate[3]}`;        
        return this.newTime;
        },

        handleClick() {
            if (this.newName.length < 2) {
                this.message = 'Namnet är för kort!'                
            } 
            else if (this.newName.length > 30) {
                this.message = 'Namnet är för långt!'                
            }
            else if (this.newTitle.length < 2) {
                this.message = 'Rubriken är för kort!'
            }
            else if (this.newTitle.length > 25) {
                this.message = 'Rubriken är för lång!'
            }
            else if (this.newWrittenComment.length < 10) {
                this.message = 'Kommentaren är för kort!'
            }
            else if (this.newWrittenComment.length > 200) {
                this.message = 'Kommentaren är för lång!'
            }
            else {
                this.message = 'Din kommentar är skickad!'
        
                console.log('Knappen fungerar som vanligt');
                this.submitAll ();
            }
        }
    }
}

</script>

<template>
  <form @submit.prevent="handleClick">
    <label>
        <div class="comment-form">
        <div class="comment-form-top">
            <h2 class="recept-name">Kommentar</h2>
            <input v-model="newName" placeholder="Ditt namn"></input>
        </div>
        
        <input v-model="newTitle" placeholder="Rubrik max 12 tecken"></input>
        <textarea v-model="newWrittenComment" placeholder="Skriv din kommentar"></textarea>
        <p class="helpMsg">{{ message }}</p>
        <button class="btn-comment-form" type="submit">Skicka -></button>
        
        </div>
    </label>
  </form>

 



  

<div class="comment-cards-container">
    <div v-for="comment in commentsArray" :key="comment.id" class="comment-card">
        
        <div class="comment-cards-top">
            <p class="cocktail-name"><strong>{{ comment.name }}</strong></p>
            <p class="p-time">{{ comment.time }}</p>
        </div>
        <h3 class="title-comment-cards">{{ comment.title }}</h3>
        <p class="main-text">{{ comment.writtenComment }}</p>
        
    </div> 
</div> 

</template>

<style scoped>

.helpMsg {
    /* background: var(--baby-pink-color); */
    align-self: center;
    padding-left: 100px;
    padding-right: 100px;
    
}

button {
    background-color: var(--red-color);
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
    border: 3px solid var(--red-color);
    color: var(--red-color)
}

.recept-name {
    color: var(--red-color);
    font-family: Kalnia;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px; 

    transition: transform 1s ease, opacity 1s ease;
    overflow: hidden;
}

.title-comment-cards {
    color: var(--red-color);
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
    color: var(--red-color);
    -webkit-text-fill-color: var(--red-color);

    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    padding: 8px 35px 8px 35px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid var(--red-color);
    background-color: var(--white-color);
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