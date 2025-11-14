<script>
export default {
    name: 'CommentForm',
    data() {
        return {
            name: '',
            title: '',
            writtenComment: '',
            clickedButton: console.log("hej!"),
            hej: console.log("hej från input!"),
            showText: "",
            buttonClicked: false,
            time: '',
            id: 0,
            // fetchedComments: data

        }
    },
    methods: {
        submitAll () {
        this.submitComment();
        this.commentTime();
        },
        submitComment() {
        // Logic to submit the comment
        console.log(this.name + " " + this.title + " " + this.writtenComment);
        },

        // eventuellt göra return på time så det kan matas in i createCommentObj
        commentTime() {
        const dateOfComment = this.time = Date();
        const splittedDate = dateOfComment.split(" ");
        console.log(splittedDate[0], splittedDate[2], splittedDate[1], splittedDate[4].slice(0,5));
        },

        // jobba på att få in id, namn, title, writtenComment och time här:
        createCommentObj(id, name, title, writtenComment, time) {
            const commentObj = new Object({
                id: this.id,
                name: this.id,
                title: this.id,
                writtenComment: this.writtenComment,
                time: this.time
            });
            console.log(commentObj);
            // return commentObj;
        },

        // Använd det här för att skapa nytt id nummer för varje kommentar.
        // Tex från att hämtat data från api med fetch.
        createIdNumber () {
            this.id++;
            console.log (this.id);
        },

     
        fetchifetch () {
            fetch('src/API/placeholderCommentsAPI.json') // sen tror jag att man kan lägga till /comments och kanske till och med id när man har backend
                .then(response => response.json())
                .then(data => console.log(data)) // det här visas i konsollen.... jag vet inte hur jag får ut det vidare till nästa steg. Hur kan jag få in det i en annan funktion tex eller i en variabel? När jag försöker blir det massor av grejer i console.loggen istället för objekten.
                .catch(err => console.error(err));
        }

    }
}

</script>

<template>
  <form @submit.prevent="submitAll">
    <label>
      <input v-model="name" placeholder="Namn"></input>
      <input v-model="title" placeholder="Rubrik"></input>
      <textarea v-model="writtenComment" placeholder="Din kommentar!"></textarea>
      <button type="submit">Submit Comment</button>
    </label>
  </form>

  <button v-on:click="commentTime">tid</button>

  <!-- <button v-on:click="clickedButton">Konsollen</button>
  <input id="input1" v-model="showText" v-on:input="hej" placeholder="skriv..."></input> -->

  <button v-on:click="createCommentObj">Skapa Objekt</button>

  <button v-on:click="createIdNumber">Räkna - funktion att använda för varje nytt Id</button>
  <div>{{ id }}</div>

  <button v-on:click="fetchifetch">Fetch Comments</button>

  {{ fetchedComments }}

</template>

<style scoped>

</style>