<template>
    <div class="content">
        <app-filter></app-filter>
        <div class="catalog">
            <app-preview :cards="cards"></app-preview>
        </div>
    </div>
</template>

<script>

import AppFilter from '../blocks/AppFilter.vue'
import AppPreview from '../blocks/AppPreview.vue'
export default {
  components: {AppFilter, AppPreview},
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
      ]
    }
  }
}
</script>
