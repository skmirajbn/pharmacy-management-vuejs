<template>
  <login></login>
  <div class="toasts">
    <theToast v-for="toast in toasts" :key="toast.message" :toastType="toast.type" :message="toast.message"></theToast>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import TheToast from "./components/TheToast.vue";
export default {
  data: () => {
    return {
      toasts: [],
    };
  },
  components: {
    Login,
    TheToast,
  },
  mounted() {
    this.$eventBus.on("toast", (data) => {
      this.toasts.push(data);
      this.removeOneToast();
    });
  },
  methods: {
    removeOneToast() {
      setTimeout(() => {
        this.toasts.shift();
      }, 2000);
    },
  },
};
</script>

<style scoped></style>
