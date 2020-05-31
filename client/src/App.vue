<template>
  <div id="app">
    <div class="menu">
      <router-link to>Личный кабинет</router-link>
    </div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: { HelloWorld },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.menu {
  position: fixed;
  top: 20px;
  right: 40px;
  z-index: 4;
  font-size: 20px;
}
</style>
