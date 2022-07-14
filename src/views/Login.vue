<template>
  <div class="login">
    <Navbar></Navbar>

    <div class="login__banner">
      <div class="login__banner__container">
        <span class="title-1">Login</span>
        <span class="title-3 d-block align-items-center">Home <i class="fas fa-angle-right"></i> Login</span>
      </div>
    </div>

    <div class="login__form">
      <div class="title-2 mb-4">Login Your Account</div>
      <b-form>
        <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
        >
          <b-form-input
              class="mt-2"
              id="input-1"
              v-model="user.email"
              type="email"
              placeholder="Enter email"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            id="input-group-2"
            label="Password:"
            label-for="input-2"
        >
          <b-form-input
              class="mt-2"
              id="input-2"
              v-model="user.password"
              type="password"
              placeholder="Enter password"
              required
          ></b-form-input>
        </b-form-group>

        <b-button class="mt-4" type="submit" variant="primary">Login</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Login",
  components: {
    Navbar
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
  margin-top: 67px;

  &__banner {
    background-position: top;
    background-size: cover;
    background-image: url("../assets/img/login_banner.jpg");
    height: 300px;
    width: 100%;
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__container {
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &:after {
      background: radial-gradient(ellipse at center, rgba(25,38,101,1) 0%, rgba(9,18,63,1) 49%, rgba(34,40,69,1) 100%);
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;

    }
  }

  &__form {
    padding: 50px 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
      border: 1px solid #eee;
      padding: 30px 20px;
      width: 80%;
    }
  }
}
</style>