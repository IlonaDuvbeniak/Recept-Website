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
                { id: 1, name: "Julia", title: "Kors i taket!", writtenComment: "Sablar var rolig sida! Den här ska jag testa!", time: "17 Nov 2025" },
                { id: 2, name: "Moa", title: "Glassigt", writtenComment: "Rolig att ha till festen. De andra blev väldigt nyfikna så nästa gång ska jag nog bjuda på den till alla", time: "18 Nov 2025" },
                { id: 3, name: "Alva", title: "Mer krisp?", writtenComment: "Väldigt god, men hade det inte varit kul med lite krisp i den? :D", time: "19 Nov 2025" },
                { id: 4, name: "Måsen från Sigtuna", title: "Tjusigt!", writtenComment: "Amazing, just amzing, ni har lyckats igen!", time: "19 Nov 2025" },
                { id: 5, name: "Johanna", title: "Jodå", writtenComment: "Rolig att ha till festen. De andra blev väldigt nyfikna så nästa gång ska jag nog bjuda på den till alla", time: "20 Nov 2025" },
                { id: 6, name: "E. Jonsson", title: "Allmänt gott", writtenComment: "Jag gillar drinken, tack.", time: "21 Nov 2025" },
            ],

            message: '',

            showComStart: 0,
            showComEnd: 3,

            disableRightButton: false,
            disableLeftButton: true,
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
            
            this.showComStart = this.commentsArray.length -3
            this.showComEnd = this.commentsArray.length
            this.disableRightButton = true;
            this.disableLeftButton= false;

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
        },

        showCommentsRight () {
            if (this.showComEnd === this.commentsArray.length) {
                this.disableRightButton = true;
            } else {
                this.showComStart +=1;
                this.showComEnd +=1;
                this.disableLeftButton = false;
            }
        },
        
        showCommentsLeft () {
            if (this.showComStart === 0) {
                this.disableLeftButton = true;
            } else {
                this.showComStart -=1;
                this.showComEnd -=1;
                this.disableRightButton = false;
                
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
            <input v-model="newName" autocomplete="given-name" placeholder="Ditt namn">
        </div>
        
        <input v-model="newTitle" placeholder="Rubrik max 12 tecken">
        <textarea v-model="newWrittenComment" placeholder="Skriv din kommentar"></textarea>
        <p class="help-msg">{{ message }}</p>
        <button class="btn-comment-form" type="submit">Skicka -></button>
        
        </div>
    </label>
  </form>

 



  

<div class="comment-cards-container">
    <div 
        v-for="comment in commentsArray.slice(showComStart, showComEnd)" 
        :key="comment.id" 
        class="comment-card">
        
        <div class="comment-cards-top">
            <p class="cocktail-name"><strong>{{ comment.name }}</strong></p>
            <p class="p-time">{{ comment.time }}</p>
        </div>
        <h3 class="title-comment-cards">{{ comment.title }}</h3>
        <p class="main-comment-text">{{ comment.writtenComment }}</p>
        <button 
            class="btn-carousel" 
            id="btn-l-carousel"
            @click="showCommentsLeft"
            v-bind:class="{'disabled-btn': disableLeftButton}"
            v-bind:disabled="disableLeftButton"
            >
            <-
        </button>

        <button 
            class="btn-carousel" 
            id="btn-r-carousel"
            @click="showCommentsRight"
            v-bind:class="{'disabled-btn': disableRightButton}"
            :disabled="disableRightButton"
            >
            ->
        </button>
    </div> 
</div> 

</template>

<style scoped>
* {
  margin: 0 auto;
}

.help-msg {
    /* background: var(--baby-pink-color); */
    align-self: center;
    padding-left: 100px;
    padding-right: 100px;    
}
@media (max-width: 392px) {
    .help-msg {
        padding-left: 0px;
        padding-right: 0px;
    }
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

.btn-carousel {
    align-self: center;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    position: absolute;
    top: 40%;
    /* right: 45px; */
    border: 1px solid var(--red-color);
    

    transition: transform 0.2s ease;
    transform: scale(1);
    
        
}
.btn-carousel:hover {
    background-color: var(--red-color);
    color: var(--white-color);
    
    transform: scale(1.8);  
}

#btn-r-carousel {
    right: -45px; 
}

#btn-l-carousel {
    left: -45px;
}


@media (max-width: 393px) {
    #btn-r-carousel {
        right: 27%;
    }

    #btn-l-carousel {
        left: 27%;
    }

    .btn-carousel {
        border: 1px solid pink;
        top: 97%;
        width: 70px;
        height: 70px;
    }
    .btn-carousel:hover {
        transform: none;
    }
    .btn-carousel:active {
        transform: scale(1.2);
    }
}


.disabled-btn {
    background-color: #00000000;
    color: var(--red-color);
    cursor: not-allowed;
    border: 1px solid  var(--red-color);

    border-radius: 50%;
}
.disabled-btn:hover {
         background-color: #00000000;
         border: 1px solid  var(--red-color);
         transform: scale(1);
         color: var(--red-color);
    }


.btn-comment-form {
    margin: 0 auto;
    font-size: 20px;
}
@media (max-width: 393px) {
    .btn-comment-form {
    width: 100%;
    margin-top: -15px;
}
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
@media (max-width: 393px) {
    .recept-name {
        font-size: 40px;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    
}

.title-comment-cards {
    color: var(--red-color);
    font-family: Kalnia;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px; 

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

.main-comment-text {
    font-size: 16px;
}

.p-time {
    font-size: 14;
}

@media (max-width: 393px){
    .title-comment-cards {
        font-size: 30px; 
    }    
    p {
        font-size: 14px;
    }
    .cocktail-name {
    font-size: 20px;
    }
    .main-comment-text {
    font-size: 14px;
    }
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

@media (max-width: 393px) {
    input, textarea {
         
         padding: 8px 35px 8px 35px;
         width: 100%;
    }
}


.comment-card {
    background-color: var(--baby-pink-color);
    padding: 22px;
    width: 30%;
    padding-bottom: 60px;
    margin: 0 auto;
    aspect-ratio: 7 / 6;
}
@media (max-width: 393px) {
    .comment-card {
        width: 90%;
    }
}

.comment-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: space-between;
    margin: 0 auto;
    /* gap: 20px; */
    width: 86%;   
    position: relative;
}
@media (max-width: 393px) {
    .comment-cards-container {
        flex-direction: column;
        gap: 20px;
    }
     
}

.comment-cards-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 35px;
    padding-top: 25px;
}
/* @media (max-width: 393px) {
    .comment-cards-top {
        flex-direction: column;

    }
     
} */

.comment-form-top {
    display: flex;
    justify-content: space-between;
    gap: 24px;
}
@media (max-width: 393px) {
    .comment-form-top {
        justify-content: center;
        gap: 0px;
        flex-direction: column;
    }
}

.comment-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 792px;
    margin: 0 auto;
    margin-bottom: 60px;
    margin-top: 100px;
}
@media (max-width: 393px) {
    .comment-form {
        width: 90%;
    }
}
</style>