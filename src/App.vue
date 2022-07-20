<template>
  <router-view />
  <span>
    <GetItems />
  </span>
</template>

<script>
import GetItems from "@/components/GetItems.vue";

export default {
  components: {
    GetItems,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: rgb(163, 42, 117);
  font-size: 33rem;
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
</style>
