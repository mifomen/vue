<template>
  <div class="home">
    <HelloWorld msg="Welcome Mifomen to Your Vue.js App" />
    {{ name }} {{ age }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      name: "mifomen",
      age: 18,
    };
  },
};
</script>
