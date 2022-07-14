<template>
  <div class="dashboard">
    <Navbar></Navbar>

    <div class="dashboard__sidebar">
      <router-link to="/dashboard" exact class="dashboard__sidebar__item"><i class="fas fa-chart-line me-2"></i> Dashboard</router-link>
      <router-link to="/dashboard/jobs" exact class="dashboard__sidebar__item"><i class="fas fa-tasks-alt me-2"></i> Jobs</router-link>
      <router-link to="/dashboard/create-job" exact class="dashboard__sidebar__item"><i class="fas fa-plus me-2"></i> Create new job</router-link>
    </div>

    <div class="dashboard__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Dashboard",
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 67px;

  &__sidebar {
    position: fixed;
    top: 67px;
    left: 0;
    height: 100vh;
    width: 200px;
    box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);

    &__item {
      padding: 10px 0 10px 15px;
      margin: 0 2px;
      text-decoration: none;
      color: #000;
      font-size: 1rem;
      position: relative;
      display: flex;
      align-items: center;
      transition: 0s;
      border-left: 3px solid #ffffff;

      &:hover,
      &.active,
      &.router-link-active {
        color: #0d6efd;
        transition: 0.1s;
        border-left: 3px solid #0d6efd;
      }
    }
  }

  &__main {
    margin-left: 200px;
    padding: 30px;
    background-color: #f6f6f6;
    min-height: 100vh;
  }
}

</style>