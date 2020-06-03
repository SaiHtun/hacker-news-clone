<template>
  <div class="home">
    <div class="news-item">
      <news-items
      v-for="item in newsItems"
      :key="item.id"
      :item="item">
      </news-items>
    </div>
    <div v-if="!loading">
      <p @click="loadMore" class="more">More</p>
    </div>
    <div class="loading" v-if="loading">
      <h3>loading..</h3>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, reactive } from '@vue/composition-api';
import NewsItems from '@/components/NewsItems.vue';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import types from '@/types.js';

export default {
  name: 'Home',
  components: {
    NewsItems,
  },
  setup() {
    const state = reactive({
      currentPage: 1,
    });
    const { route } = useRouter();
    const { newsItems, loading } = useState(['newsItems', 'loading']);
    const { GET_NEWS_ITEMS } = useActions([types.GET_NEWS_ITEMS]);
    onBeforeMount(() => {
      GET_NEWS_ITEMS({
        type: route.value.params.type,
        page: state.currentPage,
      });
    });
    const loadMore = () => {
      state.currentPage += 1;
      GET_NEWS_ITEMS({
        type: route.value.params.type,
        page: state.currentPage,
      });
    };
    return {
      loading,
      newsItems,
      loadMore,
    };
  },
};
</script>

<style scoped>
.home {
  width: 90%;
  margin: auto;
  background-color: rgb(246,246,239);
  counter-reset: news;
}
.news-item {
  padding: 3px 0px 0px 10px;
}
.more {
  margin: 5px 0px 10px 20px;
  color: rgb(153,153,152);
  cursor: pointer;
}
.loading {
  margin-left: 20px;
  font-size: 0.9em;
}
</style>
