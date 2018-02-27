<template>
    <div class="content">
        <app-filter @changeState="changeState" :state="state"></app-filter>
        <div class="catalog">
            <transition name="fade">

                <app-preview v-if="state === 'preview'" :cards="cards"></app-preview>
                <app-detail v-if="state === 'detail'" :cards="cards"></app-detail>
                <app-table v-if="state === 'table'" :cards="cards"></app-table>

            </transition>
        </div>
    </div>
</template>

<script>

import AppFilter from '../blocks/AppFilter.vue'
import AppPreview from '../blocks/AppPreview.vue'
import AppDetail from '../blocks/AppDetail.vue'
import AppTable from '../blocks/AppTable.vue'

import collection from '../../../static/json/cards.json';

export default {
  components: {AppFilter, AppPreview, AppDetail, AppTable},
  data () {
    return {
      cards: collection,
      state: 'preview'
    }
  },
  methods: {
    changeState (type) {
      this.state = type
    }
  }
}
</script>