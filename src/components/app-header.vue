<template>
    <header>

    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    height:300px;
    width:100%;
    background: url('./assets/img/bg.jpg') 50% 50%;
    color: $red;
  }
</style>
