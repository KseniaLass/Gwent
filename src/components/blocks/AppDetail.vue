<template lang='pug'>
    .detail
        .detail__content.clearfix
            .detail__item.card(v-for="card in cards")
                .card__head
                    img(:src="'static/cards/' + card.img")
                .card__body
                    .card__title {{ card.name }}
                    .card__info
                        .card__list
                            span Тип:
                            strong  {{ card.type }}
                        .card__list
                            span Фракция:
                            strong  {{ card.fraction }}
                        .card__list
                            span Редкость:
                            strong  {{ card.rarity }}
                        .card__list
                            span Линия:
                            strong  {{ card.line }}
                    a(href="#").card__btn.btn.btn-super Подробнее

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
    .detail {
        padding: 0 41px;
        &__content {
            margin:0 -15px;
            display: flex;
            flex-flow: row wrap;
        }
        &__item {
            width:50%;
            float: left;
            display: flex;
            margin-bottom: 70px;
        }
    }
    .card {
        &__head {
            margin-right: 40px;
            flex-basis: 35%;
            max-width:217px;
            img{
                max-width:100%;
            }
        }
        &__body {
            padding: 20px 0;
            display: flex;
            flex-flow: row wrap;
            flex-basis: 65%;
        }
        &__title {
            font-size: 36px;
            color: $lightgrey;
            min-height: 72px;
        }
        &__info {
            width: 100%;
        }
        &__list {
            font-size: 18px;
            margin-bottom: 5px;
            span {
                color: $lightgrey;

            }
            strong {
                color: $grey;
                text-transform: capitalize;
            }
        }
        &__btn {
            display: inline-block;
            padding: 17px 40px;
            align-self: flex-end;
        }
    }
</style>
