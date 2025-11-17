<template>
    <header :class="header">
        <div :class="['container', {'container-shrink': hideText}]">
            <div :class="['text', { 'text-hide': hideText }]">
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
                header: 'header',
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
        padding: 24px 0;
    }

    .container {
        display: inline-flex;
        position: relative;
        overflow: hidden;
        width: 220px;
        justify-content: end;
        padding: 12px 20px;
        background-color: var(--blue-color);
        border-radius: 50px;
        transition: all 1s ease;
    }

    .container-shrink {
        width: 68px;
    }

    .text {
        position: absolute;
        left: 20px;
        opacity: 1;
        transition: all 0.2s ease;
    }

    .text-hide {
        opacity: 0;
    }

    p {
        color: var(--red-color);
        font-family: Kalnia;
        font-size: 32px;
        font-weight: 700;
        line-height: 32px; 
        text-transform: uppercase;
    }
</style>