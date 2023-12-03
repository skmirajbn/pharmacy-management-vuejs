<template>
  <div class="login-page">
    <div class="login-card">
      <div class="text-center">
        <img class="login-card_icon" src="/img/lock.png" alt="" />
        <h2>User Login</h2>
      </div>
      <form action="#">
        <label class="block">Email</label>
        <input type="email" placeholder="Enter Your Email" />

        <label class="block mt-3">Password</label>
        <input type="password" placeholder="Enter Password" />

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
export default {};
</script>

<style>
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

.login-card input[type="email"],
.login-card input[type="password"] {
  width: 100%;
}

.login-card_icon {
  max-width: 77px;
}
</style>
