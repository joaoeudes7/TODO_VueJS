<template>
  <div id="app">
    <nav-bar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'ToDo',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: #313640;
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
}

h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
