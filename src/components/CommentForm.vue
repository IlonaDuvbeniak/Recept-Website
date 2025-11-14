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
    commentTime() {
      const dateOfComment = this.time = Date();
      const splittedDate = dateOfComment.split(" ");
      console.log(splittedDate[0], splittedDate[2], splittedDate[1], splittedDate[4].slice(0,5));
     
      
      
      
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



  <p>Det här är från comment form</p>

</template>

<style scoped>

</style>