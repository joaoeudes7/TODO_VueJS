<template>
  <nav>
    <router-link tag="h1" to="/">Tarefas</router-link>
    <router-link tag="h1" to="/about">Sobre</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
}

h1 {
  cursor: pointer;
  background: #222222d3;
  border-radius: 8%;
  padding: 10px 10px;
  margin: 0 8px;
  font-size: 1.5em;
}

.router-link-exact-active {
  background: #4FC08D;
}
</style>
