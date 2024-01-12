<template>
    <costList>
        <newCostForm></newCostForm>
    </costList>
    <pagination></pagination>
</template>
<script>
import newCostForm from "@/components/NewCostForm"
import costList from "@/components/CostsList"
import pagination from "@/components/pagination"
export default {
    name: "AddView",
    components: {
        newCostForm, pagination, costList
    },
    mounted() {
        this.$store.commit("setShow")
    }
}
</script>
