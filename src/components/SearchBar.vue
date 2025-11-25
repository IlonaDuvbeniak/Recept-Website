<script>
export default {
    name: "SearchBar",
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    emits: ["input"]
}
</script>

<template>
    <div class="search">
        <form class="search-bar-container">
            <img class="search-icon" src="/img/search-icon.svg">
            <label for="site-search"></label>
            <input type="search" id="site-search" placeholder="Search by vibe" name="q"
                aria-label="Search through recipes" required minlength="1" maxlength="30">
            </input>
        </form>
    </div>
</template>

<style scoped>
.search {
    width: 100%;
    padding: 0 120px;
}

.search-bar-container {
    padding: 0 0 0 65px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid var(--red-color);
    border-left: 1px solid var(--red-color);
    border-right: 3px solid var(--red-color);
    border-bottom: 3px solid var(--red-color);
    border-radius: 50px;
}

.search-bar-container:focus-within {
    border-color: var(--dark-red-color);
}

#site-search {
    padding-left: 10px;
    border: none;
    color: var(--red-color);
    background-color: var(--white-color);
    font-family: "Instrument Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 1.28px;
    outline: none;
    max-width: 100%;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
}

.search-icon {
    height: 30px;
    padding-left: 0px;
    margin: 10px;
}

::placeholder {
    color: var(--red-color);
    font-family: "Instrument Sans";
}

input:focus::placeholder {
    color: transparent;
}

@media (max-width: 767px) {

    .search {
        padding: 0 24px;
    }

    .search-bar-container {
        padding: 0 0 0 30px;
    }

    .search-icon {
        height: 30px;
    }
}
</style>
