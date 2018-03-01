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
        padding: 0 41px;
        &__content {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;

        }
        &__card {
            display: inline-block;
            width: 200px;
            &:hover {
                .preview__img {
                    transform: scale(1.1);
                }
            }
        }
        &__img {
            width: 100%;
            transition: .2s ease-out;
        }
    }
</style>
