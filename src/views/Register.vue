<template>
  <div class="register">
    <Navbar></Navbar>

    <div class="register__banner">
      <div class="register__banner__container">
        <span class="title-1">Register</span>
        <span class="title-3 d-block align-items-center">Home <i class="fas fa-angle-right"></i> Register</span>
      </div>
    </div>

    <div class="title-2 text-center mt-5">Create new account</div>
    <div class="register__type">
      <span @click="changeRegisterType('applicant')" :class="(register_type == 'applicant' ? 'active' : '')">Create account as applicant</span>
      <span @click="changeRegisterType('company')" :class="(register_type == 'company' ? 'active' : '')">Create account as company</span>
    </div>

    <div class="register__form">
      <b-form v-if="register_type === 'applicant'">
        <b-form-group
            label="Name:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.name"
              type="text"
              placeholder="Enter your name"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Email:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.email"
              type="email"
              placeholder="Enter your email"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Password:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.password"
              type="password"
              placeholder="Enter your password"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Position:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.position"
              type="text"
              placeholder="Enter your position"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Address:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.address"
              type="text"
              placeholder="Enter your address"
              required
          ></b-form-input>
        </b-form-group>
        <b-button class="mt-4" type="submit" variant="primary">Create applicant account</b-button>
      </b-form>
      <b-form v-if="register_type === 'company'">
        <b-form-group
            label="Company name:"
        >
          <b-form-input
              class="mt-2"
              v-model="company.name"
              type="text"
              placeholder="Enter company name"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Company email:"
        >
          <b-form-input
              class="mt-2"
              v-model="company.email"
              type="email"
              placeholder="Enter company email"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Company password:"
        >
          <b-form-input
              class="mt-2"
              v-model="company.password"
              type="password"
              placeholder="Enter company password"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Company industry:"
        >
          <b-form-input
              class="mt-2"
              v-model="user.industry"
              type="text"
              placeholder="Enter company industry"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Company location:"
        >
          <b-form-input
              class="mt-2"
              v-model="company.location"
              type="text"
              placeholder="Enter company address"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            class="mt-4"
            label="Company website:"
        >
          <b-form-input
              class="mt-2"
              v-model="company.website"
              type="url"
              placeholder="Enter company website"
              required
          ></b-form-input>
        </b-form-group>
        <b-button class="mt-4" type="submit" variant="primary">Create company account</b-button>

      </b-form>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Register",
  components: {
    Navbar
  },
  data() {
    return {
      register_type: 'applicant',
      user: {
        name: '',
        email: '',
        password: '',
        position: '',
        address: '',
      },
      company: {
        name: '',
        email: '',
        password: '',
        industry: '',
        location: '',
        website: ''
      }
    }
  },
  methods: {
    changeRegisterType(type) {
      this.register_type = type
    }
  }

}
</script>

<style lang="scss" scoped>

.register {
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

  &__type {
    display: flex;
    justify-content: center;

    & span {
      font-weight: 500;
      padding: 10px 20px;
      cursor: pointer;
      margin: 0 1px;

      &.active,
      &:hover {
        background-color: #0d6efd;
        color: #ffffff;
      }
    }
  }

  &__form {
    padding: 10px 20%;
    margin-top: 20px;

    & form {
      border: 1px solid #eee;
      padding: 30px 20px;
      width: 100%;
    }

  }

}

</style>