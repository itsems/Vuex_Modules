<template>
  <div id="app">
    <p>hi, I'm {{MyName}}</p>
    <p>I'm {{GetAge}} years old.</p>
    <p>Just kidding, I'm actually {{GetRealAge}} years old.</p>
    <p>And next year I'll be {{GetNextAge}} years old.</p>

    <button @click="add">and next year?</button>

    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  mounted() {
    // this.$store.dispatch("sayHi");
    this.$store.dispatch("user/sayHi");
    this.$store.dispatch("another/sayHi");
  },
  computed: {
    MyName() {
      return this.$store.state.user.name;
    },
    // ...mapGetters(["GetAge", "GetRealAge", "GetNextAge"])
    // ...mapGetters(["user/GetAge", "user/GetRealAge", "user/GetNextAge"])
    ...mapGetters({
      GetAge: "user/GetAge",
      GetRealAge: "user/GetRealAge",
      GetNextAge: "user/GetNextAge"
    })
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
