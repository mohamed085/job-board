<template>
  <div class="jobs">
    <div class="title-2 mb-4">Your posted jobs</div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Created time</th>
          <th scope="col">Type</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <th>Junior Java Developer</th>
          <th>2018-01-20</th>
          <th>Full time</th>
          <th>
            <router-link class="job-detail" to="/dashboard/job/asdads">Detail</router-link>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs"
}
</script>

<style lang="scss" scoped>
.job-detail {
  
}
</style>