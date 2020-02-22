<template>
  <div id="app">
    <p>hi, I'm {{name}}</p>
    <p>I'm a {{gender}}</p>
    <p>and I live in {{addr}}</p>
    <p>I'm {{GetAge}} years old.</p>
    <p>Just kidding, I'm actually {{GetRealAge}} years old.</p>
    <p>And next year I'll be {{GetNextAge}} years old.</p>

    <!-- <button @click="add">and next year?</button> -->
  </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("user");

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("user/sayHi");
    this.$store.dispatch("another/sayHi");
  },
  computed: {
    ...mapState(["name", "gender", "addr"]),
    ...mapGetters(["GetAge", "GetRealAge", "GetNextAge"])
  },
  methods: {
    add() {
      this.$store.dispatch("another/addYear");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
