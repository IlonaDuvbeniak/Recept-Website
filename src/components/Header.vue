<template>
    <header class="header">
        <router-link :to="to">
            <div :class="['container', {'container-shrink': hideText}]">
                <div :class="['text', { 'text-hide': hideText }]">
                    <p>DRINKS</p>
                </div>

                <img src="/img/flower-logo.svg" alt="Logo">
            </div>
        </router-link>
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
        },
        props: {
            to: {
                type: [String, Object],
                default: '/'
            }
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
        align-items: center;
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

    @media (max-width: 575px) {
        .header {
            padding: 32px 24px 16px 24px;
        }

        .container {
            width: 159px;
            padding: 12px 16px;
        }

        .container-shrink {
            width: 52px;
        }

        p {
            font-size: 20px;
            line-height: 20px; 
        }

        img { 
            width: 22px;
        }
    }
</style>