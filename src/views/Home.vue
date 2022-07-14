<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="home__banner">
      <div class="home__banner__container">
        <spna class="home__banner__site-button">Find Jobs, Employment & Career Opportunities</spna>
        <h2 class="title-1">Search Between More Them <br> <span class="text-primary">50,000</span> Open Jobs.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 67px;

  &__banner {
    background-image: url("../assets/img/home_baner.jpg");
    height: 600px;
    background-size: cover;
    background-position: center center;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 8%;
    }

    &__site-button {
      margin-bottom: 15px;
      background-color: #2e55fa;
      padding: 10px 15px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      border-width: 0;
      border-style: solid;
      border-color: transparent;
      line-height: 1.42857;
      border-radius: 3px;
      font-weight: 600;
      text-align: center;
      white-space: pre;
      position: relative;
      z-index: 1;
      overflow: hidden;
      vertical-align: middle;
      width: max-content;

      &:after {
        background-color: #fff;
        content: "";
        height: 100%;
        left: -110%;
        opacity: 0.3;
        position: absolute;
        top: 0;
        -webkit-transform: skewX(25deg);
        -webkit-transition: all 0.5s ease 0s;
        width: 25px;
        z-index: -1;
        filter: blur(5px);
      }

      &:hover {
        color: #fff;
      }

      &:hover:after {
        left: 110%;
      }
    }

    & .title-1 {
      font-size: 45px;
      line-height: 60px;
      font-weight: 600;
      margin-bottom: 25px;
      font-family: 'Rubik', sans-serif;
    }

  }
}
</style>