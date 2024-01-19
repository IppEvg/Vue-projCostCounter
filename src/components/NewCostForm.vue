<template>
    <form action="#" @submit.prevent="addNewCost()">
        <div class="exit"> <button type="button" @click="closeWindow">X</button></div>
        <h3>Fill position of your new cost</h3>
        <p>Today : {{ today }}</p>
        <select class="input" v-model="category">
            <option v-for="option of getCategories">
                {{ option }}
            </option>
        </select>
        <input class="input" type="number" v-model="value" placeholder="cost of purchase">
        <button type="submit">Add +</button>
        <p v-show="this.$store.getters.getInvertRedact">
            You are redacting now: <br> <span>date</span> {{ this.$store.getters.getRedactProd.date }},
            <span>category</span> {{ this.$store.getters.getRedactProd.category }},
            <span>value</span> {{ this.$store.getters.getRedactProd.value }}
        </p>
    </form>
</template>

<script>
import { provide } from 'vue'

export default {
    name: "newCostForm",

    data() {
        return {
            today: new Date().getDate() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
            category: "Food",
            value: '',
        }
    },

    methods: {
        addNewCost() {
            let purchase = {}
            if (this.$store.getters.getInvertRedact) {
                let prod = this.$store.getters.getRedactProd
                purchase = { id: prod.id, isDone: false, date: prod.date, category: this.category, value: +this.value }
                this.$store.commit("setNewCost", purchase);
            } else {
                let id = Math.floor(Math.random() * (100));
                while (this.$store.getters.getProducts.find(e => e.id == id)) {
                    id++
                }
                purchase = { id: id, isDone: false, date: this.today, category: this.category, value: +this.value }
                this.$store.commit("setNewCost", purchase)
            }
            this.$store.commit("setShow")
        },
        closeWindow() {
            this.$store.commit("setShow")
            if (this.$store.getters.getInvertRedact) {
                this.$store.commit("setIsRedact")
            }
        }
    },
    computed: {
        getCategories() {
            return this.$store.getters.getCategories
        },
    },
    mounted() {
        if (this.$store.getters.getCategories.length === 0) {
            this.$store.dispatch("getCategoryList")
        }
        if (this.$route.params.category) {
            this.category = this.$route.params.category
            this.value = this.$route.params.cost
        } else if (this.$store.getters.getInvertRedact) {
            this.category = this.$store.getters.getRedactProd.category
            this.value = this.$store.getters.getRedactProd.value
        }

    }
}
</script>

<style lang="scss" scoped>
form {
    margin: 0;
    position: relative;

    h3,
    p,
    input,
    button,
    select {
        margin: 4px 0;

    }

    input,
    select {
        padding: 5px;
        border: 1px solid black;
        background-color: moccasin;
    }

    .input {
        min-width: 80%;
        box-sizing: border-box;
    }

    button {
        padding: 1px 8px;
        background-color: rgb(223, 223, 223);
        border-style: solid;
    }

    span {
        color: brown;
    }

    .exit {
        position: absolute;
        top: 3px;
        right: 3px;
    }
}
</style>