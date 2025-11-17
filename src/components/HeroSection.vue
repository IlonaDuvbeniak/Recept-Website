<script>
export default {
  name: 'HeroSection',}
</script>
<template>
    <video id="hero-movie">
        <source src="/videos/HeroMovie.mp4" type="video/mp4" />
    </video>
</template>
<style scoped>
#hero-movie {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
