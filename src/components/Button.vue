<template>
    <component :is="componentType" v-bind="$attrs" :to="to"
        :class="['btn', variant, { 'pressed': pressed }, { 'disabled': disabled }]" :disabled="!to && disabled"
        @click="addEvent">
        <p class="btn-text">{{ btnText }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-if="showArrow"
            class="btn-arrow">
            <path
                d="M21.2475 12.8475C21.7163 12.3788 21.7163 11.6175 21.2475 11.1488L15.2475 5.14875C14.7788 4.68 14.0175 4.68 13.5488 5.14875C13.08 5.6175 13.08 6.37875 13.5488 6.8475L17.5013 10.8H3.60002C2.93627 10.8 2.40002 11.3363 2.40002 12C2.40002 12.6638 2.93627 13.2 3.60002 13.2H17.5013L13.5488 17.1525C13.08 17.6213 13.08 18.3825 13.5488 18.8513C14.0175 19.32 14.7788 19.32 15.2475 18.8513L21.2475 12.8513V12.8475Z" />
        </svg>
    </component>
</template>

<script>
export default {
    methods: {
        addEvent() {
            if (!this.to) {
                this.$emit('event')
            }
        }
    },
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        to: [String, Object],
        btnText: String,
        showArrow: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        pressed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        componentType() {
            return this.to ? 'router-link' : 'button'
        }
    },
}
</script>

<style scoped>
/* COMMON BASE */
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

/* PRIMARY BUTTON */
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
    transform: translateX(50%);
    fill: var(--red-color);
}

.btn.primary:active {
    background-color: var(--blue-color);
    border: 3px solid var(--blue-color);
}

/* PRIMARY BUTTON DISABLED */
.btn.primary.disabled,
.btn.primary:disabled {
    background-color: var(--gray-color);
    cursor: not-allowed;
    transition: none;
}

.btn.disabled:hover .btn-text,
.btn:disabled:hover .btn-text {
    opacity: 1;
}

.btn.disabled:hover .btn-arrow,
.btn:disabled:hover .btn-arrow {
    transform: translateX(0%);
    fill: var(--white-color);
}

.btn.disabled:hover,
.btn:disabled:hover {
    background-color: var(--gray-color);
    border: 3px solid var(--gray-color);

}


/* FILTER BUTTON */
.btn.filter {
    border: 1px solid var(--dark-red-color);
    color: var(--dark-red-color);
    background-color: var(--white-color);
}

.btn.filter:hover {
    border: 1px solid var(--red-color);
    background-color: var(--red-color);
    color: var(--white-color);
}

.btn.filter:active {
    border: 1px solid var(--blue-color);
    background-color: var(--blue-color);
    color: var(--dark-red-color);
}

/* FILTER BUTTON DISABLED */
.btn.filter.disabled,
.btn.filter:disabled {
    border-color: var(--gray-color);
    color: var(--gray-color);
    cursor: not-allowed;
}

.btn.filter.disabled:hover,
.btn.filter:disabled:hover {
    background-color: var(--white-color);
}


/* ACTIVETED */
.btn.filter.pressed {
    background-color: var(--blue-color);
    color: var(--dark-red-color);
    border: 1px solid var(--blue-color);
}

@media (max-width: 575px) {
    .btn {
        width: 100%;
    }
}
</style>
