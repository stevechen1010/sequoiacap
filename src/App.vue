<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

ul, li {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
body {
  width: 100%;
  height: 100vh;
}
#app {
  min-width: 320px;
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
