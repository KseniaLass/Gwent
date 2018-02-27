<template lang='pug'>
    .preview
        .preview__content
            a(href="#" v-for="card in cards").preview__card
                img(:src="'static/cards/' + card.img").preview__img
</template>
<script>
export default {
  props: ['cards'],
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
    .preview {
        &__content {
            padding: 26px 55px;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;

        }
        &__card {
            display: inline-block;
            width: 278px;
            height: 366px;
            &:hover {
                .preview__img {
                    transform: scale(1.1);
                }
            }
        }
        &__img {
            width: 278px;
            height: 366px;
            max-width:100%;
            transition: .2s ease-out;
        }
    }
</style>
