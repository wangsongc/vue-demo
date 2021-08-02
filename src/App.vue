<template>
    <div id="v-main">
      <p v-if="!welcomeValue">
        Please enter your name : <input type="text" @keyup.enter="username" />
      </p>
      <p v-else>
        Welcome again : {{ welcomeValue }}
        <button @click="deleteUser">{{ deleteUserText }}</button>
        {{ deleteUserState }}
      </p>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: function() {
    return {
      welcomeValue: this.$cookies.get("username"),
      deleteUserText: "Delete Cookie",
      deleteUserState: "",
    };
  },
  methods: {
    username: function(event) {
      this.welcomeValue = event.target.value;
      this.$cookies.set("username", this.welcomeValue);
    },
    deleteUser: function() {
      this.$cookies.remove("username");
      this.deleteUserState = "√";

      setTimeout(function() {
        location.reload();
      }, 0.5 * 1000);
    },
  }
}
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
