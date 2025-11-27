<template>
    <section class="container">
        <div class="card">
            <div class="ingridient-container">
                <h2>Ingredienser</h2>
                <ul>
                    <li v-for="item in items" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="steps-container">
                <h2>Steg för steg!</h2>
                <ol>
                    <li v-for="step in steps" :key="step">
                        {{ step }}
                    </li>
                </ol>
            </div>

            <img src="/img/flower.svg" alt="Flower">
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            items: Array,
            steps: Array  
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 100px 120px;
        background-color: var(--baby-pink-color);
    }

    .card {
        display: flex;
        justify-content: center;
        position: relative;
        align-items: stretch;
        height: 100%;
        min-height: 0;
        background-color: var(--white-color);
        border-top: 1px solid var(--red-color);
        border-left: 1px solid var(--red-color);
        border-right: 3px solid var(--red-color);
        border-bottom: 3px solid var(--red-color);
    }

    .ingridient-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        height: 100%;
        flex: 1;
        padding: 48px 64px;
        
    }

    .steps-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex: 2;
        padding: 48px 48px 48px 64px;
        border-left: 1px solid var(--red-color);
    }

    ul {
        list-style: none;
    }

    li {
        font-family: "Instrument Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; 
        letter-spacing: 1.28px;
        color: var(--red-color)
    }

    li:not(:last-child) {
        margin-bottom: 12px;
    }

    h2 {
        font-family: "Instrument Sans";
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        color: var(--red-color);
        margin-bottom: 32px;
    }

    img {
        position: absolute;
        left: 32.5%;
        bottom: -10%;
    }
</style>