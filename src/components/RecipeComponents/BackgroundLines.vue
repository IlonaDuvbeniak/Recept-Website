<template>
    <div class="container">
        <div class="line blue"></div>
        <div class="line white"></div>
        <div class="line blue"></div>
        <div class="line white"></div>
        <div class="line blue"></div>
        <div class="line white"></div>
        <div class="line blue"></div>
        <div class="line white"></div>
        <div class="line blue"></div>
        <div class="line white"></div>
        <div class="line blue"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .container {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .line {
        flex: 1;
        align-self: stretch;
    }

    .line.blue {
        background-color: var(--blue-color);
    }

    .line.white {
        background-color: var(--white-color);
    }

    @media (max-width: 767px) {

        .container {
            display: flex;
            height: 120%;
            border-bottom: 1px solid var(--red-color);
            
        }

    }
</style>