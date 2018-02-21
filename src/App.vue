<template>
  <div id="app">
    <header class="header">
      <img class="header__img" src="./assets/img/header.png" alt="WildKegs">
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('assets/img/bg.jpg');
  height: 100%;
}
.header {
  font-size: 0;
  &__img {
    max-width:100%;
  }
}
.container {
  width:$width_content;
  min-height:500px;
  margin: 0 auto;
  background: url('assets/img/pattern.png');
  border: 5px solid;
  border-image: url('assets/img/border-vert.png') 30 round round;
  position: relative;
  padding:35px 45px;
  &:before {
    content: '';
    background: url('assets/img/border-up.png');
    width:100%;
    height:16px;
    top:-5px;
    left: 0;
    position: absolute;
  }
  &:after {
    content: '';
    background: url('assets/img/border-down.png');
    width:100%;
    height:16px;
    bottom:-5px;
    left: 0;
    position: absolute;
  }
}
</style>
