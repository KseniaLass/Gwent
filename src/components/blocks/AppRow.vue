<template lang="pug">
    .row
        .row__content
            table.row__table.table

                    tr.table__head__tr
                        td.table__head__td
                            a(href="#").table__head__link.is-active
                                span Имя
                        td.table__head__td
                            a(href="#").table__head__link
                                span Фракция
                        td.table__head__td
                            a(href="#").table__head__link
                                span Сила
                        td.table__head__td
                            a(href="#").table__head__link
                                span Линия
                        td.table__head__td
                            a(href="#").table__head__link
                                span Тип

                    tr.table__body__tr(v-for="card in cards")
                        td.table__body__td.table__name {{ card.name }}
                        td.table__body__td {{ card.fraction }}
                        td.table__body__td {{ card.strength }}
                        td.table__body__td {{ card.line }}
                        td.table__body__td {{ card.type }}
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
    .row {
        padding: 0 41px;
        &__content {

        }
        &__table {
            width:100%;
        }
    }
    .table {
        border-collapse: collapse;
        table-layout: fixed;
        thead {
            table-layout: fixed;
            width: 100%;
        }
        &__head {
            &__tr {
                background: $green;
            }
            &__td {
                border-right: 3px solid #e6e6e6;
            }
            &__link {
                color: #ffffff;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 18px;
                padding:22px 42px;
                display: inline-block;
                span {
                    position: relative;
                    &:after {
                        content: '';
                        width: 9px;
                        height: 13px;
                        background: url('../../assets/img/sort-arr.png') no-repeat;
                        display: inline-block;
                        margin-left: 7px;
                    }
                }
                &.is-active {
                    span:after {
                        background-position: 100% 100%;
                    }
                }

            }
        }
        &__body {
            &__tr {
                height: 46px;
                cursor: pointer;
                color: $grey;
                &:hover {
                    color: #ffffff;
                    background: $green !important;
                    .table__name {
                        color: #ffffff;
                    }
                }
                &:nth-child(odd) {
                    background: rgba(26, 133, 94, 0.2)
                }
            }
            &__td {
                vertical-align: middle;
                font-size: 18px;
                padding: 0 40px;
            }
        }
        &__name {
            color: $green;
        }
    }
</style>
