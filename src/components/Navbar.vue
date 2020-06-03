<template>
  <div class="navbar">
    <div class="logo">
     <img src="https://news.ycombinator.com/y18.gif" alt="logo">
    </div>
    <p>Hacker News</p>
    <ul>
      <li><router-link to="/news">news</router-link> </li>
      <li><router-link to="/newest">newest</router-link> </li>
      <li><router-link to="/show">show</router-link> </li>
      <li><router-link to="/ask">ask</router-link> </li>
      <li><router-link to="/jobs">jobs</router-link> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
}
a {
  text-decoration: none;
  color: black;
  margin-right: 10px;
}
a::after {
  content: "  | "
}
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(239,101,55);
  height: 30px;
  font-size: 0.8em;
  width: 90%;
  margin: auto;
}
p {
  margin-left: 5px;
}
img {
  outline: 1px solid white;
  margin-left: 10px;
}


</style>
