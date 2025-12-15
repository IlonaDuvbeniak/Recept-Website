<template>
    <footer>
        <div class="container">
            <div class="text">
                <p>Skapad av:</p>
            </div>
            <div class="team-members">
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/ilona-duvbeniak?" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon">
                                    Ilona Duvebniak
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/jia-sun-0b816b387/" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon">
                                    Jia Sun
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/siriprydz" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon">
                                    Siri Prydz
                                </a>
                            </div>
                            <div class="team-member">
                                <a href="https://www.linkedin.com/in/natassja-berkan/" target="_blank">
                                    <img class="linkedin-icon" src="/img/linkedin-icon.svg" alt="LinkedIn Icon">
                                    Natassja Berkan
                                </a>
                            </div>
            </div>
            <div class="footer-logo">
                <img src="/img/_DRINKS_.png" alt="*DRINKS*">
            </div>
        </div>

        <div class="line-container">
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue"></div>
            <div class="line white"></div>
            <div class="line blue hide"></div>
            <div class="line white ">
                 <p class="copyright-text">@Copyright 2025</p>
            </div>
            <div class="line white hide"></div>
            <div class="line white hide"></div>
            <div class="line white"></div>
            <div class="line blue hide"></div>
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
        margin-top: 152px;
    }
    .container {
        text-align: center;
    }

    .text {
        color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        padding: 52px 0px 32px 0px;
    }

    .logo-row{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 15rem;
        line-height:1;
        gap:1rem;
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

    .footer-logo {
        padding: 52px 40px 24px 40px;
    }

    .footer-logo img {
        width: 100%;
        height: auto;
    }

    .team-member {
        padding-right: 2.5rem;
        padding-left: 2.5rem;
    }

    .team-member a {
        color: var(--dark-red-color);
        font-family: "Instrument Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-decoration: none;
        display:flex;
        align-items:center;
        margin-bottom: 1rem;
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
        width: 1.7rem;
        height: 1.7rem;
        margin-right: 0.5rem;
        vertical-align: middle;
        filter: brightness(0) saturate(100%) invert(16%) sepia(47%) saturate(800%) hue-rotate(300deg);
    }

    .copyright-text {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:5;
        color:var(--dark-red-color);
        white-space:nowrap;
        font-family: "Instrument Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; 

    }

    @media (max-width: 991px) {
        .team-members {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }

        .logo-row{
            font-size: 12rem;
        }

        h6 {
            font-size:180px;
        }
    }

    @media (max-width: 767px) {
        .logo-row{
            font-size: 9rem;
        }

        .team-members {
            gap: 24px;
            padding: 0px 52px;
        }

        .team-member {
            padding-right: 0.3rem;
            padding-left: 0.3rem;
        }

        h6 {
            font-size:150px;
        }
    }


    @media (max-width: 575px) { 
        footer {
            margin-top: 92px;
        }

        .logo-row{
            font-size: 7rem;
            gap:0.5rem;
        }
        .team-members {
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
            padding-left:3rem;
            font-size:1rem;
        }
        .text{
            padding-left: 24px;
            text-align:left;
        }
        .team-member {
            padding-bottom: 1.2rem;
        }

        .footer-logo {
            padding: 0px 24px 24px 24px;
        }

        .line.white.hide,
        .line.blue.hide {
            display: none;
        }
    }

</style>