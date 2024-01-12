<template>
  <v-app>
    <v-app-bar>
      <v-btn density="compact" elevation="4" class="broun">
        Home
      </v-btn>
      <v-btn density="compact" elevation="4" class="broun">
        About us
      </v-btn>
    </v-app-bar>
    <v-main>
      <nav>
      </nav>
      <router-view />
    </v-main>
    <v-footer class="footer"></v-footer>
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

nav {
  padding: 30px;

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
}
</style>
