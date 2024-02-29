<template>
    <nav>
        <router-link to="/">Главная</router-link> |
        <router-link to="/favourites">Избранное</router-link>
    </nav>
</template>

<script>

</script>

<style scoped>
nav {
  margin-bottom: 50px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>