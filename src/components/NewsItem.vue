<template>
  <div class="item">
    <h3 v-if="loading">Loading..</h3>
    <div class="current-news-item">
      <news-items v-if="!loading" :item="currentNewsItem" />
      <comment class="news-comment"
      v-for="comment in currentNewsItem.comments"
      :key="comment.id" :data="comment"/>
    </div>
  </div>
</template>

<script>
import { useState, useRouter, useActions } from '@u3u/vue-hooks';
import { onBeforeMount } from '@vue/composition-api';
import Comment from './Comment.vue';
import types from '../types';

export default {
  name: 'NewsItem',
  components: {
    Comment,
  },
  setup() {
    const { currentNewsItem, loading } = useState(['currentNewsItem', 'loading']);
    const { route } = useRouter();
    const { GET_NEWS_ITEM } = useActions([types.GET_NEWS_ITEM]);
    onBeforeMount(() => {
      GET_NEWS_ITEM(route.value.params.id);
    });
    return {
      currentNewsItem,
      loading,
    };
  },
};
</script>

<style>
.current-news-item .item-title::before {
  content: none;
}
.item {
  box-sizing: border-box;
  background-color: rgb(246,246,239);
  padding: 3px 0px 2px 20px;
  width: 90%;
  margin: auto;
}
.news-comment {
  margin-bottom: 20px;
}
</style>
