<script>
export default {
    name: "SearchBar"
}
</script>

<template>
    <div class="search-bar-container">
        <div class="search-bar">
            <img class="search-icon" src="/img/search-icon.svg">
            <label for="site-search"></label>
            <input type="search" class="site-search" placeholder="Search by vibe, not ingredient">
            </input>
        </div>
    </div>
</template>

<style scoped>
.search-bar-container {
    width: 100%;
    padding: 0 120px;
    display: flex;
    flex-direction: column;

}

.search-bar {
    border-top: 1px solid var(--red-color);
    border-left: 1px solid var(--red-color);
    border-right: 3px solid var(--red-color);
    border-bottom: 3px solid var(--red-color);
    border-radius: 50px;

}

.site-search {
    border: none;
    color: var(--red-color);
    background-color: var(--white-color);
    width: 90%;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 1.28px;
    margin: 10px;

}

.search-icon {
    height: 30px;
    padding-left: 20px;
    margin: 10px;
}

::placeholder {
    color: var(--red-color);
    font-family: "Instrument Sans";


}
</style>
