<template>
    <header class="header">
        <div :class="['container', {'container-shrink': hideText}]">
            <div :class="{ 'text-hide': hideText }">
                <p>DRINKS</p>
            </div>
            <img src="/img/flower-logo.svg" alt="Logo">
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                hideText: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.hideText = true
            }, 2000) 
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 120px;
    }

    .container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        gap: 24px;
        padding: 12px 20px;
        background-color: var(--blue-color);
        border-radius: 50px;
        transition: all 1s ease;
    }

    .container-shrink {
        gap: 0;
        padding: 12px 20px;
    }

    p {
        color: var(--red-color);
        font-family: Kalnia;
        font-size: 32px;
        font-weight: 700;
        line-height: 32px; 
        text-transform: uppercase;
        transition: transform 6s ease;
        overflow: hidden;
    }

    .text-hide {
        transform: translateX(150%);
        width: 0;
        margin: 0;
        padding: 0;
        transition: all 2s ease;
    }

</style>