<template>
  <div class="jobs">
    <Navbar></Navbar>

    <div class="jobs__banner">
      <div class="jobs__banner__container">
        <span class="title-1">Jobs</span>
        <span class="title-3 d-block align-items-center">Home <i class="fas fa-angle-right"></i> Jobs</span>
      </div>
    </div>

    <div class="jobs__main">
      <div class="row">
        <div class="col-8">
          <div class="title-1">RECENT JOBS</div>
          <router-link to="/job/12312" class="jobs__main__job-item">
            <div class="d-flex mb-4">
              <img class="jobs__main__job-item__company-logo" src="../assets/img/company_logo.png">
              <div>
                <h4>Junior Java Developer</h4>
                <div class="d-flex">
                  <span class="me-2"><i class="fas fa-bookmark me-1"></i> Bypa-ss</span>
                  <span class="me-2"><i class="fas fa-map-marker-alt me-1"></i> Maadi, Cairo</span>
                  <span class="me-2"><i class="fas fa-alarm-clock me-1"></i> Published 11 months ago</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="jobs__main__job-item__job-time">
                <span>Full time</span>
              </div>
              <div class="jobs__main__job-item__salary">
                <span>$1200 - $ 2500</span>
              </div>
            </div>
            <router-link to="" class="jobs__main__job-item__fav"><i class="fas fa-heart"></i></router-link>
          </router-link>
          <router-link to="/job/12312" class="jobs__main__job-item">
            <div class="d-flex mb-4">
              <img class="jobs__main__job-item__company-logo" src="../assets/img/company_logo.png">
              <div>
                <h4>Junior Java Developer</h4>
                <div class="d-flex">
                  <span class="me-2"><i class="fas fa-bookmark me-1"></i> Bypa-ss</span>
                  <span class="me-2"><i class="fas fa-map-marker-alt me-1"></i> Maadi, Cairo</span>
                  <span class="me-2"><i class="fas fa-alarm-clock me-1"></i> Published 11 months ago</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="jobs__main__job-item__job-time">
                <span>Full time</span>
              </div>
              <div class="jobs__main__job-item__salary">
                <span>$1200 - $ 2500</span>
              </div>
            </div>
            <router-link to="" class="jobs__main__job-item__fav"><i class="fas fa-heart"></i></router-link>
          </router-link>
          <router-link to="/job/12312" class="jobs__main__job-item">
            <div class="d-flex mb-4">
              <img class="jobs__main__job-item__company-logo" src="../assets/img/company_logo.png">
              <div>
                <h4>Junior Java Developer</h4>
                <div class="d-flex">
                  <span class="me-2"><i class="fas fa-bookmark me-1"></i> Bypa-ss</span>
                  <span class="me-2"><i class="fas fa-map-marker-alt me-1"></i> Maadi, Cairo</span>
                  <span class="me-2"><i class="fas fa-alarm-clock me-1"></i> Published 11 months ago</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="jobs__main__job-item__job-time">
                <span>Full time</span>
              </div>
              <div class="jobs__main__job-item__salary">
                <span>$1200 - $ 2500</span>
              </div>
            </div>
            <router-link to="" class="jobs__main__job-item__fav"><i class="fas fa-heart"></i></router-link>
          </router-link>
          <router-link to="/job/12312" class="jobs__main__job-item">
            <div class="d-flex mb-4">
              <img class="jobs__main__job-item__company-logo" src="../assets/img/company_logo.png">
              <div>
                <h4>Junior Java Developer</h4>
                <div class="d-flex">
                  <span class="me-2"><i class="fas fa-bookmark me-1"></i> Bypa-ss</span>
                  <span class="me-2"><i class="fas fa-map-marker-alt me-1"></i> Maadi, Cairo</span>
                  <span class="me-2"><i class="fas fa-alarm-clock me-1"></i> Published 11 months ago</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="jobs__main__job-item__job-time">
                <span>Full time</span>
              </div>
              <div class="jobs__main__job-item__salary">
                <span>$1200 - $ 2500</span>
              </div>
            </div>
            <router-link to="" class="jobs__main__job-item__fav"><i class="fas fa-heart"></i></router-link>
          </router-link>
          <router-link to="/job/12312" class="jobs__main__job-item">
            <div class="d-flex mb-4">
              <img class="jobs__main__job-item__company-logo" src="../assets/img/company_logo.png">
              <div>
                <h4>Junior Java Developer</h4>
                <div class="d-flex">
                  <span class="me-2"><i class="fas fa-bookmark me-1"></i> Bypa-ss</span>
                  <span class="me-2"><i class="fas fa-map-marker-alt me-1"></i> Maadi, Cairo</span>
                  <span class="me-2"><i class="fas fa-alarm-clock me-1"></i> Published 11 months ago</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="jobs__main__job-item__job-time">
                <span>Full time</span>
              </div>
              <div class="jobs__main__job-item__salary">
                <span>$1200 - $ 2500</span>
              </div>
            </div>
            <router-link to="" class="jobs__main__job-item__fav"><i class="fas fa-heart"></i></router-link>
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="/profile" class="jobs__main__profile-info">asd</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Jobs",
  components: {Navbar}
}
</script>

<style lang="scss" scoped>

.jobs {
  margin-top: 67px;

  &__banner {
    background-position: top;
    background-size: cover;
    background-image: url("../assets/img/jobs_banner.jpg");
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

  &__main {
    padding: 50px 8%;

    & .title-1 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
      font-family: 'Rubik', sans-serif;
    }

    &__job-item {
      margin: 15px 5px 40px;
      background-color: #f9faff;
      padding: 25px;
      border-left: 5px solid #e1e7ff;
      border-radius: 4px;
      box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
      display: block;
      position: relative;
      transition: all 0.2s linear;
      color: #2e55fa;
      text-decoration: none;

      & h4 {
        color: #232323;
      }

      &:hover {
        border-color: #2e55fa;

      }

      &__company-logo {
        margin-right: 20px;
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 6px;
        background-color: #e1e7ff;
        text-align: center;
        overflow: hidden;

      }

      &__job-time {
        margin-right: auto !important;

        & span {
          text-transform: uppercase;
          border: 1px solid #dbe2ff;
          border-radius: 4px;
          background-color: #e1e7ff;
          display: block;
          font-size: 14px;
          padding: 2px 10px;
          color: #2e55fa;
          display: inline-block;
          text-align: center;

        }
      }

      &__salary {
        color: #000;
        font-size: 22px;

      }

      &__fav {
        position: absolute;
        top: 10%;
        right: 5%;

        & i {
          font-size: 2rem;
        }
      }
    }

    &__profile-info {
      margin: 40px 5px;
      background-color: #f9faff;
      padding: 25px;
      border-radius: 4px;
      box-shadow: 0 0 10px 0 rgb(0 24 128 / 10%);
      display: block;

    }
  }


}
</style>