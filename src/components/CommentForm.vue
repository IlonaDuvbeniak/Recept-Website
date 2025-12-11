<script>
import axios from "axios";
import Button from '@/components/Button.vue';

export default {
    name: 'CommentForm',
    components: {
        Button
    },
    data() {
        return {
            allComments: null,   // här sparas datan från API
            loading: true,
            error: null,
            activeRecipePage: this.$route.params.slug,
            //     activeRecipe: "",
            slugToRecipeIdInCommentsAPIlist:
                [

                    {slugName: "boozy-banshee-scream", recipeId: "c7721a9b-b3eb-4275-adee-b1f8c625bfb2"},  // this för tillfället, kan bytas till API i framtiden. 
                    {slugName: "bitter-tears", recipeId: "a07a3046-89d1-4f53-9ec8-8326cf3d7271"},
                    {slugName: "bye-bye-mary", recipeId: "a82062f9-221b-4657-820f-1d6dd41c995f"},
                    {slugName: "party-like-its-friday", recipeId: "26ed6192-86e4-4ef5-9b22-2973d1ff5cb2"},
                    {slugName: "exorcism", recipeId: "6a34ec5c-5e4d-4f75-aa5c-39eee5be952b"},
                    {slugName: "ghosted-and-roasted", recipeId: "c6b7a179-d1b4-4abc-8542-43d37c0ead41"},
                    {slugName: "ho-ho-hot-toddy", recipeId: "c7e986cb-0fe4-44f7-abab-55bac3c39647"},
                    {slugName: "island-bye-land", recipeId: "8d004646-0b8b-43bf-bfce-4c7474e87b8e"},
                    {slugName: "jingle-juice", recipeId: "fb991d8b-6f6c-4b97-bc05-06495054a3f6"},
                    {slugName: "mistle-toasted", recipeId: "b55fb64b-8b9b-4d36-93f3-92366cecbcd9"},
                    {slugName: "out-of-office", recipeId: "ff2c2211-d557-4d98-91cb-293d6a2cef61"},
                    {slugName: "potion-notions", recipeId: "60ed746d-ea8d-468f-b61d-fd843c4e58b3"},
                    {slugName: "santas-nightcap", recipeId: "62af4889-e4b3-4c99-99be-a654eeab4cfd"},
                    {slugName: "tgifizz", recipeId: "eb194c77-137d-4d11-8aa6-f1adb4009755"},
                    {slugName: "witch-please", recipeId: "092cc672-8840-4bc9-930c-19c404bb4ab7"},
                    {slugName: "dancing-on-tables", recipeId: "26ed6192-86e4-4ef5-9b22-2973d1ff5cb2"}
                ], 
                  

            eachCommentLocalArray: "",

            prettyDate: "",
            prettyMonth: "",
            prettyDateAndMonth: "",
            


            newName: '',
            newTitle: '',
            newWrittenComment: '',
            newTime: '',
            id: 0,

            commentsArray: [],

            message: '',

            x: window.innerWidth,
            showComStart: 0,
            showComEnd: 0,
            // ändrade från 3 till 0, se om det funkar


            disableRightButton: false,
            disableLeftButton: true,

            // x: window.matchMedia("(max-width: 600px)"),
         

           
        }
    },


    async mounted() {
        // körs automatiskt när komponenten laddas
        await this.fetchComments();
        // await this.loadRecipes();
    

    // //______________KÄNNER SIDSTORLEK____________________________________________________

        this.sizeDependentSlice();

        window.addEventListener("resize", this.handleResize);
        


    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        
        handleResize() {
            this.x = window.innerWidth;
            this.sizeDependentSlice();
        },


        //______________POSTA KOMMENTAREN____________________________________________________

        submitAll() {
            this.postCommentsToAPI();

            //löser så att submittade kommentaren syns utan refresh.
            this.commentsArray.push(
                {
                    name: this.newName,
                    title: this.newTitle,
                    writtenComment: this.newWrittenComment,
                    time: "Just nu"
                });

            this.newName = "";
            this.newTitle = "";
            this.newWrittenComment = "";
            // this.newTime = "";

            this.showComStart = this.commentsArray.length - 3
            this.showComEnd = this.commentsArray.length
            this.disableRightButton = true;
            this.disableLeftButton = false;
        },


        handleClick() {
            if (this.newName.length < 2) {
                this.message = 'Namnet är för kort!'
            }
            else if (this.newTitle.length < 2) {
                this.message = 'Rubriken är för kort!'
            }
            else if (this.newWrittenComment.length < 10) {
                this.message = 'Kommentaren är för kort!'
            }
            else {
                this.message = 'Din kommentar är skickad!'

                this.submitAll();
            }
        },


// __________________POSTA TILL API_______________________________________________________


        async postCommentsToAPI() {
            try {
                await axios.post(this.commentApiUrl(),
                    {
                        comment: (this.newTitle + "*-+!" + this.newWrittenComment),
                        name: this.newName
                    });
                console.log("Post till API gjord");
            } catch (err) {
                this.error = "Kunde inte skicka data";
                console.error("Post error:", err);
                console.log("Inget skickat");
            } finally {
                this.loading = false;
            }

        },


        // _______________SKAPAR EN URL BASERAT PÅ LISTA MED OBJEKT________________________________________


        commentApiUrl() {
            // Här hade jag velat göra en fetch istället för att ha en lista här..
            // Och i APIet jämfört slug namnet med name...
            // Hade behövts omvandla tillbaka till orginalnamn innan.
            // Sen hämtat det id som var kopplat.

            const findRecipeId = this.slugToRecipeIdInCommentsAPIlist.find(p => p.slugName === this.activeRecipePage);

            console.log("https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/" + findRecipeId.recipeId + "/comments");
            const urlForRecipe = ("https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/" + findRecipeId.recipeId + "/comments");
            return urlForRecipe;
        },


        // //______________HÄMTNING AV KOMMENTARER FRÅN API____________________________________________________

        async fetchComments() {
            try {
                const response = await axios.get(this.commentApiUrl());
                this.allComments = response.data;
                console.log("Hämting av API gjord");
            } catch (err) {
                this.error = "Kunde inte hämta data";
                console.error("Fetch error:", err);
                console.log("Inget hämtat");
            } finally {
                this.loading = false;
            }

            this.addToLocalArray();
        },


        addToLocalArray() {
            for (const eachComment of this.allComments) {

                const titleAndComment = eachComment.comment.split("*-+!");


                const apiTimeFormat = eachComment.createdAt.split("T");

        
                let dateFromApi = apiTimeFormat[0];


                // Från det här:  2025-12-08T19:16:59.179376   till 8 Nov


                // datum
                if ((dateFromApi[8]) == 0) {
                    //nollan borttagen
                    this.prettyDate = dateFromApi[9];
                } else {
                    this.prettyDate = dateFromApi.slice(8, 10);
                }


                // månad
                switch (dateFromApi.slice(5, 7)) {
                    case "01":
                        this.prettyMonth = "Jan";
                        break;
                    case "02":
                        this.prettyMonth = "Feb"
                        break;
                    case "03":
                        this.prettyMonth = "Mar"
                        break;
                    case "04":
                        this.prettyMonth = "Apr"
                        break;
                    case "05":
                        this.prettyMonth = "Maj"
                        break;
                    case "06":
                        this.prettyMonth = "Jun"
                        break;
                    case "07":
                        this.prettyMonth = "Jul"
                        break;
                    case "08":
                        this.prettyMonth = "Aug"
                        break;
                    case "09":
                        this.prettyMonth = "Sep"
                        break;
                    case "10":
                        this.prettyMonth = "Okt"
                        break;
                    case "11":
                        this.prettyMonth = "Nov"
                        break;
                    case "12":
                        this.prettyMonth = "Dec"
                        break;
                    default:
                        console.log("??");
                }


                this.prettyDateAndMonth = this.prettyDate + " " + this.prettyMonth;
                console.log(this.prettyDateAndMonth);

                
                this.commentsArray.push(
                        {
                            id: eachComment.id,
                            name: eachComment.name,
                            title: titleAndComment[0],
                            writtenComment: titleAndComment[1],
                            time: this.prettyDateAndMonth
                        });

            }

        },


        




        // //______________KARUSELLEN____________________________________________________


        showCommentsRight() {
            if (this.showComEnd === this.commentsArray.length) {
                this.disableRightButton = true;
            } else {
                this.showComStart += 1;
                this.showComEnd += 1;
                this.disableLeftButton = false;
            }
        },

        showCommentsLeft() {
            if (this.showComStart === 0) {
                this.disableLeftButton = true;
            } else {
                this.showComStart -= 1;
                this.showComEnd -= 1;
                this.disableRightButton = false;

            }
        },


        // //______________KÄNNER SIDSTORLEK____________________________________________________


        sizeDependentSlice() {
            if (this.x < 600) {
                this.showComEnd = this.showComStart + 1;
            } else if (this.x < 991 && this.x > 600) {
                this.showComEnd = this.showComStart + 2;
            } else {
                this.showComEnd = this.showComStart + 3;
            }
        },


    },
    computed: {

        // //______________HUR LÅNG ENS KOMMENTAR ÄR____________________________________________________



        characterCountName() {
            return this.newName.length;
        },
        characterCountTitle() {
            return this.newTitle.length;
        },
        characterCountWrittenCom() {
            return this.newWrittenComment.length;
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
                <input v-model="newName" autocomplete="given-name" placeholder="Ditt namn" maxlength="20"> 
                <p id="counter1">{{ characterCountName }}/10</p>
                <p id="counter2">{{ characterCountTitle }}/10</p>
                <p id="counter3">{{ characterCountWrittenCom }}/200</p>
            </div>
         
            <input v-model="newTitle" placeholder="Rubrik" class="input-form-end" maxlength="10">
            <textarea v-model="newWrittenComment" placeholder="Skriv din kommentar" class="input-form-end" maxlength="200"></textarea>
            
            <p class="help-msg">{{ message }}</p>
            <Button btnText="Submit" variant="primary" :showArrow="true" :disabled="false"></Button>
            
        </div>        
    </label>
  </form>






    <div class="comment-cards-container">
        <div 
            v-for="eachCommentLocalArray in commentsArray.slice(showComStart, showComEnd)" 
            class="comment-card"
            :key="eachCommentLocalArray.id"
        >

            <div class="comment-cards-top">
                <p class="commenter-name"><strong>{{ eachCommentLocalArray.name }}</strong></p>
                <p class="p-time">{{ eachCommentLocalArray.time }}</p>
            </div>

            <h3 class="title-comment-cards">{{ eachCommentLocalArray.title }}</h3>
            <p class="main-comment-text">{{ eachCommentLocalArray.writtenComment }}</p>

            
            <button 
                @click="showCommentsLeft"
                class="btn-carousel" 
                id="btn-l-carousel" 
                v-bind:class="{ 'disabled-btn': disableLeftButton }" 
                v-bind:disabled="disableLeftButton"
                aria-label="To the left"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M3.44062 16.0594C2.85469 15.4734 2.85469 14.5219 3.44062 13.9359L10.9406 6.43591C11.5266 5.84998 12.4781 5.84998 13.0641 6.43591C13.65 7.02185 13.65 7.97341 13.0641 8.55935L8.12344 13.5H25.5C26.3297 13.5 27 14.1703 27 15C27 15.8297 26.3297 16.5 25.5 16.5H8.12344L13.0641 21.4406C13.65 22.0265 13.65 22.9781 13.0641 23.564C12.4781 24.15 11.5266 24.15 10.9406 23.564L3.44062 16.064V16.0594Z" />
                </svg>

            </button>

            <button 
                @click="showCommentsRight"
                class="btn-carousel" 
                id="btn-r-carousel" 
                v-bind:class="{ 'disabled-btn': disableRightButton }" 
                :disabled="disableRightButton"
                aria-label="To the right"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M26.5594 16.0594C27.1453 15.4734 27.1453 14.5219 26.5594 13.9359L19.0594 6.43591C18.4734 5.84998 17.5219 5.84998 16.9359 6.43591C16.35 7.02185 16.35 7.97341 16.9359 8.55935L21.8766 13.5H4.5C3.67031 13.5 3 14.1703 3 15C3 15.8297 3.67031 16.5 4.5 16.5H21.8766L16.9359 21.4406C16.35 22.0265 16.35 22.9781 16.9359 23.564C17.5219 24.15 18.4734 24.15 19.0594 23.564L26.5594 16.064V16.0594Z" />
                </svg>

            </button>

        </div>
    </div>




</template>

<style scoped>
.help-msg {
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
    padding: 8px;


    font-family: instrument-sans, sans-serif;
    font-style: normal;
    font-size: 20px;
    font-weight: 600px;
    width: 200px;

}

.btn-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    position: absolute;
    top: 40%;
    border: 1px solid var(--red-color);
    fill: var(--white-color);

    transition: transform 0.1s ease;
    transform: scale(1);


}

.btn-carousel:hover {
    background-color: var(--red-color);
    color: var(--white-color);


    transform: scale(1.4);

}

#btn-r-carousel {
    right: -45px;
}

#btn-l-carousel {
    left: -45px;
}





.disabled-btn {
    background-color: #00000000;
    color: var(--red-color);
    cursor: not-allowed;
    border: 1px solid var(--red-color);
    fill: var(--red-color);
    border-radius: 50%;
}

.disabled-btn:hover {
    background-color: #00000000;
    border: 1px solid var(--red-color);
    transform: scale(1);
    color: var(--red-color);
}


.btn-comment-form {
    margin: 0 auto;
    font-size: 20px;
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
    color: var(--dark-red-color);
    font-family: Kalnia;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;

    transition: transform 1s ease, opacity 1s ease;
    padding-bottom: 26px;
    overflow-wrap: break-word;
}

p {
    color: var(--dark-red-color);
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
   
}

.commenter-name {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600px;
    overflow-wrap: break-word;
    width: 75%;
}



.main-comment-text {
    font-size: 16px;
    overflow-wrap: break-word;
}

.p-time {
    font-size: 14;
    overflow-wrap: break-word;
    width: 29%;
    text-align: end;
}



input,
textarea {

    font-family: "Instrument Sans";
    font-size: 20px;
    color: var(--red-color);
    -webkit-text-fill-color: var(--red-color);

    font-style: normal;
    font-weight: 400;
    padding: 8px 73px 8px 30px;
    height: 50px;
    border-radius: 100px;
    border-top: 1px solid var(--red-color);
    border-left: 1px solid var(--red-color);
    border-right: 3px solid var(--red-color);
    border-bottom: 3px solid var(--red-color);
    background-color: var(--white-color);
    resize: none;
    box-sizing: border-box;
}
textarea {
    padding-top: 10px;
}

input:focus-within {
    outline: 4px solid var(--blue-color);
    outline-offset: -3px;
}

input:hover,
textarea:hover {
    border-color: var(--dark-red-color);
    color: var(--dark-red-color);
    -webkit-text-fill-color: var(--dark-red-color);
}




.comment-card {
    background-color: var(--baby-pink-color);
    padding: 38px;
    padding-top: 20px;
    width: 30%;
    padding-bottom: 42px;
    margin: 0 auto;
    aspect-ratio: 7 / 6;
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


.comment-cards-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: none;
}

.comment-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 792px;
    margin: 0 auto;
    margin-bottom: 60px;
    margin-top: 100px;
}

#counter1 {
    position: absolute;
    top: 42%;
    right: 3%;
    background-color: rgb(255, 255, 255);

}

#counter2 {
    position: absolute;
    top: 145%;
    right: 3%;
}

#counter3 {
    position: absolute;
    top: 250%;
    right: 3%;
}


.comment-form-top {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
    position: relative;
}

.comment-form-top input {
    width: 63%;
    align-self: flex-end;
}

.comment-form h2 {
    width: 500px;
}



.input-form-end {
    width: 100%;
}
  
.input-form-end:focus-within {
    outline: 4px solid var(--blue-color);
    outline-offset: -3px;
}

@media (max-width: 991px) {
    .comment-card {
        width:48%;
    }

}

@media (max-width: 881px) {
    .comment-form {
        width: 90%;
        
    }
    .recept-name {
        font-size: clamp(55px, 7vw, 56px);
        margin: 0 auto;
    }
}

@media (max-width: 829px) {
    .recept-name {
        font-size: clamp(50px, 7vw, 53px);
        margin: 0 auto;
    }
}

@media (max-width: 780px) {
    .recept-name {
        font-size: clamp(44px, 7vw, 50px);
        margin: 0 auto;
    }

    .title-comment-cards {
        font-size: 30px;
    }

    p {
        font-size: 14px;
    }

    .commenter-name {
        font-size: 20px;
        order: 2;
    }

    .main-comment-text {
        font-size: 16px;
    }

    .p-time {
        order: 1;
        text-align: start;
    }

    .comment-cards-top {
        flex-direction: column;

    }

    .comment-form {
        width: 90%;
    }


}

@media (max-width: 600px) {
    #btn-r-carousel {
        right: -20px;
    }

    #btn-l-carousel {
        left: -20px;
    }

    .comment-card {
        width: 80%;
    }

    .commenter-name {
        font-size: 20px;
        order: 1;
    }

    .main-comment-text {
        font-size: 16px;
    }

    .p-time {
        order: 2;
    }

    .comment-cards-top {
        flex-direction: row;
    }

    .btn-carousel {
        top: 96%;
    }

    #btn-r-carousel {
        right: 30%;
    }

    #btn-l-carousel {
        left: 30%;
    }

    .recept-name {
        font-size: clamp(40px, 7vw, 44px);
    }

}

@media (max-width: 550px) {
    .help-msg {
        padding-left: 0px;
        padding-right: 0px;
    }

    #btn-r-carousel {
        right: 27%;
    }

    #btn-l-carousel {
        left: 27%;
    }

    .btn-carousel {
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

    .btn-comment-form {
        width: 100%;
        margin-top: -15px;
    }

    .recept-name {
        font-size: 40px;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .title-comment-cards {
        font-size: 30px;
    }

    p {
        font-size: 14px;
    }

    .commenter-name {
        font-size: 20px;
    }

    .main-comment-text {
        font-size: 16px;
    }

    .p-time {
        font-size: 14px;
    }

    input,
    textarea {
        /* padding: 8px 0px 8px 35px; */
        width: 100%;
    }

    .comment-card {
        width: 100%;
    }

    .comment-cards-container {
        flex-direction: column;
        gap: 20px;
    }

    .comment-form {
        width: 90%;
    }

    .comment-form-top {
        justify-content: center;
        gap: 0px;
        flex-direction: column;
    }

    .comment-form-top input {
        width: 100%;
    }

    .comment-form h2 {
        width: 100%;
        text-align: center;
    }

    #counter1 {
        top: 69%;
        right: 3%;
        background-color: rgb(255, 255, 255);

    }

    #counter2 {
        top: 124%;
        right: 3%;
    }

    #counter3 {
        top: 176%;
        right: 3%;
    }
}

@media (max-width: 393px) {
    #btn-r-carousel {
        right: 24%;
    }

    #btn-l-carousel {
        left: 24%;
    }
}
</style>
