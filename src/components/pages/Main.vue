<template>
    <div class="content">
        <app-filter @changeState="changeState" @filterItem="filterItem" :state="state"></app-filter>
        <div class="catalog">
            <transition name="fade">

                <app-preview v-if="state === 'preview'" :cards="cards"></app-preview>
                <app-detail v-if="state === 'detail'" :cards="cards"></app-detail>
                <app-row v-if="state === 'row'" :cards="cards"></app-row>

            </transition>
        </div>
    </div>
</template>

<script>

import AppFilter from '../blocks/AppFilter.vue'
import AppPreview from '../blocks/AppPreview.vue'
import AppDetail from '../blocks/AppDetail.vue'
import AppRow from '../blocks/AppRow.vue'

import collection from '../../../static/json/cards.json'

export default {
  components: {AppFilter, AppPreview, AppDetail, AppRow},
  data () {
    return {
      cards: collection,
      state: 'detail'
    }
  },
  methods: {
    changeState (type) {
      this.state = type
    },
    filterItem (key, value) {
      this.cards = collection.filter(card => {
        return card[key].toLowerCase() === value.toLowerCase()
      })
    }
  }
}
</script>
