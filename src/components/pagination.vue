<template>
    <div class="pagination">
        <div class="arrleft" @click="toOtherPage('p')">&#9668;</div>
        <div class="pages" v-for="item of calcPage" @click="toOtherPage(item)"
            v-bind:class="this.$store.getters.getInterval == item ? 'pagesOn' : 'pages'">{{
                item }}</div>
        <div class="arright" @click="toOtherPage('n')">&#9658;</div>
    </div>
</template>
<script>
export default {
    name: "pagination",

    data() {
        return {
        }
    },

    methods: {
        toOtherPage(z) {
            this.$store.commit("setPage", z)
        }
    },

    computed: {
        calcPage() {
            let pages = Math.ceil(this.$store.getters.getProducts.length / 10);
            for (let i = 1; i <= pages; i++) {
                if (!this.$store.getters.getPages.find(e => e == i)) {
                    this.$store.commit("addPage", i)
                }
            }
            return this.$store.getters.getPages
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        padding: 8px;
        cursor: pointer;
    }
}

:hover.pages,
:hover.arrleft,
:hover.arright {
    transform: scale(1.1, 1.1);
}

.pages {
    color: black;
}

.pagesOn {
    color: rgb(241, 151, 33);
    border: 1px solid rgb(241, 151, 33);
}
</style>