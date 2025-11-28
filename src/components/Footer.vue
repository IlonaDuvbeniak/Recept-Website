<template>
    <footer>
        <div class="container">
            <div class="text">
                <p>Skapad av:</p>
            </div>
            <div class="team-members">
                           <!-- <link rel="linkedin-icon" href="/img/linkedin-icon.svg"> -->
                            Ilona Duvebniak
                            Jia Sun
                            Siri Prydz
                            Natassja Berkan
            </div>
            <div class="footer-logo">
                <p>
                    <img src="/img/flower-logo.svg" alt="Logo">
                    DRINKS
                    <img src="/img/flower-logo.svg" alt="Logo">
                </p>
            </div>
            
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    footer {
        background-color: var(--baby-pink-color);
        padding: 20px 0;
        margin-top: 40px;
    }
    .container {
        text-align: center;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .text {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 18px;
        color: var(--red-color);
        
    }

    .footer-logo {
        font-family: "Kalnia";
        font-size: 18rem;
        color: var(--red-color);
        margin-top: 18px;
        font-weight: bold;

    }

</style>