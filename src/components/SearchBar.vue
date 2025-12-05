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
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                fill="none" aria-hidden="true" focusable="false">
                <path
                    d="M24.0002 13.6C24.0002 15.895 23.2552 18.015 22.0002 19.735L28.3302 26.07C28.9552 26.695 28.9552 27.71 28.3302 28.335C27.7052 28.96 26.6902 28.96 26.0652 28.335L19.7352 22C18.0152 23.255 15.8952 24 13.6002 24C7.8552 24 3.2002 19.345 3.2002 13.6C3.2002 7.855 7.8552 3.2 13.6002 3.2C19.3452 3.2 24.0002 7.855 24.0002 13.6ZM13.6002 20.8C17.5752 20.8 20.8002 17.575 20.8002 13.6C20.8002 9.625 17.5752 6.4 13.6002 6.4C9.6252 6.4 6.4002 9.625 6.4002 13.6C6.4002 17.575 9.6252 20.8 13.6002 20.8Z"
                    fill="#D80A36" />
            </svg>
            <label for="site-search"></label>
            <input type="search" id="site-search" placeholder="Search by vibe" name="q"
                aria-label="Search through recipes" required minlength="1" maxlength="30" :value="value"
                @input="$emit('input', $event.target.value)">
            </input>
        </form>
    </div>
</template>

<style scoped>
.search {
    width: 100%;
    padding: 0 120px;
    margin-bottom: 32px;
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

@media (max-width: 991px) {
    .search {
        padding: 0 72px;
    }
}

@media (max-width: 767px) {

    .search {
        padding: 0 52px;
    }

    .search-icon {
        height: 30px;
    }
}

@media (max-width: 575px) {
    .search {
        padding: 0 24px;
    }
}
</style>
