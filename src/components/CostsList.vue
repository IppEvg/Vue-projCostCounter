<template>
    <div class="wrap">
        <button class="add" @click="showChenge()">New cost +</button>
        <div class="modalwrap">
            <transition name="form">
                <NewCostForm v-if="this.$store.getters.getShow" class="modal"></NewCostForm>
            </transition>
        </div>
        <p>Summary costs: <span class="summ">{{ this.$store.getters.getSumm }}</span></p>
        <div class="list">
            <div class="item color">
                <p></p>
                <p>Id</p>
                <p>Date</p>
                <p>Purchase</p>
                <p>Cost</p>
                <div class="min">Red</div>
                <div class="min">Del</div>
            </div>
            <div v-for="item of getProd" key="item.id" :class="{ item: true, done: item.isDone }">
                <input type="checkbox" @change="onChangeDone(item.id)" :checked="item.isDone" />
                <p>{{ item.id }}</p>
                <p>{{ item.date }}</p>
                <p>{{ item.category }}</p>
                <p>{{ item.value }}</p>
                <div><v-btn variant="outlined" @click="showChenge(item)" v-if="item.isDone" disabled><v-img
                            src="../assets/edit.svg" :width="18" :class="{ disadled: item.isDone }" /></v-btn>
                    <v-btn variant="outlined" @click="showChenge(item)" v-else><v-img src="../assets/edit.svg" :width="18"
                            :class="{ disadled: item.isDone }" /></v-btn>
                </div>
                <div><v-btn variant="outlined" @click="deleteProduct(item)" v-if="item.isDone" disabled><v-img
                            src="../assets/del.svg" :width="18" />
                    </v-btn>
                    <v-btn variant="outlined" @click="deleteProduct(item)" v-else><v-img src="../assets/del.svg"
                            :width="18" />
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewCostForm from './NewCostForm.vue';

export default {
    name: "costlist",
    components: { NewCostForm },
    methods: {
        showChenge(item) {
            this.$store.commit("setShow", item)
        },
        deleteProduct(item) {
            this.$store.commit("delProduct", item)
        },
        onChangeDone(id) {
            this.$store.commit("changeDone", id)
        }
    },
    computed: {
        getProd() {
            return this.$store.getters.getPageProd
        }
    },
    mounted() {
        this.$store.dispatch("loadProducts")
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    position: relative;
    min-height: 525px;
}

.add {
    padding: 10px 20%;
    background-color: rgb(223, 223, 223);
    border-style: solid;
}

.summ {
    color: green
}

.modalwrap {
    position: absolute;
    top: 30%;
    width: 100%;
    z-index: 1;
}

.modal {
    background-color: rgb(153, 123, 84);
    margin: 0 auto;
    padding: 30px;
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.list {
    display: grid;
    grid-template-rows: repeat(auto-fill);
    border: 1px solid black;
    margin-top: 30px;
}

.item {
    display: grid;
    grid-template-columns: 0.2fr 0.3fr 1fr 1fr 1fr 0.2fr 0.2fr;
    max-height: fit-content;

    input {
        box-sizing: border-box;
        margin: 10%;
    }

    p {
        padding: 4px 0;
        border: 1px solid black;
        margin: 2px;
        box-sizing: border-box;
        vertical-align: middle;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        button {
            max-width: 90%;
            max-height: 90%;



            img {
                max-width: 45%;
            }
        }

        .v-btn--size-default {
            min-width: 45px;
        }
    }
}

.done {
    color: #ccc;

    p {
        text-decoration: line-through;
    }
}

.color {
    background-color: burlywood;
    border-bottom: 1px solid black;

    p {
        border: none;
    }
}

.form-enter-from,
.form-leave-to {
    opacity: 0;
}

.form-enter-to,
.form-leave {
    opacity: 1;
}

.form-enter-active,
.form-leave-active {
    transition: 0.7s;
}

.min {
    min-width: 52px;
}

@media (max-width: 600px) {
    .wrap {
        min-height: 299px;
    }

    .item {
        p {
            padding: 2px 0;
            font-size: 12px;
        }
    }
}
</style>
