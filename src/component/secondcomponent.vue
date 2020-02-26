<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
      </div>
      <div v-for="article in articles" :key="article.id" class="text item">
        {{article.title}}
      </div>
</el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      author: "songwang",
      articles: [],
    }
  }
  }
</script>
 
<style>
</style>