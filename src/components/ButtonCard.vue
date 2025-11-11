<template>
    <div class="btn-container">
        <a href="#" :class="btn"><slot></slot></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                btn: 'btnClass'
            }
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
        background-color: #D80A3D;
        transition: all 0.4s ease;
    }

    .btnClass:hover {
        width: 100%;
        height: 100%;
        padding: 26px 0px;
        margin: 0;
        border-radius: 0;
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.500%;
        height: 100%;
    }


</style>