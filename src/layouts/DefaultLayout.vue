<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: map_get($primary-palette, 500);
}
</style>
