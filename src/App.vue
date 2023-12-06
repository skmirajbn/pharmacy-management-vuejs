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
      toasts: [
        {
          type: "Success",
          message: "Done Successfully.",
        },
        {
          type: "Error",
          message: "Something went wrong.",
        },
      ],
    };
  },
  components: {
    Login,
    TheToast,
  },
};
</script>

<style scoped></style>
