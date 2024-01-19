
<template>
  <v-app>
    <v-app-bar>
      <v-btn density="compact" elevation="4" class="broun" to="/">
        Home
      </v-btn>
      <v-btn density="compact" elevation="4" class="broun" to="/about">
        About us
      </v-btn>
    </v-app-bar>
    <v-main class="nav">
      <router-view />
    </v-main>
    <v-footer class="footer">
      <div class="copyright">
        &copy;
      </div>
      <div class="links">
        <p> tel: 8(905)555-55-20</p>
        <img src="./assets/icons/telegram (1).svg" alt="Telegram" />: t-me/cost-counterMsd345
      </div>
    </v-footer>
  </v-app>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  margin-top: 30px;
  box-sizing: border-box;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-toolbar__content,
.v-toolbar__extension {
  justify-content: center;
  gap: 70px;
  background-color: blanchedalmond;
}

.broun {
  background-color: burlywood;
}

.footer {
  background-color: #b1b3b6;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
