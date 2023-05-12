<template>
  <component :is="layoutName">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default defineComponent({
  components: { DefaultLayout },
  name: "App",
  data: () => ({
    layout: "default",
  }),
  computed: {
    layoutName(): string {
      return `${this.layout}-layout`;
    },
  },
});
</script>
