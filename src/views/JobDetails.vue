<template>
  <div>
    <Navbar></Navbar>

    <div class="content-container">

      <article class="job-listing" itemscope itemtype="https://schema.org/JobPosting">

        <header class="job-listing-header">

          <div class="job-listing-header__content">
            <div class="job-listing-header__job-details">
              <div class="job-listing-header__job-details-top">
                <h1 class="job-listing-header__job-title" itemprop="title">Sales Executive</h1>
                <span class="sr-only" itemprop="industry">Automotive</span>
                <span class="job-listing-header__company-name" itemprop="hiringOrganization">
                                    CARS
                                    <span class="job-listing-header__company-type"> - Recruitment Agency</span>
                                </span>
                <span class="sr-only" itemprop="datePosted">2018-04-16</span>
                <span class="sr-only" itemprop="validThrough">2018-05-10</span>
                <span class="job-listing-header__date-posted">Posted 3 days ago</span>
              </div>
              <div class="job-listing-header__job-details-middle">
                <table class="job-listing-header__mata-table">
                  <tr itemprop="baseSalary" itemscope itemtype="http://schema.org/MonetaryAmount">
                    <th>Salary</th>
                    <td>
                      <span class="sr-only" itemprop="currency">GBP</span>
                      <span itemprop="value">£35,000</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Benefits</th>
                    <td itemprop="jobBenefits">15,000 Basic with 35,000 OTE Plus Car</td>
                  </tr>
                  <tr itemprop="jobLocation" itemscope itemtype="http://schema.org/Place">
                    <th>Location</th>
                    <td itemprop="address">Lancashire</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td itemprop="occupationalCategory">Car and Vehicle Sales</td>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <td itemprop="employmentType">Full Time</td>
                  </tr>
                </table>
              </div>
              <div class="job-listing-header__job-details-bottom">
                <a href="#" class="btn btn-apply">Apply Now</a>
              </div>
            </div>

          </div>

        </header>

        <section class="job-listing__job-description" itemprop="description">
          <h2 class="job-listing__job-description-title">Job Details</h2>
          <div class="job-listing-header__job-details-middle">
            <table class="job-listing-header__mata-table">
              <tr itemprop="baseSalary" itemscope itemtype="http://schema.org/MonetaryAmount">
                <th>Experience Needed:</th>
                <td>
                  <span class="sr-only" itemprop="currency">GBP</span>
                  <span itemprop="value">More than 3 years</span>
                </td>
              </tr>
              <tr>
                <th>Career Level:</th>
                <td itemprop="jobBenefits">Experienced (Non-Manager)</td>
              </tr>
              <tr itemprop="jobLocation" itemscope itemtype="http://schema.org/Place">
                <th>Education Level:</th>
                <td itemprop="address">Bachelor's Degree</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td itemprop="occupationalCategory">Confidential</td>
              </tr>
              <tr>
                <th>Job Categories:</th>
                <td itemprop="employmentType">IT/Software Development
                  Engineering - Telecom/Technology</td>
              </tr>
              <tr>
                <th>Type</th>
                <td itemprop="employmentType">Full Time</td>
              </tr>
            </table>
          </div>

          <div class="job-listing-header__job-details-top">
            <h2 class="job-listing-header__job-title" itemprop="title">Skills And Tools:</h2>
            <p> UI - UX - Information Technology (IT) - UCD - Development - HTML5 - CSS3 - Web Markup - SASS -
              AJAX - jQuery - LESS - SEO - Troubleshooting - Software Engineering - Software Development
            </p>
          </div>
        </section>


        <section class="job-listing__job-description" itemprop="description">

          <h2 class="job-listing__job-description-title">Job Description</h2>
          <div class="info-list">
            <p><strong>Main Job Duties:</strong></p>
            <ul>
              <li><span>Develop functional and appealing user-friendly web & mobile pages based on usability.</span></li>
              <li>Build reusable code and libraries for future use.</li>
              <li>Ensure the technical feasibility of UI/UX designs.</li>
              <li>Optimize application for maximum speed and scalability.</li>
              <li>Build reusable code and libraries for future use.</li>
              <li>Ensure the technical feasibility of UI/UX designs.</li>
              <li>Optimize application for maximum speed and scalability.</li>
            </ul>
          </div>
        </section>

        <section class="job-listing__job-description" itemprop="description">

          <h2 class="job-listing__job-description-title">Job Requirements</h2>
          <div class="info-list">
            <ul>
              <li>Proficient understanding of web markup, including HTML5, CSS3.</li>
              <li>Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS.</li>
              <li>Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery.</li>
              <li>Good understanding of asynchronous request handling, partial page updates, and AJAX.</li>
              <li>Familiarity with tools such as as Gimp or Photoshop is a plus.</li>
            </ul>
          </div>
        </section>

      </article>

    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "JobDetails",
  components: {Navbar}
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  color: #084255;
  font-family: "Open Sans", sans-serif;
  line-height: 1.4;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #073B4C;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
}

.content-container {
  display: flex;
  flex-direction: column;
  margin-top: 67px;
}
@media screen and (min-width: 768px) {
  .content-container {
    max-width: 736px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 1140px) {
  .content-container {
    flex-direction: row;
    max-width: 1200px;
  }
}

.job-listing,
.job-listing-sidebar {
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
}

@media screen and (min-width: 1140px) {
  .job-listing {
    max-width: 70%;
    min-width: 70%;
  }
}

@media screen and (min-width: 1140px) {
  .job-listing-sidebar {
    max-width: 30%;
    min-width: 30%;
  }
}

.job-listing-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
@media screen and (min-width: 576px) {
  .job-listing-header {
    flex-direction: row;
  }
}

.job-listing-header__banner {
  position: relative;
  min-width: 48px;
  padding: 16px;
  color: #FFFFFF;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #073B4C;
  -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 576px) {
  .job-listing-header__banner {
    padding: 0;
  }
}

@media screen and (min-width: 576px) {
  .job-listing-header__banner span {
    position: absolute;
    bottom: 0;
    left: 16px;
    line-height: 1;
    transform: rotate(-90deg);
    transform-origin: 0 0;
  }
}

.job-listing-header__content {
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 48px);
  padding: 16px;
}
@media screen and (min-width: 768px) {
  .job-listing-header__content {
    flex-direction: row;
  }
}

.job-listing-header__company-logo {
  margin-bottom: 16px;
}
@media screen and (min-width: 768px) {
  .job-listing-header__company-logo {
    margin-bottom: 0;
    align-self: center;
  }
}

@media screen and (min-width: 768px) {
  .job-listing-header__job-details {
    width: 100%;
    padding-left: 16px;
  }
}

.job-listing-header__job-details-top {
  min-width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid #EDEFF2;
}
@media screen and (min-width: 768px) {
  .job-listing-header__job-details-top {
    display: flex;
    flex-wrap: wrap;
  }
}

.job-listing-header__job-details-middle {
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #EDEFF2;
}

.job-listing-header__job-title {
  font-size: 24px;
  margin-bottom: 8px;
}
@media screen and (min-width: 768px) {
  .job-listing-header__job-title {
    width: 100%;
    font-size: 32px;
  }
}

.job-listing-header__company-name {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
}
@media screen and (min-width: 768px) {
  .job-listing-header__company-name {
    margin-bottom: 0;
    font-size: 18px;
  }
}

.job-listing-header__company-name span {
  color: rgba(7, 59, 76, 0.6);
  font-weight: normal;
}

.job-listing-header__date-posted {
  display: block;
  font-size: 14px;
  font-style: italic;
}
@media screen and (min-width: 768px) {
  .job-listing-header__date-posted {
    margin-left: auto;
    align-self: flex-end;
  }
}

.job-listing-header__mata-table {
  text-align: left;
}

.job-listing-header__mata-table th,
.job-listing-header__mata-table td {
  padding-top: 4px;
  padding-bottom: 4px;
  vertical-align: middle;
}

.job-listing-header__mata-table td {
  padding-left: 8px;
}

.job-listing-header__job-details-bottom {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
}

.job-listing__job-description {
  padding: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 6%;
}

.job-listing__job-description-title {
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px;
  padding: 16px;
  color: #FFFFFF;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #073B4C;
}

.sidebar-widget {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  margin-bottom: 32px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.sidebar-widget__title {
  margin-bottom: 0;
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #EDEFF2;
}

.sidebar-widget__related-jobs {
  margin: 0;
  padding: 16px;
  list-style: none;
}

.sidebar-widget__related-job:not(:last-of-type) {
  padding-bottom: 16px;
  border-bottom: 2px solid #EDEFF2;
}

.sidebar-widget__related-job:not(:first-of-type) {
  padding-top: 16px;
}

.sidebar-widget__related-job--link {
  display: flex;
  flex-direction: column;
  color: #073B4C;
  text-decoration: none;
}

.sidebar-widget__related-job-title {
  margin-bottom: 8px;
  font-size: 20px;
}

.sidebar-widget__related-job-company {
  font-weight: bold;
}

.sidebar-widget__related-job-company,
.sidebar-widget__related-job-location {
  font-size: 16px;
  margin-bottom: 4px;
}

.sidebar-widget__related-job-date {
  font-size: 14px;
  font-style: italic;
}

.sidebar-widget__quick-actions a {
  display: block;
  padding: 16px;
  color: #0CAADC;
  text-decoration: none;
}

.btn-apply {
  display: inline-block;
  padding: 16px 24px;
  color: #FFFFFF;
  font-size: 16px;
  text-decoration: none;
  background-color: #56D39B;
  border-radius: 100px;
}
.btn-apply:hover, .btn-apply:focus {
  background-color: #46cf91;
}

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
</style>