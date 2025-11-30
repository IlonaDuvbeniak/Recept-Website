<template>
    <footer>
        <div class="container">
            <div class="text">
                <p>Skapad av:</p>
            </div>
            <div class="team-members">
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/ilona-duvbeniak?" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon"></img>
                                    Ilona Duvebniak
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/jia-sun-0b816b387/" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon"></img>
                                    Jia Sun
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/siriprydz" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon"></img>
                                    Siri Prydz
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/natassja-berkan/" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon"></img>
                                    Natassja Berkan
                                </a>
                            </div>
            </div>
            <div class="footer-logo">
                    <div class="logo-row">
                        <img class="flower-logo" src="/img/flower-logo.svg" alt="Logo" />
                        <span class="drinks-text">DRINKS</span>
                        <img class="flower-logo" src="/img/flower-logo.svg" alt="Logo" />
                    </div>
            </div>

           
        </div>

        <div class="line-container">
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white">
                 <p class="copyright-text">@Copyright 2025</p>
            </div>
            <div class="line white"></div>
            <div class="line white"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>

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
        padding-top:10px;
        margin-top: 40px;
    }
    .container {
        text-align: center;
        margin-bottom: 10px;
    }

    .text {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 1.5rem;
        color: var(--red-color);
        
    }

    .footer-logo {
        font-family: "Kalnia";
        color: var(--red-color);
        font-weight: bold;

    }

    .logo-row{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 10rem;
        line-height:1;
        gap:1rem;
    }

    .flower-logo {
        width: auto;
        height: 3rem;
        object-fit:contain;
        display:block;
    }

    .team-members {
        display: flex;
        justify-content: center;
        gap: 4rem;
        font-size: 1rem;
        color: var(--dark-red-color);
        font-weight: 500;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }

    .team-member a {
        text-decoration:none;
        color:inherit;
        display:flex;
        align-items:center;
    }

    .team-member:hover {
            transform: translateY(-3px);
        }

    .line-container {
        position: relative;
        display: flex;
        width: 100%;
        height: 2.5rem;
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

    .linkedin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
        vertical-align: middle;
    }

    .copyright-text {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:5;
        color:var(--dark-red-color);
        white-space:nowrap;

    }

    @media (max-width: 767px) {
        .logo-row{
            font-size: 9rem;
        }
        .flower-logo{
            height: 2rem;
        }
    }


    @media (max-width: 575px) { 
        .logo-row{
            font-size: 7rem;
            gap:0.5rem;
        }
        .flower-logo{
            height: 1.5rem;
        }
        .team-members {
            flex-direction: column;
            gap: 1rem;
            padding-left:3rem;
            font-size:1rem;
        }

        .text{
            text-align:left;
        }

        .team-member {
            padding-bottom: 1.2rem;
        }


    }

</style>