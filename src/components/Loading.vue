<template>
    <div class="container">
      <h1>Hold on, we’re fixing your drink</h1>
      <div class="dots">
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped> 

  .container {
    min-height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: var(--red-color);
    font-family: "Instrument Sans";
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }

  .dots {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .dots span {
    width: 10px;
    height: 10px;
    background: var(--blue-color);
    border-radius: 50%;
    animation: bounce 0.6s infinite alternate;
  }

  .dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    from { transform: translateY(0); }
    to   { transform: translateY(-10px); }
  }
</style>