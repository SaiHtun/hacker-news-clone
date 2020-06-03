<template>
  <div class="news-item">
    <p class="item-title"><a :href="item.url">{{item.title}}</a>
     <span class="domain"> ({{item.domain}})</span>
    </p>
    <p class="item-details">{{item.points}}
    points by {{item.user}}
    {{item.time_ago}} |
    <router-link :to="{ name: 'news-item', params: { id: item.id }}">
    {{item.comments_count}} comments
    </router-link> </p>
  </div>
</template>

<script>

export default {
  name: 'NewsItems',
  props: ['item'],
};
</script>

<style>
.news-item {
  font-size: 0.9em;
}
.item-title {
  margin-bottom: 0px;
}
.item-title::before {
  counter-increment: news;
  content: counter(news) ".";
  margin-right: 5px;
  color: rgb(152,152,151);
}
.item-details {
  margin-left: 20px;
  margin-top: 0px;
  font-size: 0.7em;
}
a {
  text-decoration: none;
  color: black;
}
.domain {
  color: rgb(152,152,151);
}
</style>
