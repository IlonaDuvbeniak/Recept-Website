<template>
    <a  @click="addEvent" :class="['btn', variant]">
        <p class="btn-text">{{ btnText }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="showArrow" class="btn-arrow">
            <path d="M21.2475 12.8475C21.7163 12.3788 21.7163 11.6175 21.2475 11.1488L15.2475 5.14875C14.7788 4.68 14.0175 4.68 13.5488 5.14875C13.08 5.6175 13.08 6.37875 13.5488 6.8475L17.5013 10.8H3.60002C2.93627 10.8 2.40002 11.3363 2.40002 12C2.40002 12.6638 2.93627 13.2 3.60002 13.2H17.5013L13.5488 17.1525C13.08 17.6213 13.08 18.3825 13.5488 18.8513C14.0175 19.32 14.7788 19.32 15.2475 18.8513L21.2475 12.8513V12.8475Z"/>
        </svg>
    </a>
</template>

<script>
    export default {
        methods: {
            addEvent() {
                this.$emit('click')
            }
        },
        props: {
            variant: {
                type: String,
                default: 'primary'
            },
            btnText: String,
            showArrow: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 12px 36px;
        font-family: "Instrument Sans";
        font-size: 20px;
        font-weight: 600;
        line-height: 24px; 
        text-decoration: none;
        border-radius: 50px;
        cursor: pointer;
    }


    .btn.primary {
        gap: 12px;
        background-color: var(--red-color);
        border: 3px solid transparent;
        padding: 9px 33px;
        color: var(--white-color);
    }

    .btn.primary .btn-text {
        transition: opacity 0.3s ease;
    }

    .btn.primary .btn-arrow {
        transition: transform 0.3s ease;
        fill: var(--white-color);
    }

    .btn.primary:hover {
        background-color: transparent;
        border: 3px solid var(--red-color);
    }

    .btn.primary:hover .btn-text {
        opacity: 0;
    }

    .btn.primary:hover .btn-arrow {
        transform: translateX(-125%); 
        fill: var(--red-color);
    }

    .btn.primary:active {
        background-color: var(--blue-color);
        border: 3px solid var(--blue-color);
    }


    .btn.filter {
        border: 1px solid var(--dark-red-color);
        color: var(--dark-red-color);
    }

    .btn.filter:hover {
        border-color: var(--red-color);
        background-color: var(--red-color);
        color: var(--white-color);
    }

    .btn.filter:active {
        border-color: var(--blue-color);
        background-color: var(--blue-color);
        color: var(--red-color);
    }
</style>