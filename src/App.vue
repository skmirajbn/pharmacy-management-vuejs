<template>
  <login></login>
  <div class="toasts">
    <theToast></theToast>
    <theToast></theToast>
    <theToast></theToast>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import TheToast from "./components/TheToast.vue";
export default {
  components: {
    Login,
    TheToast,
  },
};
</script>

<style scoped></style>
