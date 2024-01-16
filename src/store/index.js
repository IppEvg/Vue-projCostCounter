import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    pageProd: [],
    interval: 1,
    show: false,
    pages: [],
    summ: 0,
    categories: [],
    isRedact: false,
    redactProd: {}
  },
  getters: {
    getProducts: (state) => state.products,
    getPageProd: (state) => {
      const i = (state.interval - 1) * 10;
      state.pageProd = state.products.slice(i, i + 10);
      return state.pageProd
    },
    getShow: (state) => state.show,
    getPages: (state) => state.pages,
    getInterval: (state) => state.interval,
    getSumm: (state) => state.products.filter(e => e.isDone === false).reduce((sum, iteration) => sum + iteration.value, 0),
    getCategories: (state) => state.categories,
    getFirstCategory: (state) => state.categories[0],
    getInvertRedact: (state) => state.isRedact,
    getRedactProd: (state) => state.redactProd,
  },
  mutations: {
    setProducts: (state, payload) => state.products = payload,
    setNewCost: (state, payload) => {
      if (state.isRedact) {
        const reductProdIndex = state.products.findIndex(e => e.id === payload.id)
        state.products.splice(reductProdIndex, 1, payload)
        state.isRedact = false
      }
      else {
        state.products.push(payload)
      }
    },
    setShow: (state, payload) => {
      if (payload) {
        state.isRedact = !state.isRedact
        state.redactProd = { ...payload }
      }
      state.show = !state.show
    },
    setIsRedact: (state) => state.isRedact = false,
    delProduct: (state, payload) => {
      const prod = state.products.findIndex(e => e.id == payload.id)
      state.products.splice(prod, 1)
    },
    setPage: (state, payload) => {
      if (payload === "n" && state.interval < Math.ceil(state.products.length / 10)) {
        state.interval = +state.interval + 1
      } else if (payload === "p" && 1 < state.interval) {
        state.interval = +state.interval - 1
      } else if (Number.isInteger(payload)) {
        state.interval = +payload
      }
    },
    addPage: (state, payload) => state.pages = [...state.pages, payload],
    setCategories: (state, payload) => state.categories.push(payload),
    changeDone: (state, payload) => {
      let string = state.products.find(e => e.id === payload)
      return string.isDone = !string.isDone
    }

  },
  actions: {
    loadProducts({ commit }) {
      return new Promise((resolve) => {
        let list = [];
        let date = new Date().getDate() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getFullYear();
        function generateRandomString() {
          let result = '';
          let characters = ["Food", "Clothes", "Health", "Event", "Travel", "Other"];
          let charactersLength = characters.length;
          result = characters[Math.floor(Math.random() * charactersLength)];

          return result
        };
        for (let i = 0; i < 18; i++) {
          let id = Math.floor(Math.random() * (100));
          let word = generateRandomString();
          let cost = Math.floor(Math.random() * 5000);
          while (list.find(e => e.id == id)) {
            id++
          }
          list.push({ id: id, isDone: false, date: date, category: word, value: cost })
        }
        resolve(list)
      })
        .then((list) => {
          commit("setProducts", list)
        })
    },
    getCategoryList({ commit }) {
      return new Promise((res) => {
        res(["Food", "Clothes", "Health", "Event", "Travel", "Other"])
      })
        .then((list) => {
          for (let item of list) {
            commit("setCategories", item)
          }
        })
    }
  },
  modules: {
  }
})
