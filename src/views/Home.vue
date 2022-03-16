<template>
  <div class="home">
      <router-link to="/sign-up">
        <div class="linkbox">
          <p>Sign-Up</p>
        </div>
      </router-link>

      <router-link to="/log-in">
        <div class="linkbox">
          <p>Log-In</p>
        </div>
      </router-link>
  </div>

  <router-view></router-view>
</template>

<script>
// @ is an alias to /src


export default {

}
</script>

<style >
.home{
  font-size: xx-large;
  text-decoration: none;
  }
.linkbox{
  height: 80px;
  width: 200px;
  background-color: rgb(136, 150, 230);
  margin-bottom: 80px;
  margin: 0 auto;
  
}
p{
  padding: 0.5em;
}
a{
  text-decoration: none;
}
</style>