<template>
  <div v-if="!authorize" class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="../assets/img/logo.png">
      </router-link>
    </div>
    <div class="header__items">
      <router-link to="/" exact class="header__items__item"><i class="fas fa-home me-2"></i> Home</router-link>
      <router-link to="/login" class="header__items__item"><i class="fas fa-sign-in me-2"></i> Login</router-link>
      <router-link to="/register" class="header__items__item"><i class="fas fa-user me-2"></i> Register</router-link>
    </div>
  </div>
  <div v-else-if="authorize && type === 'applicant'" class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="../assets/img/logo.png">
      </router-link>
    </div>
    <div class="header__items">
      <router-link to="/" exact class="header__items__item"><i class="fas fa-home me-2"></i> Home</router-link>
      <router-link to="/jobs" class="header__items__item"><i class="fas fa-tasks-alt me-2"></i> Jobs</router-link>
      <router-link to="/companies" class="header__items__item"><i class="fas fa-building me-2"></i> Companies</router-link>
      <router-link to="/profile" class="header__items__item"><i class="fas fa-user me-2"></i> Profile</router-link>
      <span class="header__items__item"><i class="fas fa-sign-in me-2"></i> Logout</span>
    </div>
  </div>
  <div v-else-if="authorize && type === 'company'" class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="../assets/img/logo.png">
      </router-link>
    </div>
    <div class="header__items">
      <router-link to="/" exact class="header__items__item"><i class="fas fa-home me-2"></i> Home</router-link>
      <router-link to="/dashboard" class="header__items__item"><i class="fas fa-chart-line me-2"></i> Dashboard</router-link>
      <router-link to="/profile" class="header__items__item"><i class="fas fa-user me-2"></i> Profile</router-link>
      <span class="header__items__item"><i class="fas fa-sign-in me-2"></i> Logout</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      authorize: true,
      type: 'company'
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0 5%;
  width: 100%;
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;

  &__logo {
    display: flex;
    align-items: center;
    padding: 20px 10px;

    img {
      width: 130px;
    }
  }

  &__items {
    display: flex;
    margin: 0 80px 0 40px;

    &__item {
      padding: 0 10px;
      margin: 0 2px;
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      position: relative;
      display: flex;
      align-items: center;
      transition: 0s;

      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #0d6efd;
        transform: translate(-50%,-8px) rotate(45deg);
        transition: .3s cubic-bezier(.55,.17,.05,.85);
        opacity: 0;
        top: -5px;
        left: 50%;
      }

      &:hover,
      &.active,
      &.router-link-active {
        color: #0d6efd;
        transition: 0.1s;
        border-bottom: 3px solid #0d6efd;
      }

      &:hover::before,
      &.active::before,
      &.router-link-active::before  {
        z-index: 1;
        opacity: 1;
        transform: translate(-50%,0) rotate(45deg);
      }

    }
  }
}
</style>