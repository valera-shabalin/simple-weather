<template>
  <div class="home-wrapper">
    <div class="home-toolbar">
      <span class="home-toolbar__icon">icon</span>
      <h1>Томск +13°C</h1>
    </div>

    <div class="home-search">
      <input type="text" />
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px 0;
}

.home-toolbar {
  display: flex;
  align-items: center;
  gap: 0 16px;
}
</style>
