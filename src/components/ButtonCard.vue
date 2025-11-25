<template>
    <div class="btn-container">
        <router-link :class="['btnClass', { 'disabled' : disabled }]" :to="to" alt="Go to recept">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21.2475 12.8475C21.7163 12.3788 21.7163 11.6175 21.2475 11.1488L15.2475 5.14875C14.7788 4.68 14.0175 4.68 13.5488 5.14875C13.08 5.6175 13.08 6.37875 13.5488 6.8475L17.5013 10.8H3.60002C2.93627 10.8 2.40002 11.3363 2.40002 12C2.40002 12.6638 2.93627 13.2 3.60002 13.2H17.5013L13.5488 17.1525C13.08 17.6213 13.08 18.3825 13.5488 18.8513C14.0175 19.32 14.7788 19.32 15.2475 18.8513L21.2475 12.8513V12.8475Z"/>
            </svg>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            to: [String, Object]
        }
    }
</script>

<style scoped>
    .btnClass {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 10px 0px;
        margin: 16px 16px 16px 0px;
        border: none;
        border-radius: 50px;
        background-color: var(--red-color);
        transition: all 0.4s ease;
        fill: var(--white-color);
        cursor: pointer;
    }

    .btnClass:hover {
        width: 100%;
        height: 100%;
        padding: 26px 0px;
        margin: 0;
        border-radius: 0;
    }

    .btnClass:active {
        background-color: var(--blue-color);
        fill: var(--red-color);
        transition: none;
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.500%;
        height: 100%;
    }


    .btnClass.disabled,
    .btnClass:disabled {
        background-color: var(--gray-color);
        cursor: not-allowed;
    }

    .btnClass.disabled:hover,
    .btnClass:disabled:hover {
        fill: var(--white-color);
        padding: 10px 0px;
        margin: 16px 16px 16px 0px;
        width: 100%;
        height: auto;
        border-radius: 50px;
    }

</style>