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

                a(  href="#"
                    v-bind:class="state === 'row' ? 'is-active' : '' "
                    v-on:click.prevent="$emit('changeState', 'row')"
                ).row__item.row__item-table
                    .row__text Таблицей

                a(  href="#"
                    v-bind:class="state === 'preview' ? 'is-active' : '' "
                    v-on:click.prevent="$emit('changeState', 'preview')"
                ).row__item.row__item-preview
                    .row__text Превью

                a(  href="#"
                    v-bind:class="state === 'detail' ? 'is-active' : '' "
                    v-on:click.prevent="$emit('changeState', 'detail')"
                ).row__item.row__item-detail
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

            .filter__row.row.row-fullwidth
                .row__title Включая токены:
                .row__checkbox.checkbox
                    input.checkbox__input#token(type="checkbox" value="value1")
                    label.checkbox__label(for="token")

        .filter__footer.clearfix
            .filter__submit
                a(href="#").filter__btn.btn.btn-super Найти
                a(href="#").filter__clear Сбросить фильтры

            .filter__pagination.pagination
                a(href="#").pagination__btn.btn.btn-transparent 1
                a(href="#").pagination__btn.btn.btn-transparent 2
                a(href="#").pagination__btn.btn.btn-transparent 3
                a(href="#").pagination__btn.btn.btn-transparent Дальше

        .filter__border
</template>
<script>
export default {
  props: ['state'],
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
            padding: 18px 40px 18px;
            float: left;
        }
        &__footer {
            padding:0 41px;
            margin: 21px 0;
        }
        &__submit {
            display: inline-block;
            float: left;
        }
        &__btn {
            margin-right: 17px;
            padding: 0 48px;
            height: 45px;
            line-height: 45px;
        }
        &__clear {
            display: inline-block;
            color: $pumpkin;
            font-size: 14px;
            &:hover {
                text-decoration: none;
            }
        }
        &__pagination {
            float: right;
        }
        &__border {
            background: url('../../assets/img/border-conent.png') no-repeat;
            width:100%;
            height:20px;
            background-position: 50% 50%;
            padding: 40px 0;
        }
    }
    .row {
        &-fullwidth {
            width:100%;
        }
        &__title {
            font-size: 18px;
            color: #464646;
            font-weight:500;
            display: inline-block;
            margin-right: 4px;
            vertical-align: middle;
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
            left: 87px;
            top: 32px;
        }
    }
    .checkbox {
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        &__input {
            position: absolute;
            opacity: 0;
            & + label {
                position: relative;
                cursor: pointer;
                padding: 0;
            }
            & + label:before {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 40px;
                height: 40px;
                background: transparent;
                border: 3px solid $green;
                transition: .2s ease-out;
            }
            &:hover + label:before {
                //background: $green;
            }
            &:focus + label:before {
                box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
            }
            &:checked + label:before {
            }
            &:disabled + label {
                color: #b8b8b8;
                cursor: auto;
            }
            &:disabled + label:before {
                box-shadow: none;
                background: #ddd;
            }
            &:checked + label:after {
                content: '';
                position: absolute;
                left: 5px;
                top: -12px;
                width:45px;
                height:45px;
                background: url('../../assets/img/icon-check.png');
                background-size: cover;

            }
        }
    }

    .pagination {
        &__btn {
            min-width:38px;
            height: 38px;
            line-height: 34px;
            margin-right: 3px;
            padding:0 10px;
        }
    }
</style>
