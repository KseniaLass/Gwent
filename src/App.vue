<template lang="pug">
  #app
    header.header
      img.header__img(src="./assets/img/header.png" alt="WildKegs")
    .container
      router-view
    .footer
      .footer__text © 2018 Wild Kegs
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
    font-weight:400;
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
    padding: 40px 0;
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
.footer {
    padding: 50px 0 45px;
    text-align: center;
    color: #bfbfbf;
    font-size: 14px;
}
</style>
