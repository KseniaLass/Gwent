<template>
    <div class="content">
        <app-filter @changeState="changeState"></app-filter>
        <div class="catalog">
            <app-preview v-if="state === 'preview'" :cards="cards"></app-preview>
            <app-detail v-if="state === 'detail'" :cards="cards"></app-detail>
            <app-table v-if="state === 'table'" :cards="cards"></app-table>
        </div>
    </div>
</template>

<script>

import AppFilter from '../blocks/AppFilter.vue'
import AppPreview from '../blocks/AppPreview.vue'
import AppDetail from '../blocks/AppDetail.vue'
import AppTable from '../blocks/AppTable.vue'
export default {
  components: {AppFilter, AppPreview, AppDetail, AppTable},
  data () {
    return {
      cards: [
        {
          id: 1,
          name: 'Adrenaline Rush',
          type: 'bronze',
          fraction: 'neutral',
          rarity: 'normal',
          line: 'melee',
          img: 'card-example.png'
        },
        {
          id: 2,
          name: 'Zoltan',
          type: 'gold',
          fraction: 'neutral',
          rarity: 'legendary',
          line: 'melee',
          img: 'zoltan.png'
        },
        {
          id: 3,
          name: 'Blue Mountain Elite',
          type: 'bronze',
          fraction: 'scoiatael',
          rarity: 'normal',
          line: 'special',
          img: 'elf.png'
        },
        {
          id: 4,
          name: 'Blue Mountain Elite',
          type: 'bronze',
          fraction: 'scoiatael',
          rarity: 'normal',
          line: 'special',
          img: 'elf.png'
        }
      ],
      state: 'detail'
    }
  },
  methods: {
    changeState (type) {
      this.state = type
    }
  }
}
</script>
