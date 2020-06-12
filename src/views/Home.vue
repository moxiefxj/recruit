<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {

  beforeMount() {
    this.$http.get("/user/findAll").then( res => {
      console.log(res)
    })
  },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
