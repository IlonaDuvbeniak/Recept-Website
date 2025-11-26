<template>
    <div :class="block">
        <img :src="icon" :alt="label">
        <p><span>{{ value }}</span>{{ label }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            icon: String,
            value: [String, Number],
            label: String
        },   
        
        data() {
            return {
                block: 'info-block'
            }
        }
    }
</script>

<style scoped>
    .info-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        gap: 8px;
        padding: 12px 0px 16px 0px;
    }

    .info-block:not(:last-child) {
        border-right: 1px solid var(--red-color);
    }

    .info-block p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--red-color);
        text-align: center;
        font-family: "Instrument Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }

    .info-block span {
        color: var(--red-color);
        text-align: center;
        font-family: "Instrument Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; 
    }
</style>