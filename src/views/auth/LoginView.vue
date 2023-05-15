<template>
  <div class="page-wrapper">
    <h1>Авторизация</h1>

    <form class="form">
      <input class="form__field" type="text" placeholder="Email" />
      <input class="form__field" type="password" placeholder="Password" />
      <button class="form__submit">Войти</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
});
</script>

<style lang="scss">
.page-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.form {
  margin-top: 20px;
  padding: 20px;

  width: 460px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px 0;

  &__field {
    padding: 16px 24px;

    border: none;
    border-radius: 9999px;

    color: white;
    background-color: darken(map_get($primary-palette, 500), 1);

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px inset;
    outline: none;

    &::placeholder {
      color: white;
    }
  }

  &__submit {
    padding: 16px 24px;

    border: none;
    border-radius: 9999px;

    outline: none;
    cursor: pointer;
  }
}
</style>
