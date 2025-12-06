<template>
  <div class="rating-point" @mouseleave="clearHover">
    <div
      v-for="n in 5"
      :key="n"
      class="glass-wrapper"
      @mousemove="onHover(n)"
      @click="onClick(n)"
    >
      <img
        :src="getGlassState(n)"
        :alt="`Rating ${n}`"
        class="glass-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipeId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      selected: 0,
      hoverValue: 0
    };
  },

  methods: {
    
    onHover(n) {
      this.hoverValue = n;
    },

    onClick(n) {
      this.selected = n;
      console.log("Selected rating =", this.selected);

      this.$emit("rating-changed", this.selected);
    },

    clearHover() {
      this.hoverValue = 0;
    },

    getGlassState(n) {
      const value = this.hoverValue || this.selected;

      if (value >= n) return "/img/glass-full.svg";
      return "/img/glass-empty.svg";
    }
  }
};
</script>

<style scoped>
.rating-point {
  display: flex;
  gap: 12px;
}

.glass-wrapper {
  cursor: pointer;
}

.glass-icon {
  width: 40px;
  height: 40px;
  transition: transform 0.2s;
  pointer-events: none;
}

.glass-wrapper:hover .glass-icon {
  transform: scale(1.15);
}


@media (max-width: 767px){
   .rating-point {
            display: flex;
            justify-content: center;
            height:100%;
        } 
}
</style>
