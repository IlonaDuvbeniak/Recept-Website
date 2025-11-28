<template>
    <div>
        <h1>
            <slot></slot>
        </h1>
        <p>some other stuff</p>
        <button>Click me</button>
    </div>
</template>

<script>
export default {
    name: "Heading"

}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
