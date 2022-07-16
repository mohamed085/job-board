<template>
  <div>
    <Navbar></Navbar>

    <div id="about_us" class="about-us container-fluid">
      <div class="container">
        <div class="session-title row">
          <div class="heading-line"></div>
        </div>
        <div class="about-row row">
          <div class="image-col col-4">
            <img src="../assets/img/profile.jpeg" alt="">
            <button class="btn btn-primary"><i class="fas fa-download"></i> Download CV</button>
          </div>
          <div class="detail-col col-8">
            <h2>John Smith</h2>
            <h6>Freelance Web Designer</h6>
            <p>There are many variations of passages of Lorem Ipsum available but the majority is have suffered
              alteration in that some form by injected humour or randomised that words which don't look even slightly believable. If you are going a to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing. There are is many variations of passages available.</p>
            <div class="row">
              <h2> General Info:</h2>
              <div class="col-md-6 col-12">
                <div class="info-list">
                  <ul>
                    <li><span>Birthday:</span>   05. 09.1987</li>
                    <li><span>City:</span>Toranto</li>
                    <li><span>Study:</span>Cambridge University</li>
                    <li><span>Website:</span>www.smarteyeapps.com</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="info-list">
                  <ul>
                    <li><span>Age:</span>31 Years</li>
                    <li><span>Degree:</span>Master</li>
                    <li><span>Mail:</span>email@example.com</li>
                    <li><span>Phone:</span>+01 454 548 4458</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <h2> Education:</h2>
              <div class="col-md-6 col-12">
                <div class="info-list">
                  <ul>
                    <li><span>Diploma in Faculty of computer and information.</span> <br>
                      Monufya Univercity. <br>
                      Jan 2022 .
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <h2> My Skills:</h2>
              <div class="col-md-6 col-12">
                <div class="info-list">
                  <ul>
                    <li><span>C++ , Html , Css , JavaScript , Angolar</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Profile",
  components: {Navbar}
}
</script>

<style scoped>
.about-us {
  padding: 50px;
  background-color: #FFF;
  margin-top: 67px;
}
.about-us {
  padding: 30px 10px; }
.about-us .about-row .image-col {
  text-align: center; }
.about-us .about-row .image-col img {
  border-radius: 35%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  padding: 10px;
  width: 90%; }
.about-us .about-row .image-col .btn {
  margin-top: 40px;
  width: 90%;
  font-weight: 600;
  text-transform: uppercase; }
.about-us .about-row .detail-col {
  margin-top: 30px; }
.about-us .about-row .detail-col h2 {
  font-weight: 600;
  font-size: 2rem; }
.about-us .about-row .detail-col h6 {
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 15px;
  margin-bottom: 20px; }
.about-us .about-row .detail-col p {
  font-size: .94rem;
  line-height: 30px;
  color: black; }
.about-us .about-row .detail-col .info-list {
  margin-top: 20px; }
.about-us .about-row .detail-col .info-list ul li {
  padding: 7px;
  text-align: left;
  font-size: 1.25rem;
}
.about-us .about-row .detail-col .info-list ul li span {
  float: left;
  font-weight: 600;
  font-size: large;
  color: black;
  padding-right: 2%;

}
</style>