<template lang='pug'>
    .filter
        h2.filter__title Поиск карт
        .filter__header.clearfix
            // TODO: выделить поиск в отдельный компонент
            .filter__search.filter__row.search
                label(for='search-input').search__label Поиск
                input.search__input#search-input
            .filter__row.row
                .row__title Вид:

                .row__item.row__item-table.is-active
                    .row__text Таблицей

                .row__item.row__item-preview
                    .row__text Превью

                .row__item.row__item-detail
                    .row__text Детальный просмотр

        .filter__body.clearfix

            .filter__row.row
                .row__title Тип:

                .row__item(v-for='type in params[0].type')
                    .row__text {{type}}

            .filter__row.row
                .row__title Редкость:

                .row__item(v-for='rarity in params[0].rarity')
                    .row__text {{rarity}}

            .filter__row.row
                .row__title Фракция:

                .row__item(v-for='fraction in params[0].fraction')
                    .row__text {{fraction}}

            .filter__row.row
                .row__title Линия:

                .row__item(v-for='line in params[0].line')
                    .row__text {{line}}

</template>
<script>
export default {
  data () {
    return {
      params: [
        {
          type: ['Золото', 'Серебро', 'Бронза', 'Лидер'],
          rarity: ['Обычная', 'Редкая', 'Эпическая', 'Легендарная'],
          fraction: ['Нейтральные', 'Королевства Севера', 'Скоя`таэли', 'Чудовища', 'Скелиге', 'Нильфгард'],
          line: ['Рукопашный', 'Дальний бой', 'Осадный', 'Особый']
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
    .filter {
        &__title {
            font-size: 30px;
            color: $grey;
            font-weight:700;
            padding:0 41px;
        }
        &__header {
            margin:7px 0 0;
        }
        &__body {
            margin:4px 0 0;
        }
        &__row {
            margin: 18px 40px 18px;
            float: left;
        }
    }
    .row {
        &__title {
            font-size: 18px;
            color: #464646;
            font-weight:500;
            display: inline-block;
            margin-right: 4px;
            vertical-align: middle;
        }
        &__list {

        }
        &__item {
            border: 3px solid $green;
            color: $green;
            display: inline-block;
            padding: 0 17px;
            min-width: 95px;
            text-transform: uppercase;
            height: 45px;
            margin:0 8px;
            cursor: pointer;
            transition: .2s ease-out;
            text-align: center;
            &.is-active,
            &:hover {
                border: 3px solid $green;
                background: $green;
                color: #ffffff;
                &:before {
                    background-position: 100% 0 !important;
                }
            }
            &:last-child {
                margin:0 0 0 8px;
            }
            &-table {
                &:before {
                    content: '';
                    background: url('../../assets/img/icon-table-sprite.png') no-repeat 0 0;
                    width: 18px;
                    height: 20px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
            &-preview {
                &:before {
                    content: '';
                    background: url('../../assets/img/icon-preview-sprite.png') no-repeat 0 0;
                    width: 33px;
                    height: 29px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
            &-detail {
                &:before {
                    content: '';
                    background: url('../../assets/img/icon-detail-sprite.png') no-repeat 0 0;
                    width: 34px;
                    height: 34px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
            }
        }
        &__text {
            line-height: 40px;
            font-size: 15px;
            display: inline-block;
            font-weight:500;
            vertical-align: middle;

        }
    }
    .search {
        position: relative;
        &__input {
            border: 3px solid $green;
            background: url('../../assets/img/icon-search.png'), transparent;
            background-size: 41px 41px;
            background-repeat: no-repeat;
            background-position: 0 50%;
            height: 45px;
            line-height: 46px;
            color: $green;
            font-size: 18px;
            padding:0 45px;
            width: 560px;
        }
        &__label {
            color: $green;
            font-size: 18px;
            position: absolute;
            left: 48px;
            top: 15px;
        }
    }
</style>
