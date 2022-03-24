<template>
  <div class="container container-xxl m-5 p-5">
    <div class="row mt-xxl-5">
      <div class="col-6 mt-lg-4 p-auto">
        <router-link to="/sign-up"
          ><button class="btn btn-success">新規登録</button></router-link
        >
      </div>
      <div class="col-6 mt-lg-4 p-auto">
        <router-link to="/log-in"
          ><button class="btn btn-success">ログイン</button></router-link
        >
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
// @ is an alias to /src

export default {}
</script>

<style>
.home {
  font-size: xx-large;
  text-decoration: none;
}
.linkbox {
  height: 80px;
  width: 200px;
  background-color: rgb(136, 150, 230);
  margin-bottom: 80px;
  margin: 0 auto;
}
p {
  padding: 0.5em;
}
a {
  text-decoration: none;
}
</style>
