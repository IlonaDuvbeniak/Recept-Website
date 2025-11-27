<template>
    <button class="btn" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
            <path d="M16.0594 3.44062C15.4734 2.85469 14.5219 2.85469 13.9359 3.44062L6.43591 10.9406C5.84998 11.5266 5.84998 12.4781 6.43591 13.0641C7.02185 13.65 7.97341 13.65 8.55935 13.0641L13.5 8.12344V25.5C13.5 26.3297 14.1703 27 15 27C15.8297 27 16.5 26.3297 16.5 25.5V8.12344L21.4406 13.0641C22.0265 13.65 22.9781 13.65 23.564 13.0641C24.15 12.4781 24.15 11.5266 23.564 10.9406L16.064 3.44062H16.0594Z" />
        </svg>
    </button>
</template>

<script>
    export default {
        props: {
            arrowDirection: {
                type: String,
                default: 'arrow-up'
            },
             variant: {
                type: String,
                default: ''
            },
        },
        methods: {
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
</script>

<style scoped>
    .btn {
        display: flex;
        padding: 24px;
        align-items: center;
        border: 1px solid var(--red-color);
        border-radius: 50px;
        background-color: var(--red-color);
        fill: var(--white-color);
        z-index: 1000;
    }

    .btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }

    .btn:hover {
        border: 1px solid var(--blue-color);
        background-color: var(--blue-color);
        fill: var(--red-color);
        cursor: pointer;
    }

    .btn:active {
        border: 1px solid var(--dark-red-color);
        background-color: var(--dark-red-color);
        fill: var(--white-color);
    }
</style>