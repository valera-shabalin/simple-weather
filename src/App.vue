<template>
  <component :is="getLayoutName">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Router, useRouter } from "vue-router";
import { mapActions, mapGetters } from "vuex";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { LayoutName } from "./store/layout/types/layout-name";

export default defineComponent({
  components: { DefaultLayout },
  name: "App",
  setup(): { router: Router } {
    const router = useRouter();

    return { router };
  },
  mounted(): void {
    this.initializeRouterChanges();
  },
  computed: {
    ...mapGetters({
      getLayoutName: "layout/GET_NAME",
    }),
  },
  methods: {
    ...mapActions({
      setLayoutName: "layout/SET_NAME",
    }),
    initializeRouterChanges(): void {
      this.router.beforeResolve((to) => {
        const layout = to.meta.layout as LayoutName;
        const title = to.meta.title as string;

        document.title = title; // TODO вынести в стор

        this.setLayoutName(layout);
      });
    },
  },
});
</script>
