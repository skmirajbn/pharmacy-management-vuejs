<template>
  <div class="login-page">
    <div class="login-card">
      <div class="box" :class="{ 'box--right': movedToRight }"></div>
      <button @click="movedToRight = false">Move to Left</button>
      <button @click="movedToRight = true" class="ml-4">Move to Right</button>
      <div class="text-center">
        <img class="login-card_icon" src="/img/lock.png" alt="" />
        <h2>User Login</h2>
      </div>
      <form action="#" @submit.prevent="handleSubmit">
        <label class="block">Email</label>
        <input type="text" placeholder="Enter Your Email" v-model="formData.email" ref="email" />

        <label class="block mt-3">Password</label>
        <input type="password" placeholder="Enter Password" v-model="formData.password" ref="password" />

        <button type="submit" class="block mt-3 w-100">Login</button>

        <div class="d-flex jc-between mt-3">
          <div>
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      formData: {
        email: "",
        password: "",
      },
      movedToRight: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
      if (!this.formData.email) {
        this.$eventBus.emit("toast", {
          type: "Error",
          message: "Email is required",
        });
        this.$refs.email.focus();
        return;
      }
      // Check if the input is valid email or not

      if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.$eventBus.emit("toast", {
          type: "Error",
          message: "Email is invalid",
        });
        this.$refs.email.focus();
        return;
      }

      if (this.formData.password.length < 6) {
        this.$eventBus.emit("toast", {
          type: "Error",
          message: "Password must be at least 6 characters",
        });
        this.$refs.password.focus();
        return;
      }
      console.log("form submitted");
    },
  },
};
</script>

<style>
.box {
  width: 55px;
  height: 55px;
  background-color: greenyellow;
  margin-bottom: 22px;
  transition: margin-left 0.25s ease;
}
.box--right {
  margin-left: 222px;
}
button {
  padding: 10px 0;
  color: white;
  background-color: var(--brand-color);
}
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}
.login-card {
  width: 400px;
  min-height: 193px;
  box-shadow: 0px 2px 9px 4px #dfdfdf;
  background-color: white;
  border-radius: 5px;
  padding: 44px 33px;
}

.login-card input[type="text"],
.login-card input[type="password"] {
  width: 100%;
}

.login-card_icon {
  max-width: 77px;
}
</style>
