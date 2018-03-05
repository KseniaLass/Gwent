<template lang="pug">
    .card
        h1.card__title Adrenaline Rush {{ getCardByID }}
        .card__body
            .card__image
                img(src="static/cards/1.png")
            .card__info
                ul.card__list
                    li.card__item
                        span.card__item__title Тип:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title Фракция:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title Редкость:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title Линия:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title Сила:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title Создать:
                        strong.card__item__value Бронза
                    li.card__item
                        span.card__item__title В жернова:
                        strong.card__item__value Бронза
                .card__text Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.
                .card__history Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что
</template>

<script>
export default {
  props: ['cards'],
  data () {
    return {
      // cardID: $route
    }
  },
  computed: {
    getCardByID () {
      let id = this.$route.params.id
      return this.cards
    }
  }
}
</script>

<style lang='scss' scoped>
    .card {
        padding: 0px 40px;
        &__title {
            color: $grey;
            font-size: 30px;
        }
        &__body {
            display: flex;
            justify-content: center;
        }
        &__image {
            margin-right: 42px;
            flex-basis: 100%;
            max-width:365px;
            img {
                max-width:100%;
                max-height:100%;
            }
        }
        &__info {
            padding-top: 58px;
            padding-right: 13px;
            flex-basis: 70%;
        }
        &__list {

            margin-bottom: 24px;
        }
        &__item {
            margin-bottom: 21px;
            font-size: 19px;
            &__title {
                color: $lightgrey;
                display: inline-block;
                margin-right: 7px;
            }
            &__value {
                color: $grey;
                text-transform: capitalize;
            }
        }
        &__text {
            font-size: 14px;
            margin-bottom: 22px;
            padding: 0 55px 0 0;
            line-height: 1.2;
        }
        &__history {
            background: #d4d4d4;
            font-style: italic;
            font-size: 14px;
            border-left: 3px solid $grey;
            padding: 14px 17px 14px 17px;
            line-height: 1.25;
        }
    }
</style>
