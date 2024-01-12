<template>
  <CostsList></CostsList>
  <pagination></pagination>
</template>

<script>
import { defineComponent } from 'vue'
import CostsList from '@/components/CostsList.vue'
import pagination from '@/components/pagination.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    CostsList, pagination
  },
});
</script>
