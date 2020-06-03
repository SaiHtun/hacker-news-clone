<template>
  <div class="main">
    <navbar class="main-nav"></navbar>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  font-family: Verdana, Geneva, sans-serif;
  padding: 0;
  margin: 0;
};

</style>
