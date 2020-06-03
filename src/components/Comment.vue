<template>
  <div class="comments">
    <p class="head">{{data.user}} {{data.time_ago}}</p>
    <p class="content" v-html="data.content"></p>
    <comment class="sub-comment"
    v-for="comment in data.comments"
    :key="comment.id" :data="comment"/>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['data'],
};
</script>

<style scoped>
.comments {
  padding: 3px;
  line-height: 16px;
}
.head {
  margin: 0px 0px 0px 20px !important;
  margin-bottom: 0px;
  font-size: 0.8em;
  color: rgb(129,129,129);
}
.content {
  margin-top: 0px;
  font-size: 0.8em;
  padding-top: 0px;
  margin: 0px 0px 0px 20px !important;
}
.sub-comment {
  margin-left: 20px;
}


</style>
