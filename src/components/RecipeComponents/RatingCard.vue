<template>
    <section class="wrapper">
        <div class="rating-card">
            <div class="info-container">
                <div class="text-container">
                    <h3>Vad tyckte du om receptet?</h3>
                    <p v-if="!sent">Klick på glasen för att ge ditt betyg!</p>
                    <p v-else>Tack för ditt betyg!</p>
                </div>

                <RatingFunction 
                    :recipeId="recipeId"
                    @rating-changed="userRating = $event" 
                />

                <Button class="submit-btn"
                        :btnText="sent ? 'Skickat!' : 'Skicka betyg'" 
                        variant="primary" 
                        :showArrow="true"
                        @click="submitRating"
                />
            </div>

            <div class="img-container">
                <img src="/img/rating-img.png" alt="Hand holding a drink" class="rating-image">
                <BackgroundLines/>
            </div>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="699" viewBox="0 0 1440 699" fill="none" class="element">
            <path d="M-40.1365 22.7296L29.0208 137.358C132.305 308.551 350.981 372.004 531.05 285.115C716.587 195.589 941.858 268.057 1037.84 450.336C1132.22 629.574 1349.99 704.137 1534.42 620.369L1708.35 541.376" stroke="#A5D1D0" stroke-width="88"/>
        </svg>
    </section>
</template>

<script>
import RatingFunction from './RatingFunction.vue';
import Button from '../Button.vue';
import BackgroundLines from './BackgroundLines.vue';

export default {
    components: {
        RatingFunction,
        Button,
        BackgroundLines
    },

    props: {
        recipeId: { type:String, required:true }
    },

    data() {
        return {
            userRating: 0,   
            sent: false,      
            maxRating: 5
        };
    },

    emits: ["rating-updated"],

    methods: {
        async submitRating() { 
            if (this.userRating < 1 || this.userRating > 5) {
                alert("Betyg måste vara mellan 1 och 5");
                return;
            }

            try {
                await fetch(
                    `https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/${this.recipeId}/ratings`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "*/*"
                        },
                        body: JSON.stringify(this.userRating)
                    }
                );

                this.sent = true;

                const res = await fetch(
                    `https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/${this.recipeId}/ratings`
                );
                const ratingList = await res.json();
                const values = ratingList.filter(v => typeof v === "number");
                
                if (values.length === 0) return;
                const avg = values.reduce((sum, n) => sum + n, 0) / values.length;
                this.$emit("rating-updated", avg);

            }   catch (err) {
                console.error("POST Error:", err);
            }
        }

        }
    }

</script>


<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 132px 120px 52px 120px;
        max-height: 100%;
        position: relative;
    }

    .element {
        position: absolute;
        top: 54%;
        left: 50%;                    
        transform: translateX(-50%);                  
        z-index: -1;
        overflow: visible;           
        pointer-events: none;
    }

    .rating-card {
        display: flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        background-color: var(--white-color);
        border-top: 1px solid var(--red-color);
        border-left: 1px solid var(--red-color);
        border-right: 3px solid var(--red-color);
        border-bottom: 3px solid var(--red-color);
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 48px;
        padding: 88px 64px;
        width: 50%;
        border-right: 1px solid var(--red-color);
    }

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .rating-image {
        position: absolute;
        top: 0;
        right: 17%;
        width: 100%;
        max-width: 380px;
        height: auto;
    }

    .img-container {
        width: 50%;
    }

    h3 {
        color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
    }

    p {
        color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 20px;
        font-weight: 400;
        line-height: 24px; 
    } 

    @media (max-width: 991px) {
        .wrapper {
            padding: 72px;
        }

        .info-container {
            padding: 72px 52px;
        }

        .rating-image {
            right: 15%;
            max-width: 332px;
        }
    }

    @media (max-width: 767px) {
        .wrapper {
            padding: 52px;
        }

        .rating-card {
            display: flex;
            flex-direction: column;
        }

        .info-container {
            display: flex;
            align-items: stretch;
            justify-content: center;
            width: 100%;
            border-right: none;
            order: 2;
            padding: 40px;
        }

        .img-container {
            width: 100%;
            height: 424px;
            order: 1;
            border-bottom: 1px solid var(--red-color);
        }

        .rating-image {
            right: 24%;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .submit-btn.btn.primary{
            display: flex;
            margin: 0 auto;
        } 
    }

    @media (max-width: 575px) {
        .wrapper {
            padding: 40px 24px;
        }

        .element {
            top: 70%;
        }

        .info-container {
            padding: 40px 24px;
        }

        .text-container {
            gap: 32px;
        }

        .rating-image {
            right: 15%;
            max-width: 272px;
            padding-top: 40px;
        }

        h3 {
            font-size: 24px;
            line-height: 24px;
            text-align: center;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px; 
        }
    }
</style>